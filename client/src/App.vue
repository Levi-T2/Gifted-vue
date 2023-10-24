<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
   <footer class="bg-dark text-light">
    Made with 💖 by CodeWorks
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}


.card-style {
    border: 5px outset rgb(58, 23, 101);
    background-color: rgb(5, 5, 66);
    border-radius: 20px;
    color: white;
    padding: 1rem;
    font-weight: bold;
    box-shadow: 8px 4px 4px rgb(86, 83, 83);
  }
</style>
