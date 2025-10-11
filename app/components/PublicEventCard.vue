<template>
  <UCard class="w-full" variant="subtle" :ui="{ body: 'sm:px-4 sm:p-4', header: 'p-0 sm:p-0', footer: 'sm:px-4', }">
    <template #header>
      <div class="relative">
        <NuxtLink :to="detailPageUrl" class="bg-black" :class="eventObject?.hasHappened ? 'opacity-50' : ''">
          <NuxtImg class="h-48 w-auto mx-auto" :src="eventObject.image" />
        </NuxtLink>
        <StarIcon v-if="!eventObject.hasHappened" class="absolute top-1 right-1"/>
        <CheckIcon v-if="eventObject.hasHappened" class="absolute top-1 right-1"/>
        <UBadge class="absolute bottom-1 right-1" color="neutral" variant="outline">
          <Icon name="pepicons-pop:persons"/>
          Öffentlich
        </UBadge>
      </div>
    </template>

    <Placeholder class="h-32" />

    <Placeholder class="h-8" />
    <div class="flex items-center gap-2 w-full mb-4">
      <UAvatar :src="eventObject.avatarImg" />
      <span class="text-xs">{{ eventObject.creator }}</span>
    </div>
    <h3 class="font-semibold">{{ eventObject.title }}</h3>
    <div class="text-sm">Vorgeschlagener Termin: {{ eventObject.proposedDate ? d(eventObject.proposedDate) : 'TBD' }}</div>

    <template #footer>
      <Placeholder class="h-8" />
      <div class="flex justify-end">
        <UButton v-if="!eventObject.hasHappened">Termin finden</UButton>
        <div v-if="eventObject.hasHappened" class="text-sm">
          Dieses Event hat bereits stattgefunden. Warst du dabei? Dann klicke auf "<Icon name="mingcute:check-2-fill" />", um es von deiner Bucketlist zu streichen.
        </div>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import {useI18n} from "#imports"
import type { EventObject } from '~/stores/eventStore'

const props = defineProps({
  eventObject: {
    type: Object as PropType<EventObject>,
    required: true,
  }
})

const { d } = useI18n()

const detailPageUrl = `/details/schwer-ausgelastete-erwachsene/${props.eventObject.id}`
</script>

<style scoped>
img {
  max-width: 500px;
}
</style>