<template>
  <UContainer>
    <div class="mb-32">
      <h2 v-if="value === 'Meine Bucketlist'" class="font-semibold text-2xl mb-8">
        {{ value }}
      </h2>
      <h2 v-else class="font-semibold text-2xl mb-8">
        Offene Events in der Gruppe <i>"{{ value }}"</i>
      </h2>
      <div>
        <div class="mb-8">
          <UInputMenu v-model="value" :items="groups"/>
        </div>
      </div>
      <div v-if="openEvents.length > 0" class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <PublicEventCard
            v-for="entry in openEvents"
            :event-object="entry"
        />
      </div>
      <div v-else class="mt-16 sm:mt-32">
        <p class="text-lg text-center font-semibold max-w-96 mx-auto">Noch nichts auf der Bucketlist? Erstelle einfach ein neues Event oder schau in deinen Gruppen vorbei, was deine Freunde starten wollen.</p>
        <div class="flex justify-center mt-8">
          <UButton to="/new" size="xl">Erstelle jetzt dein Event</UButton>
        </div>
        <NuxtImg src="/images/illustration-festivities.svg" class="w-64 mx-auto p-8" />
      </div>
    </div>
    <Disturber v-if="openEvents.length > 0" />
    <div v-if="doneEvents.length > 0" class="mb-32">
      <h2 v-if="value === 'Meine Bucketlist'" class="font-semibold text-2xl mb-8">
        Meine abgeschlossenen Events
      </h2>
      <h2 v-else class="font-semibold text-2xl mb-8">
        Vergangene Events in der Gruppe <i>"{{ value }}"</i>
      </h2>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <PublicEventCard
            v-for="entry in doneEvents"
            :event-object="entry"
        />
    </div>
  </div>
  </UContainer>
</template>

<script setup lang="ts">
import Disturber from "~/components/Disturber.vue";

const groups = computed(() => {
  const allGroups = entries.value.flatMap(event => event.groups)
  return ['Meine Bucketlist', ...new Set(allGroups)]
})

const value = ref('Meine Bucketlist')

const eventStore = useEventStore()

const entries = computed(() => eventStore.events)

const displayedEntries = computed(() => {
  if (value.value === 'Meine Bucketlist') {
    return [...eventStore.events].filter(event => !event.groups || event.groups.length === 0)
  }
  return [...eventStore.events].filter(event => event.groups.includes(value.value))
})

const openEvents = computed(() => [...displayedEntries.value].filter(entry => !entry.hasHappened))
const doneEvents = computed(() => [...displayedEntries.value].filter(entry => entry.hasHappened))
</script>