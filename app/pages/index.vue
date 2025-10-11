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
        <NuxtImg src="/images/illustration-festivities.svg" class="w-64 mx-auto p-8" />
      </div>
    </div>
    <div class="disturber p-8 rounded text-white grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
      <div class="flex flex-col gap-4 justify-center">
        <h2 class="text-3xl font-semibold">
          Dein Event ist nicht dabei?
        </h2>
        <p>
          Erstelle einfach ein neues Event und setze es auf deine eima Bucketlist. Ob du es nur für dich selbst erstellst oder mit deiner Gruppe teilen möchtest, um Kumpanen zu finden, liegt ganz bei dir.
        </p>
        <div class="button-wrapper flex justify-start mt-4">
          <UButton size="xl">Erstelle jetzt dein Event</UButton>
        </div>
      </div>
      <NuxtImg src="/images/illustration-party.svg" class="w-64 mx-auto p-8" />
    </div>
    <div v-if="doneEvents.length > 0" class="mb-32">
      <h2 v-if="value === 'Meine Bucketlist'" class="font-semibold text-2xl mb-8 sm:mb-16">
        Meine abgeschlossenen Events
      </h2>
      <h2 v-else class="font-semibold text-2xl mb-8 sm:mb-16">
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

<style scoped>
.disturber {
  background: var(--color-primary);
}

.disturber .button-wrapper button {
  background: var(--color-accent);
}
</style>