<template>
    <div>
        <ul>
            <h1>Name : {{  name }}</h1>
            <h1>Phone : {{  phoneNumber }}</h1>
            <h1>Email : {{  emailAddress }}</h1>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['name','phoneNumber','emailAddress'],
    data(){
        return {
            friend:{
               id: "Weso",
               name: "We So",
               phone: "088768686",
               email: "weso@abv.bg",
            },
        }
    }
}
</script>