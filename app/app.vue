<template>
  <UApp :locale="de">
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
  </UApp>
</template>

<script setup lang="ts">
import { de } from '@nuxt/ui/locale'
</script>