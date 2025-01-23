import { defineStore } from 'pinia';
import { db } from '../firebaseConfig';
import { collection, getDocs, addDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';

export interface Recipe {
  id?: string;
  title: string;
  description: string;
  createdAt?: Date;
}

export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
    recipes: [] as Recipe[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchRecipes() {
      this.loading = true;
      this.error = null;
      try {
        const querySnapshot = await getDocs(collection(db, 'recipes'));
        this.recipes = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Recipe[];
      } catch (err) {
        console.error("Error fetching recipes:", err);
        this.error = 'Failed to fetch recipes!';
      } finally {
        this.loading = false;
      }
    },

    async addRecipe(newRecipe: Omit<Recipe, 'id'>) {
      this.loading = true;
      this.error = null;
      try {
        await addDoc(collection(db, 'recipes'), {
          ...newRecipe,
          createdAt: serverTimestamp()
        });
      } catch (err) {
        console.error("Error adding recipe:", err);
        this.error = 'Failed to add recipe!';
      } finally {
        this.loading = false;
      }
    },

    async deleteRecipe(recipeId: string) {
      this.loading = true;
      this.error = null;
      try {
        await deleteDoc(doc(db, 'recipes', recipeId));
        this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
      } catch (err) {
        console.error("Error deleting recipe:", err);
        this.error = 'Failed to delete recipe!';
      } finally {
        this.loading = false;
      }
    }
  },

  getters: {
    recipesCount: (state) => state.recipes.length,
  }
});
