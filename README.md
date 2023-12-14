# Проект: "chatBot for 'OPTIMAL CITY Technologies'"

---

## Описание:

Тестовое задание:
"Необходимо написать приложение-чат бота. В основном окне должен быть расположен чат-виджет, где пользователь сможет набирать сообщение боту и получать от него ответы. При открытии окна бот должен поприветствовать пользователя, после чего вывести ему кнопки с вариантами продолжения дальнейшего общения. Например “Привет! Что я могу для Вас сделать?” и кнопки с вариантами “Заказать пиццу”, “Установить будильник”, “Вывести погоду”. При нажатии на кнопку реплика (со стороны пользователя) должна появиться в виджете так, как если бы пользователь набрал текст кнопки вручную. Бот должен ответить что то вроде “Хорошо, я закажу пиццу. Что еще могу сделать?”.

Бота нет необходимости делать сколь-либо интеллектуальным. Также нет необходимости использовать внешние сервисы или сетевые запросы. Весь интеллект бота можно захардкодить блоками if прямо в приложении.

Общение только текстом, без картинок, емодзи и т.п."

[Ссылка на деплой](https://melodious-concha-cebc1b.netlify.app/)

---

#### Стэк технологий:

Vue3, Vuex, JS, CSS, Vite, Vue-router

---

## Установка

- `npm install` — установить зависимости
- `npm run dev` — запуск сервера разработки
- `npm run build` — сборка проекта

---

## Пример кода:

```
<ul class="chat-modal__content" id="chat-content">
  <li v-for="chat in   chatData  " class="content__message ">
    <div class="message__block"
      :class="{ 'content__message__user-2': chat.id == 'user2', 'content__message__user-1': chat.id == 'bot' }">
      <figure class="icon__background" :class="`icon__background__${chat.id}`">
        <img :src="`/public/assets/icons/${chat.id}-icon.svg`" alt="user avatar." class="message__icon">
      </figure>
      <p class="message__text" @input="userText">{{ chat.text }}</p>
    </div>
    <ul class="message__opinion-block" v-if="chat.opinions" :class="{ 'padding-top': chat.opinions.length > 0 }">
      <li class="opinion-block" v-for="opinion in chat.opinions">
        <h6 class="opinion-block__label" @click="addMessage(opinion)">{{ opinion }}</h6>
      </li>
    </ul>
  </li>
</ul>
```
