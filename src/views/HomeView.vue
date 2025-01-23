<template>
  <div class="home-container">
    <h1 class="heading">Dobrodošli u MyRecipes Aplikaciju!</h1>
    <p class="intro-text">
      Pregledajte recepte ili dodajte nove. Upravljajte svojom kolekcijom omiljenih recepata na jednostavan način.
    </p>
    <router-link to="/recipes" class="btn">Idi na recepte</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  background-color: #f4fdf3;
  color: #2d572c;
}

.heading {
  font-size: 2.5rem;
  font-weight: 600;
  color: #1f4d1e;
  margin-bottom: 1rem;
}

.intro-text {
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
  color: #4d7c4a;
}

.btn {
  background-color: #4caf50;
  color: white;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: 10px;
  font-weight: bold;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.btn:hover {
  background-color: #367c39;
  transform: translateY(-3px);
}
</style>
