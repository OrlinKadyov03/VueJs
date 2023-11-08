<template>
    <header>
        <nav>
            <h1>
                <router-link to="/">PetsBreeding</router-link>
            </h1>
        <ul>
            <li><router-link to="/pets">Pets</router-link></li>
            <li v-if="isLoggedIn"><router-link to="/requests">Requests</router-link></li>
            <li v-else><router-link to="/auth">Login</router-link></li>
        </ul>
       </nav>
       <ul v-if="isLoggedIn">
        <base-button v-if="isLoggedIn" @click="logout">Logout</base-button>
       </ul>
    </header>
</template>

<script>
export default {
computed: {
    isLoggedIn(){
        return this.$store.getters.isAuthenticated
    }
},
methods: {
    logout(){
        this.$store.dispatch('logout')
        this.$router.replace('/pets')
    }
}
}
</script>

<style scoped>
header {
width: 100%;
height: 5rem;
background-color: rgb(51, 163, 208);
display: flex;
justify-content: center;
align-items: center;
}

header a {
text-decoration: none;
color: white;
display: inline-block;
padding: 1rem 1.5rem;
border: 1px solid transparent;
border-radius: 20px;
}

a:active,
a:hover,
a.router-link-active {
border: 1px solid white;
}

h1 {
margin: 0;
}

h1 a {
color: white;
margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
border-color: transparent;
}

header nav {
width: 90%;
margin: auto;
display: flex;
justify-content: space-between;
align-items: center;
}

header ul {
list-style: none;
margin: 0;
padding: 0;
display: flex;
justify-content: center;
align-items: center;
}

li {
margin: 0 0.5rem;
}
</style>