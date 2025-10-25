<template>
  <UFooter class="mt-16 lg:mt-32">
    <template #left>
      <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/EckeEcke"
          target="_blank"
          aria-label="Github"
      />
      <UButton
          icon="i-simple-icons-linkedin"
          color="neutral"
          variant="ghost"
          to="https://www.linkedin.com/in/christian-eckardt-41527216a/"
          target="_blank"
          aria-label="LinkedIn"
      />
    </template>
  </UFooter>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  {
    label: 'Portfolio',
    to: 'https://eckeecke.github.io/',
    target: '_blank'
  },
  {
    label: 'About',
    to: '/about',
  }
]
</script>