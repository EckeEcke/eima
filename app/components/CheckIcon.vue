<template>
  <div class="w-12 h-12 flex justify-center border border-gray-300 items-center rounded-full" :class="isDone ? 'bg-green-500' : 'bg-white bg-opacity-10'" @click="toggleState">
    <UTooltip v-if="isDone" text="Ich war doch nicht dabei...">
      <Icon name="mingcute:check-2-fill" style="color: white" class="h-8 w-8" />
    </UTooltip>
    <UTooltip v-else text="Ich war dabei!">
      <Icon name="mingcute:check-2-fill" class="h-8 w-8 text-gray-400" />
    </UTooltip>
  </div>
</template>

<script setup lang="ts">
const isDone = ref(false)
const toggleState = () => {
  if (!isDone.value) {
    isDone.value = !isDone.value
    showToast()
  }
  else {
    confirm('Möchtest du "EventName" wirklich zurücksetzen?')
    isDone.value = !isDone.value
    toast.clear()
  }
}

const toast = useToast()

function showToast() {
  toast.add({
    title: 'Check! ✅',
    description: 'Du hast erfolgreich "EventName" von deiner Bucketlist gestrichen. Weiter so!',
    color: 'success',
    icon: 'streamline-ultimate-color:check',
  })
}
</script>