<template>
  <UHeader class="mb-8 sm:mb-16">
    <template #title>
      <h1>eima</h1>
      <Icon name="picon:bucket"  style="color: var(--color-primary);" class="h-6 w-6 mb-1" />
    </template>
    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
    <template #right>
      <UNavigationMenu class="hidden lg:block" :items="items" />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    icon: 'i-lucide-house',
  }, {
    label: 'Neues Event',
    to: '/new',
    icon: 'i-lucide-image-plus',
  }, {
    label: 'Neue Gruppe',
    icon: 'i-lucide-user-plus',
    to: '/new-group',
  },
  {
    label: 'About',
    icon: 'i-lucide-info',
    to: '/about',
  },
  {
    label: 'Meine Website',
    icon: 'i-lucide-rocket',
    to: 'https://eckeecke.github.io',
    target: '_blank'
  }
])
</script>

<style>
h1 {
  color: var(--color-primary);
}

</style>

