<template>
    <base-card>
    <span>
        <input type="checkbox" id="dog" checked @change="setFilters">
        <label for="dog">Dog</label>
    </span>
    <span>
        <input type="checkbox" id="cat" checked @change="setFilters">
        <label for="cat">Cat</label>
    </span>
</base-card>
</template>

<script>
export default {
    emits:['change-filter'],
    data(){
        return{
            filters: {
            dog: true,
            cat: true
          }
        }
    },
    methods:{
        setFilters(event){
            const inputId = event.target.id
            const isActive = event.target.checked
            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive
            }
            this.filters = updatedFilters
            this.$emit('change-filter',updatedFilters)
        }
    }
}
</script>