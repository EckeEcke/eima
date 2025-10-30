<template>
  <welcome v-if="!isLoggedIn"></welcome>
  <UContainer v-else>
    <div class="mb-32">
      <h2 v-if="selectedGroup === '0'" class="font-semibold text-2xl mb-8">
        {{ selectedGroupData.name }}
      </h2>
      <h2 v-else class="font-semibold text-2xl mb-8">
        Offene Events in der Gruppe <i>"{{ selectedGroupData.name }}"</i>
      </h2>
      <div>
        <div class="mb-8">
          <UInputMenu v-model="selectedGroup" :items="groups" value-key="id" :key="groups.length" />
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
      <div v-if="selectedGroup !== '0'" class="flex justify-end my-16">
        <UButton
            v-if="selectedGroupData?.creator?.userId === user.userId"
            variant="subtle"
            color="neutral"
            label="Gruppe löschen"
            @click="deleteGroup"
        />
        <UButton v-else variant="subtle" color="neutral" label="Gruppe verlassen" />
      </div>
    </div>
    <Disturber v-if="openEvents.length > 0" />
    <div v-if="doneEvents.length > 0">
      <h2 v-if="selectedGroup === '0'" class="font-semibold text-2xl mb-8">
        Meine abgeschlossenen Events
      </h2>
      <h2 v-else class="font-semibold text-2xl mb-8">
        Vergangene Events in der Gruppe <i>"{{ selectedGroup }}"</i>
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

const userStore = useUserStore()
const groupStore = useGroupStore()
const eventStore = useEventStore()

const isLoggedIn = computed(() => userStore.isLoggedIn)

const user = computed(() => userStore.user)

const groups = computed(() => groupStore.getGroupsAsInputMenuItems)

const { selectedGroup } = toRefs(groupStore)

const selectedGroupData = computed(() => groupStore.getSelectedGroupData)

const displayedEntries = computed(() => eventStore.getEventsForSelectedGroup)

const openEvents = computed(() => [...displayedEntries.value].filter(entry => !entry.hasHappened))
const doneEvents = computed(() => [...displayedEntries.value].filter(entry => entry.hasHappened))

const deleteGroup = () => {
  const groupNameToDelete = selectedGroup.value
  confirm(`Möchtest du die Gruppe "${groupNameToDelete}" wirklich löschen?`)
  groupStore.deleteGroupByName(groupNameToDelete)
}
</script>