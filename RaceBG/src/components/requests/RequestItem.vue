<template>
 <li>
    <div>
        <a :href="emailLink">{{ email }}</a>
    </div>
    <div>
      <h5>Brand: {{ racerCar }}</h5>
    </div>
    <div>
       <h5>Model: {{ racerCModel }}</h5>
    </div>
    <div>
      <h5>HorsePower: {{ racerHorsePower }}</h5>
    </div>
    <p>Description Car: {{ message }}</p>
 </li>       
</template>

<script>
export default {
  props: ['email','racerCar','racerCModel','racerHorsePower','message'],
  computed: {
    emailLink(){
        return 'mailto:' + this.email
    }
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>