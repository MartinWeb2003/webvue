<template>
  <div>
    <h2>Dodaj novi recept</h2>
    <form @submit.prevent="submitForm">
      <label>Naslov:</label>
      <input v-model="title" required />

      <label>Opis:</label>
      <textarea v-model="description" required></textarea>

      <button type="submit">Spremi</button>
      <button type="button" @click="cancel">Odustani</button>

      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRecipeStore } from '../stores/recipeStore';

export default {
  setup() {
    const router = useRouter();
    const recipeStore = useRecipeStore();

    const title = ref('');
    const description = ref('');

    const submitForm = async () => {
      await recipeStore.addRecipe({
        title: title.value,
        description: description.value
      });
      router.push('/recipes');
    };

    const cancel = () => {
      router.push('/recipes');
    };

    return {
      title,
      description,
      submitForm,
      cancel,
      error: recipeStore.error
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  background-color: #f4fdf3;
  color: #2d572c;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 10px;
}

h1, h2, h3 {
  font-weight: 600;
  color: #1f4d1e;
  text-align: center;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;
}

button:hover {
  background-color: #367c39;
}

input, textarea {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #4caf50;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #4caf50;
  border-radius: 10px 10px 0 0;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  margin: 0 15px;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #d4f5d4;
}

.recipe-card {
  border: 1px solid #4caf50;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}

.recipe-card:hover {
  transform: translateY(-5px);
}

.recipe-card h3 {
  margin: 0;
  color: #1f4d1e;
  font-size: 22px;
}

.recipe-card p {
  color: #4d7c4a;
  font-size: 16px;
}

.delete-icon {
  float: right;
  cursor: pointer;
  font-size: 20px;
  color: red;
}

a.back-link {
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  color: #4caf50;
  font-weight: 600;
  transition: color 0.3s ease;
}

a.back-link:hover {
  color: #367c39;
}
.error {
  color: red;
}
</style>
