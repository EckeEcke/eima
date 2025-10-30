<template>
  <UContainer class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <h2 class="text-2xl font-semibold mb-8">
        FAQ
      </h2>
      <UAccordion :items="items" />
    </div>
    <NuxtImg src="/images/illustration-faq.svg" class="mx-auto p-8" />
  </UContainer>
</template>
<script setup lang="ts">
const items = [
  {
    label: 'Ist eima kostenlos?',
    content: 'Ja, die Nutzung von eima ist komplett kostenlos. Die App ist ein reines Hobbyprojekt, das ich in meiner Freizeit umsetze.',
  },
  {
    label: 'Wie kann ich ein Event löschen?',
    content: 'Du kannst ausschließlich Events löschen, die du selbst erstellt hast. Dazu einfach auf die Detailseite gehen und das Trashcan Icon auf dem Bild anklicken.',
  },
  {
    label: 'Wie kann ich eine Gruppe löschen?',
    content: 'Du kannst aussschließlich Gruppen löschen, in denen du selbst Mitglied bist. Dazu einfach auf der Startseite die entsprechende Gruppe auswählen und auf den Button "Gruppe löschen" klicken',
  },
  {
    label: 'Wie kann ich Freunde zu einer Gruppe hinzufügen?',
    content: 'Gute Frage. Weiß ich selbst noch nicht.',
  },
]
</script>