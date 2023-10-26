<template>
    <base-card>
    <span class="filter-option">
        <input type="checkbox" id="dog" checked @change="setFilters">
        <label for="dog">Dog</label>
    </span>
    <span class="filter-option">
        <input type="checkbox" id="cat" checked @change="setFilters">
        <label for="cat">Cat</label>
    </span>
    <div class="regi">
        <base-button link to="/Register">Register to add your pet</base-button>
    </div>
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

<style scoped>
.regi {
    text-align: right;
    justify-content: right;
}
h2 {
  margin: 0.5rem 0;
}
.filter-option {
  margin-right: 1rem;
}
.filter-option label,
.filter-option input {
  vertical-align: middle;
}
.filter-option label {
  margin-left: 0.25rem;
}
.filter-option.active label {
  font-weight: bold;
}
</style>