<template>
  <UCard class="w-full" variant="subtle" :ui="{ body: 'sm:px-4 sm:p-4', header: 'p-0 sm:p-0', footer: 'sm:px-4', }">
    <template #header>
      <div class="relative">
        <NuxtLink :to="detailPageUrl" class="bg-black" :class="isDone ? 'opacity-50' : ''">
          <NuxtImg class="h-48 w-auto mx-auto" :src="image" />
        </NuxtLink>
        <CheckIcon v-if="isDone" class="absolute top-1 right-1"/>
      </div>
    </template>
    <Placeholder class="h-8" />
    <h3 class="font-semibold">{{ title }}</h3>
  </UCard>
</template>

<script setup lang="ts">
import {useI18n} from "#imports"

const props = defineProps({
  title: String,
  image: String,
  isDone: Boolean,
  id: Number,
})

const { d } = useI18n()

const detailPageUrl = `/details/my-bucketlist/${props.id}`
</script>

<style scoped>
img {
  max-width: 500px;
}
</style>