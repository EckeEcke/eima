<template>
  <UContainer class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <h2 class="text-2xl font-semibold mb-8">
        About eima
      </h2>
      <p class="mb-8">
        eima ist eine Web-Applikation, die das Sammeln von Ideen für Unternehmungen und Erlebnisse, das Finden von Interessierten im Freundeskreis bis hin zum Finden eines gemeinsamen Termins zusammenführen soll. eima ist dabei eine Anlehnung an das deutsche Wort "Eimer", also der Bucket, in den man seine Vorhaben legt. Neben der Möglichkeit, eine eigene private Bucketlist anzulegen, liegt der Fokus bei eima auf Gruppen. Über Gruppen lassen sich Events teilen und Leute finden, die sich gerne anschließen möchten. Ein Gamification Ansatz motiviert dazu, Ideen in die Tat umzusetzen.
      </p>
      <p class="mb-8">
        Technisch ist eima im Frontend als Nuxt 4 Applikation umgesetzt mit NuxtUI und Tailwind als UI Toolkits. Netlify Serverless Functions und MongoDB bilden den Backend Techstack.
      </p>
    </div>
    <NuxtImg src="/images/illustration-group.svg" class="mx-auto p-8" />
  </UContainer>
</template>
<script setup lang="ts">
</script>