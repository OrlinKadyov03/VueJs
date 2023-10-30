export default {
    messages(state){
        return state.messages
    },
    hasMessages(state){
        return state.messages && state.messages.length > 0
    }
}