<template>
  <UContainer>
    <h2 class="text-2xl font-semibold my-8">Mein Account</h2>
    <UCard variant="subtle" class="max-w-lg">
      <div class="flex gap-2 items-center mb-6">
        <UAvatar :src="user.avatarImg" size="lg" />
        <span class="text-sm font-semibold">{{ user.name }}</span>
      </div>
      <div class="flex justify-between font-semibold">
        <span>Geplante Events</span>
        <span>10</span>
      </div>
      <div class="flex justify-between font-semibold">
        <span>Abgeschlossene Events</span>
        <span>10</span>
      </div>
      <div class="flex justify-between font-semibold">
        <span>Gruppen</span>
        <span>10</span>
      </div>
      <div class="flex justify-between font-semibold">
        <span>Level</span>
        <span>10</span>
      </div>
      <Placeholder class="h-32" />

      <template #footer>
        <div class="flex justify-between mb-4 font-semibold">
          <div>Level 10</div>
          <div>Level 11</div>
        </div>
        <UProgress v-model="exp" size="lg" class="pb-2" />
      </template>
    </UCard>
    <USeparator class="my-16"/>
    <h2 class="text-2xl font-semibold my-8">Meine Trophäen</h2>
    <UCard variant="subtle">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 items-start py-2">
        <div v-for="trophy in trophies" class="flex items-center justify-center flex-col gap-4">
          <div class="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center" :class="trophy.completed ? 'bg-primary' : 'bg-gray-500 opacity-30'">
            <UIcon name="i-lucide-trophy" class="size-6 text-white"></UIcon>

          </div>
          <h3 class="font-semibold text-center">{{ trophy.label }}</h3>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
<script setup lang="ts">
const userStore = useUserStore()

const user = userStore.user

const exp = ref(50)

const trophies = [
  {
    label: 'Schließe dein 1. Event ab',
    id: 'first_event',
    completed: true,
  },
  {
    label: 'Schließe 5 Events ab',
    id: 'five_events',
    completed: false,
  },
  {
    label: 'Schließe 10 Events ab',
    id: 'ten_events',
    completed: false,
  },
  {
    label: 'Plane dein 1. Event',
    id: 'first_planned_event',
    completed: false,
  },
  {
    label: 'Schließe ein Event jeder Kategorie ab',
    id: 'all_categories',
    completed: false,
  },
  {
    label: 'Gründe deine 1. Gruppe',
    id: 'first_group',
    completed: false,
  },
  {
    label: 'Trete das 1. Mal einer Gruppe bei',
    id: 'first_group_join',
    completed: false,
  },
  {
    label: 'Sei Mitglied in 5 Gruppen',
    id: 'five_groups',
    completed: false,
  },

]
</script>