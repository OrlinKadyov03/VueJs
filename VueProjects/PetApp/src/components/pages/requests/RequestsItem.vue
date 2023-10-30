<template>
    <li>
        <div>
            <a :href="emailLink">{{email}}</a>
        </div>
        <p>{{ message }}</p>
        <p>{{ phoneNumber }}</p>
    </li>
</template>

<script>
export default {
    props: ['email','message','phoneNumber'],
    computed: {
        emailLink(){
            return 'mailto:' + this.email
        }
    }
}
</script>