export default {
    addMessages(state,payload){
         state.messages.push(payload)
    },
    setMessages(state,payload){
        state.messages = payload
    }
}