<template>
  <div>
    <h2>Statistike</h2>
    <p>Broj recepata: {{ recipesCount }}</p>

    <!-- Example: listing each recipe by title -->
    <ul>
      <li
        v-for="recipe in recipes"
        :key="recipe.id"
        @click="recipe.id ? openRecipe(recipe.id) : null"
        class="recipe-list-item"
      >
        {{ recipe.title }}
      </li>

    </ul>

    <router-link to="/">Povratak na Home</router-link>
  </div>
</template>

<script lang="ts">
import { computed, onMounted } from 'vue'
import { useRecipeStore } from '../stores/recipeStore'
import { useRouter } from 'vue-router'

export default {
  name: 'LazyStatsView',
  setup() {
    const router = useRouter()
    const recipeStore = useRecipeStore()

    // Optionally ensure recipes are fetched if not loaded
    onMounted(() => {
      if (!recipeStore.recipes.length) {
        recipeStore.fetchRecipes()
      }
    })

    // Computed for the total count
    const recipesCount = computed(() => recipeStore.recipesCount)
    // Computed for the recipe list
    const recipes = computed(() => recipeStore.recipes)

    // When user clicks on a recipe, navigate to /recipes/:id
    const openRecipe = (id: string) => {
      router.push(`/recipes/${id}`)
    }

    return {
      recipesCount,
      recipes,
      openRecipe
    }
  }
}
</script>

<style scoped>
.recipe-list-item {
  cursor: pointer;
  color: #1a1a1a;
  margin: 0.25rem 0;
}
.recipe-list-item:hover {
  color: #42b983;
  text-decoration: underline;
}
</style>
