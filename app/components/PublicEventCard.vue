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
    <h3 class="font-semibold">{{ title }}</h3>
    <div class="text-sm">Vorgeschlagener Termin: {{ proposedDate ? d(proposedDate) : 'TBD' }}</div>

    <template #footer>
      <Placeholder class="h-8" />
      <div class="flex justify-end">
        <UButton v-if="!isDone">Termin finden</UButton>
        <div v-if="isDone" class="text-sm">
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

const detailPageUrl = `/details/schwer-ausgelastete-erwachsene/${props.id}`
</script>

<style scoped>
img {
  max-width: 500px;
}
</style>