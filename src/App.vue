<template>
     <div class="flex flex-col font-Roboto min-h-screen bg-bgColor">
          <Navigation />
          <RouterView />
     </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<style scoped></style>
