// src/env.d.ts

/// <reference types="vite/client" />


  declare module '../stores/recipeStore.js' {
    import { StoreDefinition } from 'pinia'

    // If you know the shape, you can define it:
    export const useRecipeStore: StoreDefinition
    export default useRecipeStore
  }
