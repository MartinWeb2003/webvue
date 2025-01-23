<template>
  <div class="container">
    <h2>Popis recepata</h2>
    <button @click="fetchAll">Dohvati recepte</button>

    <p v-if="loading">Učitavam recepte...</p>
    <p v-if="error" class="error">{{ error }}</p>

    <ul v-if="recipes.length">
      <li
        v-for="recipe in recipes"
        :key="recipe.id"
        class="recipe-list-item"
        @click="recipe.id ? viewRecipe(recipe.id) : null"
      >
        <h3>{{ recipe.title }}</h3>
        <p>{{ recipe.description }}</p>
        <span class="delete-icon" @click.stop="deleteRecipe(recipe.id)">&times;</span>
      </li>
    </ul>

    <button @click="addNewRecipe">Dodaj novi recept</button>
  </div>
</template>

<script lang="ts">
import { computed, onMounted } from 'vue';
import { useRecipeStore } from '../stores/recipeStore';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const recipeStore = useRecipeStore();

    onMounted(() => {
      recipeStore.fetchRecipes();
    });

    const fetchAll = () => recipeStore.fetchRecipes();

    const viewRecipe = (id: string) => {
      if (id) {
        router.push(`/recipes/${id}`);
      }
    };

    const deleteRecipe = async (id: string) => {
      await recipeStore.deleteRecipe(id);
    };

    const loading = computed(() => recipeStore.loading);
    const error = computed(() => recipeStore.error);
    const recipes = computed(() => recipeStore.recipes);

    const addNewRecipe = () => {
      router.push('/add-recipe');
    };

    return {
      fetchAll,
      viewRecipe,
      deleteRecipe,
      loading,
      error,
      recipes,
      addNewRecipe
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #f4f4f4;
  margin: 10px 0;
  padding: 10px;
  position: relative;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

li:hover {
  filter: brightness(0.95);
}

div.container {
  width: 95%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}

h3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  color: #1f4d1e;
  font-size: 22px;
}

p {
  color: #4d7c4a;
  font-size: 16px;
}

.delete-icon {
  color: red;
  cursor: pointer;
  font-size: 3.5em;
  position: absolute;
  right: 2%;
  top: 18%;
  transition: color 0.3s;
}

.delete-icon:hover {
  color: darkred;
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
  margin: 5px;
}

button:hover {
  background-color: #367c39;
}
</style>
