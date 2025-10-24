<template>
  <UHeader class="mb-8 sm:mb-16">
    <template #title>
      <h1>eima</h1>
      <Icon name="picon:bucket"  style="color: var(--color-primary);" class="h-6 w-6 mb-1" />
    </template>
    <template #body>
      <UNavigationMenu :items="itemsToDisplay" orientation="vertical" class="-mx-2.5" />
    </template>
    <template #right>
      <UNavigationMenu class="hidden lg:block" :items="itemsToDisplay" />
      <UButton
          v-if="isLoggedIn"
          color="success"
          variant="ghost"
          icon="i-lucide-user-check"
          @click="userStore.isLoggedIn = false"
      />
      <UButton
          v-else
          color="neutral"
          variant="ghost"
          icon="i-lucide-user"
          @click="userStore.isLoggedIn = true"
      />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const userStore = useUserStore()

const items: NavigationMenuItem[] = [
  {
    label: 'Home',
    to: '/',
    icon: 'i-lucide-house',
  },
  {
    label: 'Neues Event',
    to: '/new',
    icon: 'i-lucide-image-plus',
    requiresLogin: true,
  },
  {
    label: 'Neue Gruppe',
    icon: 'i-lucide-user-plus',
    to: '/new-group',
    requiresLogin: true,
  },
  {
    label: 'About',
    icon: 'i-lucide-info',
    to: '/about',
  },
  {
    label: 'Portfolio',
    icon: 'i-lucide-rocket',
    to: 'https://eckeecke.github.io',
    target: '_blank'
  }
]

const isLoggedIn = computed(() => userStore.isLoggedIn)

const itemsToDisplay = computed<NavigationMenuItem[]>(() =>
  items.filter(item => {
    if (!item.requiresLogin) return true
    if (item.requiresLogin) return isLoggedIn.value
  })
)
</script>

<style>
h1 {
  color: var(--color-primary);
}

</style>

