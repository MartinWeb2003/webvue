<template>
  <div @click="onCardClick" class="recipe-card">
    <h3>{{ recipe.title }}</h3>
    <p>{{ recipe.description }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MyStatelessRecipeCard',
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  emits: ['clickCard'],
  methods: {
    onCardClick() {
      // Emit event with the recipe ID
      this.$emit('clickCard', this.recipe.id)
    }
  }
}
</script>

<style scoped>
.recipe-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;           /* pointer cursor helps signify clickable */
  transition: background-color 0.2s;
}

.recipe-card:hover {
  background-color: #b7eec3; /* highlight on hover */
}
</style>
