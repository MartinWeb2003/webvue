<template>
  <div class="container">
    <div v-if="selectedRecipe" class="recipe-details">
      <h2 class="title">Detalji recepta: {{ selectedRecipe.title }}</h2>
      <p class="description">{{ selectedRecipe.description }}</p>
      <router-link to="/recipes" class="back-link">Natrag na popis</router-link>
    </div>
    <div v-else class="not-found">
      <p>Recept nije pronađen.</p>
      <router-link to="/recipes" class="back-link">Natrag na popis</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useRecipeStore } from '../stores/recipeStore'

export default {
  name: 'RecipeDetailsView',
  setup() {
    const route = useRoute()
    const recipeStore = useRecipeStore()

    const recipeId = route.params.id as string;

    onMounted(() => {
      if (!recipeStore.recipes.length) {
        recipeStore.fetchRecipes()
      }
    })

    const selectedRecipe = computed(() => {
      return recipeStore.recipes.find(r => r.id === recipeId)
    })

    return {
      selectedRecipe
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f4fdf3;
  border: 1px solid #4caf50;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.title {
  color: #2d572c;
  font-size: 28px;
  font-weight: 600;
}

.description {
  font-size: 18px;
  color: #4d7c4a;
  margin: 20px 0;
}

.back-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.back-link:hover {
  background-color: #388e3c;
}

.not-found {
  color: red;
  font-size: 20px;
}
</style>
