<template>
  <UCard class="w-full" variant="subtle" :ui="{ body: 'sm:px-4 sm:p-4', header: 'p-0 sm:p-0', footer: 'sm:px-4', }">
    <template #header>
      <div class="relative">
        <div class="bg-black" :class="eventObject.hasHappened ? 'opacity-50' : ''">
          <NuxtImg class="h-48 w-auto mx-auto" :src="eventObject.image" />
        </div>
        <StarIcon v-if="!eventObject.isDone" class="absolute top-1 right-1"/>
        <CheckIcon v-if="eventObject.isDone" class="absolute top-1 right-1"/>
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
    <h3 class="font-semibold mb-4">{{ eventObject.title }}</h3>
    <div class="grid grid-cols-1 gap-2">
      <div class="text-sm"><span class="font-semibold">Vorgeschlagener Termin:</span> {{ eventObject.proposedDate ? d(eventObject.proposedDate) : 'TBD' }}</div>
      <div v-if="eventObject.price" class="text-sm"><span class="font-semibold">Preis: </span>{{ eventObject.price }}</div>
      <div v-if="eventObject.link" class="text-sm"><span class="font-semibold">Mehr Infos:</span> <ULink :to="eventObject.link" target="_blank">LINK</ULink></div>
      <div class="text-sm flex flex-col gap-2 mb-2">
        <div class="font-semibold">Interessiert:</div>

        <UAvatarGroup max="5">
          <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
          <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
          <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
          <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
          <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
          <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
          <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
          <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
          <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
          <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
        </UAvatarGroup>
      </div>
      <div v-if="eventObject.description" class="description rounded-lg text-sm">{{ eventObject.description }}</div>
    </div>
    <template #footer v-if="eventObject.hasHappened">
      <Placeholder class="h-8" />
      <div class="flex justify-end">
        <div class="text-sm">
          Dieses Event hat bereits stattgefunden. Warst du dabei? Dann klicke auf "<Icon name="mingcute:check-2-fill" />", um es von deiner Bucketlist zu streichen.
        </div>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import { useI18n } from "#imports"

defineProps({
  eventObject: {
    type: Object as PropType<EventObject>,
    required: true,
  }
})

const { d } = useI18n()

</script>

<style scoped>
img {
  max-width: 500px;
}

.description {
  background: var(--background-color-accented);
  padding: 0.5rem;
}
</style>