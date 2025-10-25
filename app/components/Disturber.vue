<template>
  <div class="disturber p-8 rounded text-white grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
    <div class="flex flex-col gap-4 justify-center">
      <h2 class="text-3xl font-semibold">
        Dein Event ist nicht dabei?
      </h2>
      <p>
        Erstelle einfach ein neues Event und setze es auf deine eima Bucketlist. Ob du es nur für dich selbst erstellst oder mit deiner Gruppe teilen möchtest, um Kumpanen zu finden, liegt ganz bei dir.
      </p>
      <div class="button-wrapper flex justify-start mt-4">
        <UButton to="/new" size="xl">Erstelle jetzt dein Event</UButton>
      </div>
    </div>
    <NuxtImg src="/images/illustration-party.svg" class="w-64 mx-auto p-8 hidden lg:block" />
  </div>
</template>

<style>
.disturber {
  background: var(--color-primary);
}

.disturber .button-wrapper a {
  background: var(--color-accent);
}
</style>
<script setup lang="ts">
</script>