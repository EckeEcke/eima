<template>
  <div class="w-12 h-12 flex justify-center border border-gray-300 items-center rounded-full" :class="isLiked ? 'bg-primary' : 'bg-white bg-opacity-10'" @click="toggleLike">
    <Icon v-if="isLiked" name="solar:star-bold" style="color: white" class="h-8 w-8" />
    <Icon v-else name="solar:star-linear" style="color: var(--color-primary)" class="h-8 w-8" />
  </div>
</template>

<script setup lang="ts">
const isLiked = ref(false)
const toggleLike = () => {
  isLiked.value = !isLiked.value
  if (isLiked.value) showToast()
  else toast.clear()
}

const toast = useToast()

function showToast() {
  toast.add({
    title: 'Super, du zeigst jetzt dein Interesse an!',
    description: 'Der erste Schritt ist getan. Fehlt nur noch ein Termin und ihr könnt "EventName" in euren eima packen.',
    color: 'success',
    icon: 'streamline-ultimate-color:check',
  })
}
</script>