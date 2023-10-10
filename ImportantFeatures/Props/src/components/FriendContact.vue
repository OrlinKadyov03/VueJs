<template>
    <div>
        <ul>
            <h1>Name : {{  name }} {{ toggleFavoriteProp === '1' ? '(Favourite)' : '' }}</h1>
            <h1>Phone : {{  phoneNumber }}</h1>
            <h1>Email : {{  emailAddress }}</h1>

            <button @click="toggleFavorite">ToggleFavorite</button>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['name','phoneNumber','emailAddress','isFavorite'],
    data(){
        return {
            friend:{
               id: "Weso",
               name: "We So",
               phone: "088768686",
               email: "weso@abv.bg",
            },
            toggleFavoriteProp: this.isFavorite
        }
    },
    methods: {
        toggleFavorite(){
            if(this.toggleFavoriteProp === '1'){
                this.toggleFavoriteProp = '0'
            } else {
                this.toggleFavoriteProp = '1'
            }
        }
    }
}
</script>