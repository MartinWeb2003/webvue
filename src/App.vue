<template>
  <div>
    <header class="app-header">
      <!-- Your logo or brand could go here -->
      <div class="logo-area">
        <img src="@/assets/logo.svg" alt="Logo" class="logo" />
      </div>

      <nav class="main-nav">
        <!-- Replace with your router-link elements -->
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/recipes" class="nav-link">Recipes</router-link>
      </nav>
    </header>

    <!-- The rest of the app’s pages will be rendered here -->
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App'
}
</script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: #f8f8f8; /* or any color you like */
  border-bottom: 1px solid #ccc;
}

.logo-area {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  width: auto;
}

.main-nav {
  display: flex;
  gap: 1rem; /* spacing between links */
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: all 0.2s;
}

.nav-link:hover {
  color: #42b983; /* or some hover effect */
  transform: translateY(-1px);
}
</style>
