import { createStore } from "vuex"

import chatPopupModule from './modules/chatPopup'

const store = createStore({
  modules: {
    chatPopup: chatPopupModule
  }
})

export default store