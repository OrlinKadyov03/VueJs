<template>
   <base-card>

    <base-button 
    @click="selectedResource('stored-resources')" 
    :mode="storedMode">Stored Resources
    </base-button>

    <base-button 
    @click="selectedResource('add-resources')"
    :mode="addMode">Add Resources
    </base-button>
    </base-card>
    <keep-alive>
    <component :is="isSelected"></component>
    </keep-alive>
</template>

<script>

import StoredResources from './StoredResources.vue'
import AddResources from './AddResources.vue'
export default {
   components:{
      StoredResources,
      AddResources
   },
    data(){
      return {
          isSelected: 'stored-resources',
          storedResources:[
           {
             id: 'official-guide',
             name: 'The official guide',
             description: 'Read the official guide for Vue',
             link: 'https://vuejs.org'
           },
           {
             id: 'google',
             name: 'Google',
             description: 'Learn to google',
             link: 'https://google.com'
           }
          ]
      }
    },
    provide(){
      return{
         resources: this.storedResources,
         addResource: this.addResource,
         removeResource: this.removeResource
      }
    },
    computed: {
      storedMode(){
         return this.isSelected === 'stored-resources' ? null : 'flat' 
      },
      addMode(){
         return this.isSelected === 'add-resources' ? null : 'flat'
      }
    },
    methods: {
      selectedResource(cmp){
        this.isSelected = cmp
      },
      addResource(name,description,link){
         const added = {
           id: new Date().toISOString(),
           name: name,
           description: description,
           link: link
         }
         this.storedResources.unshift(added)
         this.isSelected = 'stored-resources'
      },
      removeResource(resId){
         const findInd = this.storedResources.findIndex(res => res.id === resId)
         this.storedResources.splice(findInd, 1)
      },
    }
   }
</script>