<template>
  <UCard class="w-sm max-w-full" variant="subtle" :ui="{ body: 'sm:px-4 sm:p-4', header: 'p-0 sm:p-0', footer: 'sm:px-4', }">
    <template #header>
      <div class="relative">
        <NuxtImg class="h-48 w-auto mx-auto" :src="image" />
        <UBadge v-if="isPublic" class="absolute bottom-1 right-1" color="neutral" variant="outline">
          <Icon name="pepicons-pop:persons"/>
          Öffentlich
        </UBadge>
      </div>
    </template>
    <Placeholder class="h-8" />
    <div class="flex items-center gap-2 w-full mb-4">
      <UAvatar :src="avatarImg" />
      <span class="text-xs">{{ creator }}</span>
    </div>
    <h3 class="font-semibold">{{ title }}</h3>
    <div class="text-sm">Vorgeschlagener Termin: TBD</div>
  </UCard>
</template>

<script setup lang="ts">

defineProps({
  title: String,
  image: String,
  creator: String,
  avatarImg: String,
  isPublic: Boolean,
})

</script>

<style scoped>
img {
  max-width: 500px;
}
</style>