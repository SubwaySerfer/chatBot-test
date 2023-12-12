<template>
  <div class="chat-wrapper">
    <div class="chat-modal__close" v-if="isChatPopupOpen">
      <button>Открыть чат</button>
    </div>
    <div class="chat-modal" v-else>
      <div class="chat-modal__content">main content</div>

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
}

.chat-modal__content {
  flex: 1;
  overflow: auto;
}

.chat-modal__text-field {
  height: 6rem;
  border-top: 1px solid grey;
  display: flex;
  width: 100%;
  align-items: center
}

.text-field__textarea {
  width: 100%;
  height: 100%;
  resize: none;
  padding: 1rem 1.5rem;
}
</style>
