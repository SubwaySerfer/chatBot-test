import mutations from "./mutations";
import getters from "./getters";
import actions from './actions'

export default {
  namespaced: true, state() {
    return {
      isChatPopupOpen: false,
      chatData: [
      ],
      botData: []
    }
  },
  mutations,
  getters,
  actions
}
