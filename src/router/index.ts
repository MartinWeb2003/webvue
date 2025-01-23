import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RecipesView from '../views/RecipesView.vue'
import RecipeDetailsView from '../views/RecipeDetailsView.vue'
import AddRecipeView from '../views/AddRecipeView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const LazyStatsView = () => import('../views/LazyStatsView.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: RecipesView
  },
  {
    path: '/recipes/:id',
    name: 'RecipeDetails',
    component: RecipeDetailsView
  },
  {
    path: '/add-recipe',
    name: 'AddRecipe',
    component: AddRecipeView
  },
  {
    path: '/stats',
    name: 'Stats',
    component: LazyStatsView
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
