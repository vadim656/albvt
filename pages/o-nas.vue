<template>
  <div class="container ">
    <div class="py-[47px] mt-[47px] sm:mt-0 flex flex-col w-full gap-12">
      <heading-h-3>О нас</heading-h-3>
      <div class="flex flex-col w-full gap-4">
        <span class="font-medium">Наша лицензия</span>
        <div class="grid grid-cols-2 gap-[20px] lg:grid-cols-4 w-full">
          <div
            v-for="(img, i) in photo.slice(0, 4)"
            :key="i"
            class="flex flex-col justify-center items-center gap-1 bg-white shadow-md py-2 rounded-[5px] "
          >
            <img :src="img.src" alt="" @click="openPhoto(i)" />
            <span class="w-full text-center text-[14px]"
              >Лицензия Альба Вита ({{ i + 1 }} страница)</span
            >
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full gap-4">
        <span class="font-medium">Свидетельства ОГРН и ИНН</span>
        <div class="grid grid-cols-2 gap-[20px] lg:grid-cols-4 w-full">
          <div
            v-for="(img, i) in photo.slice(4, 7)"
            :key="i"
            class="flex flex-col justify-center items-center gap-1 bg-white shadow-md py-2 rounded-[5px] "
          >
            <img :src="img.src" alt="" @click="openPhoto(i)" />
            <span class="w-full text-center text-[14px]">{{ img.title }}</span>
          </div>

          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <div
      v-if="modalPhoto == true && id.length > 0"
      class="fixed w-screen top-0 left-0 h-screen  flex justify-center items-center"
    >
      <div class="fixed w-screen top-0 left-0 h-screen bg-[#343434]/50"></div>
      <div
        class="flex gap-[20px] items-center w-full max-w-[300px] sm:max-w-[800px]"
      >
        <button 
        @click="prevSlide()" 

        class="z-[3]"
        :class="[indexPhoto !== 0 ? 'opacity-100' : 'opacity-30 cursor-disable']"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-white z-[3]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <img :src="id" alt="" class="w-full  h-auto object-cover z-[3]" />
        <button 
        @click="nextSlide()" 

        class="z-[3]"
        :class="[indexPhoto !== 5 ? 'opacity-100' : 'opacity-30 cursor-disable']"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-white z-[3]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import HeadingH3 from '~/components/HeadingH3.vue'
export default {
  components: { HeadingH3 },
  data () {
    return {
      id: '',
      indexPhoto: null,
      photo: [
        { src: '/img/license-1-b-400x516.png' },
        { src: '/img/license-2-b-400x516.png' },
        { src: '/img/license-3-b-400x516.png' },
        { src: '/img/license-4-b-400x516.png' },
        {
          src: '/img/proof-ogrn-400x516.png',
          title: 'Свидетельство ОГРН Альба Вита'
        },
        {
          src: '/img/proof-inn-400x516.png',
          title: 'Свидетельство ИНН Альба Вита'
        }
      ],
      modalPhoto: false
    }
  },
  layout: 'MainLayout',
  methods: {
    openPhoto (id) {
      this.id = this.photo[id].src
      this.indexPhoto = id
      console.log(id)
      this.modalPhoto = true
    },
    nextSlide () {
      if (this.indexPhoto !== 5) {
        this.id = this.photo[this.indexPhoto++].src
      }
    },
    prevSlide () {
      if (this.indexPhoto !== 0) {
        this.id = this.photo[this.indexPhoto--].src
      }
    }
  }
}
</script>

<style></style>
