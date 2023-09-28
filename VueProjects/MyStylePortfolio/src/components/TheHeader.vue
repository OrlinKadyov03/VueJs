<template>
        <header>
            <nav>
                <h1><router-link to="/home">Orlin's Portfolio</router-link></h1>
            <ul>
                <li><router-link class="active" to="/home">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/services">Service</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
           </nav>
        </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color:rgb(145, 17, 145);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
}
header a {
  text-decoration: none;
  color:white;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 10px ;
}
a:active,
a:hover,
a.router-link-active {
  border: 2px solid white;
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