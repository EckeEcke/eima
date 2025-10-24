<template>
  <UContainer>
    <h2 class="text-2xl font-semibold mb-8">Willkommen bei eima - die social event planning app</h2>
    <p>
      Melde dich jetzt an, um mit deinem Freundeskreis oder für dich selbst Eventideen zu sammeln und zu planen.
    </p>
    <UButton size="lg" type="submit" icon="i-lucide-rocket" class="my-8 px-4" @click="userStore.isLoggedIn = true">
      Jetzt anmelden
    </UButton>
    <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-24 my-16">
      <div class="lg:w-1/2 lg:pr-4">
        <h3 class="text-lg font-semibold mb-4">Bucketlist</h3>
        <p>Erstelle mit wenigen Klicks ein Event mit den wichtigsten Infos. Pack es auf deine eima Bucketlist. Plane ein Datum. Durchziehen und Haken dran. eima macht es dir leicht, Ideen festzuhalten und dich zu motivieren, es in die Hand zu nehmen.</p>
      </div>
      <NuxtImg src="/images/illustration-bucketlist.svg" class="w-md mx-auto p-8" />
    </div>
    <div class="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-24 my-16">
      <div class="lg:w-1/2 lg:pl-4">
        <h3 class="text-lg font-semibold mb-4">Gruppen</h3>
        <p>Du suchst nach Mitstreitern für eine Unternehmung. Oder du hast Lust, mal wieder etwas mit deinem Freundeskreis zu unternehmen und bist neugierig, was gerade so geplant ist. Bei eima bieten dir Gruppen einen schnellen Überblick über geplante Events. Melde dein Interese an und plant zusammen ein Datum.</p>
      </div>
      <NuxtImg src="/images/illustration-group.svg" class="w-md mx-auto p-8" />
    </div>
    <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-24 my-16">
      <div class="lg:w-1/2 lg:pr-4">
        <h3 class="text-lg font-semibold mb-4">Gamification</h3>
        <p>Um dich zusätzlich zu motivieren, dranzubleiben und geplante Events von deiner Bucketlist zu streichen, bietet eima einen Gamificatio Ansatz. Abgeschlossene Events lassen dich aufleveln und im Rang aufsteigen.</p>
      </div>
      <NuxtImg src="/images/illustration-gamification.svg" class="w-md mx-auto p-8" />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const userStore = useUserStore()
</script>