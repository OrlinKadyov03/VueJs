<template>
    <base-card>
      <h2>Find Your Racer</h2>
      <h4>Track 1: Track 2: Track 3:</h4>
      <span class="filter-option">
        <input type="checkbox" id="k1" @change="setFilter" checked>
        <label for="k1">K1</label>
      </span>
      <span class="filter-option">
        <input type="checkbox" id="s1" @change="setFilter" checked>
        <label for="s1">S1</label>
      </span>
      <span class="filter-option">
        <input type="checkbox" id="n1" @change="setFilter" checked>
        <label for="n1">N1</label>
      </span>
    </base-card>
</template>

<script>
export default {
    emits: ['change-filter'],
    data() {
        return {
            filters: {
                k1: true,
                s1: true,
                n1: true
            }
        }
    },
    methods: {
      setFilter(event){
        const inputId = event.target.id
        const isActive = event.target.checked
        const updatedFilters = {
            ...this.filters,
        [inputId]: isActive
        }
        this.filters = updatedFilters
        this.$emit('change-filter', updatedFilters)
      }
    }
}
</script>

<style scoped>
h2 {
  margin-top: 5px;
  justify-content: center;
  text-align: center;
}

h4 {
  margin-top: -5px;
  margin-bottom: 5px;
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