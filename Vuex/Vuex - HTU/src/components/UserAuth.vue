<template>
    <button @click="login" v-if="!Auth">Login</button>
    <button @click="logout" v-else>Logout</button>
</template>

<script>
export default {
    methods: {
        login(){
           this.$store.dispatch('login')
        },
        logout(){
            this.$store.dispatch('logout')
        }
    },
    computed: {
        Auth(){
            return this.$store.getters.AuthGet
        }
    }
}
</script>