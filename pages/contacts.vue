<template>
  <div class="container ">
    <div class="py-[47px] mt-[47px] sm:mt-0 flex flex-col w-full gap-12">
      <heading-h-3>Контакты</heading-h-3>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
        <div class="flex flex-col gap-2">
          <p class="font-bold">Наш адрес:</p>
          <br />
          <p>344022, г. Ростов-на-Дону, ул. Восточная, 11</p>
          <br />
          <div class="flex gap-2">
            <div class="flex flex-col gap-1">
              <p>Тел:</p>
              <p>E-mail:</p>
            </div>
            <div class="flex flex-col gap-1">
              <a href="tel:88632418555" class="text-main">
                +7 (863) 241-85-55</a
              >
              <a href="email: albavita2019@yandex.ru" class="text-main">
                albavita2019@yandex.ru</a
              >
            </div>
          </div>

          <br />
          <p>Время и график работы:</p>
          <p>Пн-Вс 7:00-11:00 — сдача анализов</p>
          <p>Пн-Вс 7:00-15:00 — можно забрать результаты исследований</p>
        </div>
        <div>
          <div class="flex flex-col gap-2">
            <p class="font-bold">Адреса медицинских офисов нашего партнера:</p>
            <br />
            <p>– г. Ростов-на-Дону, ул. Станиславского, 54/11</p>
            <p>– г. Ростов-на-Дону, ул. Ленина, 44/6</p>
            <p>– г. Ростов-на-Дону, пр. Космонавтов, 6/13</p>
            <p>– г. Ростов-на-Дону, ул. 1-й Конной Армии, 29а</p>
            <p>– г. Ростов-на-Дону, ул. Зорге, 52</p>
            <p>– г. Ростов-на-Дону, ул. Таганрогская, 143</p>
            <p>– г. Ростов-на-Дону, ул. Текучева, 143</p>
            <p>– г. Ростов-на-Дону, пр. Стачки, 26</p>
            <p>– г. Ростов-на-Дону, пр. 40-летия Победы, 89</p>
            <p>– г. Ростов-на-Дону, пер. Днепровский, 105/98</p>
            <p>– г. Ростов-на-Дону, ул. Еременко, 97/29</p>
            <p>– г. Ростов-на-Дону, ул. Богданова, 79</p>
            <p>– г. Ростов-на-Дону, ул. Миронова, 10</p>
            <p>– г. Ростов-на-Дону, ул. Большая Садовая, 130/33</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadingH3 from '~/components/HeadingH3.vue'
export default {
  components: { HeadingH3 },
  layout: 'MainLayout'
}
</script>

<style></style>
