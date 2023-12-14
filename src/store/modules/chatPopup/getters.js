export default {
  getIsChatOpen(state) {
    return state.isChatPopupOpen
  },
  getChatData(state) {
    return state.chatData
  },
  getBotData(state) {
    return state.botData
  }
}
