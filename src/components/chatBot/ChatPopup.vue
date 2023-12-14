<template>
  <div class="chat-wrapper">
    <div class="chat-modal__close" v-if="isChatPopupOpen">
      <button>Открыть чат</button>
    </div>

    <div class="chat-modal" v-else>
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

      <div class="chat-modal__text-field">
        <textarea v-model="textValue" name="message" id="message" cols="30" rows="10" class="text-field__textarea"
          @keydown.enter="addMessage(textValue)" @keydown.enter.prevent>
        </textarea>
        <img @click="addMessage(textValue)" src="/public/assets/icons/enter-icon.svg" alt="enter message button."
          class="text-field__icon">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      botTextData: []
    }
  },
  created() {
    this.$store.commit('chatPopup/createBotData');
    if (this.chatData.length == 0) {
      this.startDialog()
    }
  },
  // TODO: убрать повторение аватарок, когда несколько писем подряд.
  methods: {
    addMessage(value, user = 'user2', currentOpinions = []) {
      if (value == '') {
        return
      }

      if (currentOpinions) {
        this.$store.commit('chatPopup/addMessageToData', ({ 'id': user, 'text': value, 'opinions': currentOpinions }))
      } else {
        this.$store.commit('chatPopup/addMessageToData', ({ 'id': user, 'text': value }))
      }

      let check = this.botTextData.map(el => el.textName.includes(value))
      if (check.includes(true) && user == 'user2') {
        let currentText = this.botTextData[check.indexOf(true)]
        this.createBotAnswer(currentText.text, currentText.opinions)
      }

      this.scrollChat()
      this.textValue = ''
    },
    createBotAnswer(text, callOptions) {
      setTimeout(() => {
        this.addMessage(text, 'bot', callOptions)
      }, 100)
    },
    scrollChat() {
      const chatContent = document.getElementById('chat-content');

      setTimeout(() => {
        if (chatContent) {
          chatContent.scrollTop = chatContent.scrollHeight;
        }
      }, 200)

      //TODO: сделать прокрутку
    },
    startDialog() {
      this.botTextData = this.botData.botText

      this.addMessage(this.botTextData[0].text, this.botTextData[0].id, this.botTextData[0].opinions)
    }
  },
  computed: {
    isChatPopupOpen() {
      return this.$store.getters['chatPopup/getIsChatOpen']
    },
    chatData() {
      return this.$store.getters['chatPopup/getChatData']
    },
    botData() {
      return this.$store.getters['chatPopup/getBotData']
    }
  },
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
  gap: .5rem;
  box-shadow: 2px 5px 10px 1px rgba(143, 135, 143, 1);
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
  scroll-behavior: smooth;
}

.content__message {
  display: flex;
  flex-direction: column;
}

.message__block {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.message__opinion-block {
  flex: 1;
  list-style-type: none;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.padding-top {
  padding-top: 1rem;
}

.opinion-block {
  background-color: rgb(139, 193, 241);
  padding: .7rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  flex: 1;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px
}

.opinion-block__label {
  font-size: 1.4rem;
  font-weight: 400;
  text-wrap: nowrap;
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
  min-width: 40px;
  height: 40px;
  display: flex;
  place-content: center center;
  border-radius: 50%;
}

.icon__background__bot {
  background-color: deepskyblue;
  padding-right: 1px;
}

.icon__background__user2 {
  background-color: burlywood
}

.message__text {
  background-color: aliceblue;
  border-radius: 1rem;
  padding: .5rem 1rem;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px
}

.chat-modal__text-field {
  padding: 0 5px 4px;
  height: 6rem;
  /* border-top: 1px solid grey; */
  display: flex;
  width: 100%;
  align-items: center
}

.text-field__icon {
  position: absolute;
  width: 2rem;
  right: 1.2rem;
  cursor: pointer;
}

.text-field__textarea {
  width: 100%;
  height: 100%;
  resize: none;
  padding: 1rem 2.5rem 1rem 1rem;
  border: none;
  border-radius: 1rem;
}

@media screen and (max-width: 450px) {
  .chat-modal {
    width: 100%;
  }

  .chat-wrapper {
    right: 0;
  }
}
</style>
