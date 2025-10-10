<template>
  <UCard class="w-full" variant="subtle" :ui="{ body: 'sm:px-4 sm:p-4', header: 'p-0 sm:p-0', footer: 'sm:px-4', }">
    <template #header>
      <div class="relative">
        <NuxtLink :to="detailPageUrl" class="bg-black" :class="isDone ? 'opacity-50' : ''">
          <NuxtImg class="h-48 w-auto mx-auto" :src="image" />
        </NuxtLink>
        <StarIcon v-if="!isDone" class="absolute top-1 right-1"/>
        <CheckIcon v-if="isDone" class="absolute top-1 right-1"/>
        <UBadge class="absolute bottom-1 right-1" color="neutral" variant="outline">
          <Icon name="pepicons-pop:persons"/>
          Öffentlich
        </UBadge>
      </div>
    </template>

    <Placeholder class="h-32" />

    <Placeholder class="h-8" />
    <div class="flex items-center gap-2 w-full mb-4">
      <UAvatar :src="avatarImg" />
      <span class="text-xs">{{ creator }}</span>
    </div>
    <h3 class="font-semibold mb-4">{{ title }}</h3>
    <div class="grid grid-cols-1 gap-2">
      <div class="text-sm"><span class="font-semibold">Vorgeschlagener Termin:</span> {{ proposedDate ? d(proposedDate) : 'TBD' }}</div>
      <div class="text-sm"><span class="font-semibold">Preis:</span> 40€</div>
      <div class="text-sm"><span class="font-semibold">Mehr Infos:</span> <ULink :to="eventLink" target="_blank">LINK</ULink></div>
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
      <div class="description rounded-lg text-sm">Hi, ich habe Lust, mal wieder in die Action Arena zu gehen. Lasertag, Arcade Games und Schwarzlichtminigolf.</div>
    </div>
    <template #footer v-if="isDone">
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
import {useI18n} from "#imports";

const props = defineProps({
  title: String,
  image: String,
  creator: String,
  avatarImg: String,
  proposedDate: String,
  isDone: Boolean,
  id: Number,
})

const { d } = useI18n()

const detailPageUrl = `/details/schwer-ausgelastete-erwachsene-${props.id}`
const eventLink = 'https://action-arena.info/'
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