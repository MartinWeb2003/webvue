<template>
  <div>
    <h3>Dodaj novi recept</h3>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Naslov:</label>
        <input v-model="title" required />
      </div>
      <div>
        <label>Opis:</label>
        <textarea v-model="description" required></textarea>
      </div>
      <button type="submit">Spremi</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRecipeStore } from '../stores/recipeStore.js'

export default {
  name: 'MyStatefulRecipeForm',
  setup() {
    const title = ref('')
    const description = ref('')
    const recipeStore = useRecipeStore()

    const handleSubmit = () => {
      recipeStore.addRecipe({
        title: title.value,
        description: description.value
      })
      // Očistimo polja nakon spremanja
      title.value = ''
      description.value = ''
      alert('Recept dodan!')
    }

    return {
      title,
      description,
      handleSubmit
    }
  }
}
</script>

<style scoped>
form {
  margin-bottom: 1rem;
}
</style>
