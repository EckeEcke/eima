<template>
  <Header />
  <slot />
  <Footer />
  <div class="fixed bottom-4 right-4">
    <UColorModeButton />
  </div>
</template>

<script setup lang="ts">
import Footer from "~/components/Footer.vue";
</script>