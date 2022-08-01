import { gql } from 'graphql-tag'

import { LocalScheme } from '~auth/runtime'

const LOGIN_MUTATION = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    login(input: { password: $password, username: $username }) {
      authToken
      refreshToken
      user {
        id
        name
        firstName
        lastName
      }
    }
  }
`

export const LOGOUT_MUTATION = gql`
  mutation LogOutMutation {
    logOut
  }
`

export const USER_DETAILS_QUERY = gql`
  query UserDetailsQuery {
    customer {
      email
      username
      id
      role
      jwtRefreshToken
      firstName
      lastName
      databaseId
    }
  }
`

export default class GraphQLScheme extends LocalScheme {
  async login (credentials, { reset = true } = {}) {
    const {
      apolloProvider: { defaultClient: apolloClient },
      $apolloHelpers
    } = this.$auth.ctx.app

    // Ditch any leftover local tokens before attempting to log in
    if (reset) {
      this.$auth.reset({ resetInterceptor: false })
    }

    // Make login request
    const response = await apolloClient
      .mutate({
        mutation: LOGIN_MUTATION,
        variables: credentials
      })
      .then(({ data }) => data && data.login)

    this.token.set(response.authToken)

    // Set your graphql-token
    await $apolloHelpers.onLogin(response.authToken)

    // // Fetch user
    await this.fetchUser()

    // Update tokens
    return response.authToken
  }

  fetchUser () {
    const {
      apolloProvider: { defaultClient: apolloClient }
    } = this.$auth.ctx.app

    // Token is required but not available
    if (!this.check().valid) {
      return
    }

    // Try to fetch user
    return apolloClient
      .query({
        query: USER_DETAILS_QUERY
      })
      .then(({ data }) => {
        if (!data.customer) {
          const error = new Error(`Запрещен просмотр`)
          return Promise.reject(error)
        }

        this.$auth.setUser(data.customer)

        return data.customer
      })
      .catch(error => {
        this.$auth.callOnError(error, { method: 'fetchUser' })
        return Promise.reject(error)
      })
  }

  async logout () {
    const {
      apolloProvider: { defaultClient: apolloClient },
      $apolloHelpers
    } = this.$auth.ctx.app

    await apolloClient
      .mutate({
        mutation: LOGOUT_MUTATION
      })
      .catch(() => {
        // Handle errors
      })

    // But reset regardless
    $apolloHelpers.onLogout()
    return this.$auth.reset({ resetInterceptor: false })
  }

  initializeRequestInterceptor () {
    // Instead of initializing axios interceptors, Do nothing
    // Since we are not using axios
  }

  reset () {
    this.$auth.setUser(false)
    this.token.reset()
  }
}
