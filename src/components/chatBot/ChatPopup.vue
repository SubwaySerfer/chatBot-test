<template>
  <div class="chat-wrapper">
    <div class="chat-modal__close" v-if="isChatPopupOpen">
      <button>Открыть чат</button>
    </div>
    <div class="chat-modal" v-else>
      <!-- <div class="chat-modal__content"> -->
      <ul class="chat-modal__content">
        <li class="content__message content__message__user-1">
          <figure class="icon__background icon__background__robot">
            <img src="/public/assets/icons/robot-icon.svg" alt="bot avatar." class="message__icon">
          </figure>
          <p class="message__text">test</p>
        </li>
        <li class="content__message content__message__user-2">
          <figure class="icon__background icon__background__user">
            <img src="/public/assets/icons/user-icon.svg" alt="user avatar." class="message__icon">
          </figure>
          <p class="message__text">test2</p>
        </li>
      </ul>
      <!-- </div> -->

      <div class="chat-modal__text-field">
        <textarea name="" id="" cols="30" rows="10" class="text-field__textarea"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isChatPopupOpen() {
      return this.$store.getters['chatPopup/getIsChatOpen']
    }
  }
}
</script>

<style scoped>
/* TODO: Проверить если экран отдалить, чтобы не сильно вываливался popup */
.chat-wrapper {
  width: auto;
  height: auto;
  position: fixed;
  right: 10vw;
  bottom: 10vh;
  /* place-items: end center; */
}

.chat-modal__close {
  width: 10rem;
  height: 5rem;
  background-color: aqua;
  display: flex;
  place-items: center;
  /* width: 100%; */
}

.chat-modal {
  display: flex;
  flex-direction: column;
  height: 520px;
  width: 350px;
  background-color: cadetblue;
  border-radius: 1rem;
  justify-content: space-between;
  align-items: center;
  border: 2px solid cadetblue;
}

.chat-modal__content {
  flex: 1;
  overflow: auto;
  list-style-type: none;
  width: 100%;
  font-size: 1.4rem;
  padding: 2rem 2rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
}

.content__message {
  display: flex;
  gap: 1rem;
}

.content__message__user-2 {
  justify-content: end;
  flex-direction: row-reverse;
}

.message__icon {
  width: 24px;
}

.icon__background {
  background-color: aliceblue;
  width: 40px;
  height: 40px;
  display: flex;
  place-content: center center;
  border-radius: 50%;
}

.icon__background__robot {
  background-color: deepskyblue
}

.icon__background__user {
  background-color: burlywood
}

.message__text {
  background-color: aliceblue;
  border-radius: 1rem;
  padding: .5rem 1rem;

}

.chat-modal__text-field {
  padding: 0 5px 4px;
  height: 6rem;
  /* border-top: 1px solid grey; */
  display: flex;
  width: 100%;
  align-items: center
}

.text-field__textarea {
  width: 100%;
  height: 100%;
  resize: none;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 1rem;
}
</style>
