import jsonObj from '/public/assets/data/chatData.json'

// export default {
//   getRecentPosts(state) {
//     state.recentPosts = jsonObj.posts
//   },
// }

export default {
  toggleChatPopup(state) {
    state.isChatPopupOpen = !isChatPopupOpen
  },
  addMessageToData(state, payload) {
    state.chatData.push(payload)
  },
  createBotData(state) {
    state.botData = jsonObj
  }
}
