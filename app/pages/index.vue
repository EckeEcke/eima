<template>
  <UContainer>
    <div class="mb-32 sm:mb-64">
      <h2 v-if="value === 'Meine Bucketlist'" class="font-semibold text-2xl mb-8">
        {{ value }}
      </h2>
      <h2 v-else class="font-semibold text-2xl mb-8">
        Offene Events in der Gruppe <i>"{{ value }}"</i>
      </h2>
      <div>
        <div class="mb-8">
          <UInputMenu v-model="value" :items="items"/>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <PublicEventCard
            v-for="entry in entries"
            :title="entry.title"
            :image="entry.image"
            :creator="entry.creator"
            :avatar-img="entry.avatarImg"
            :proposed-date="entry.proposedDate"
            :id="entry.id"
        />
      </div>
    </div>
    <div class="disturber p-8 rounded text-white grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32 sm:mb-64">
      <div class="flex flex-col gap-4 justify-center">
        <h2 class="text-3xl font-semibold">
          Dein Event ist nicht dabei?
        </h2>
        <p>
          Erstelle einfach ein neues Event und setze es auf deine eima Bucketlist. Ob du es nur für dich selbst erstellst oder mit deiner Gruppe teilen möchtest, um Kumpanen zu finden, liegt ganz bei dir.
        </p>
        <div class="button-wrapper flex justify-start mt-4">
          <UButton size="xl">Erstelle jetzt dein Event</UButton>
        </div>
      </div>
      <NuxtImg src="/images/illustration-party.svg" class="w-64 mx-auto p-8" />
    </div>
    <div class="mb-32 sm:mb-64">
      <h2 v-if="value === 'Meine Bucketlist'" class="font-semibold text-2xl mb-8 sm:mb-16">
        Meine abgeschlossenen Events
      </h2>
      <h2 v-else class="font-semibold text-2xl mb-8 sm:mb-16">
        Vergangene Events in der Gruppe <i>"{{ value }}"</i>
      </h2>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <PublicEventCard
            v-for="entry in entries"
            :title="entry.title"
            :image="entry.image"
            :creator="entry.creator"
            :avatar-img="entry.avatarImg"
            :proposed-date="entry.proposedDate"
            :is-done="true"
            :id="entry.id"
        />
    </div>
  </div>
  </UContainer>
</template>

<script setup lang="ts">
const items = ref(['Meine Bucketlist', 'Mit "interessiert" markiert', 'Schwer ausgelastete Erwachsene', 'Retroklub Zockerfreunde', 'Neu in Hamburg'])
const value = ref('Meine Bucketlist')
const entries = [
  {
    title: "Action Arena",
    image: "https://www.hamburg.de/resource/image/405032/landscape_ratio16x9/1280/720/cb70f4d5ad91380c4ddd3dfb836ebafa/C01F0D1E981E6B54862C20077AF7636F/action-arena-bild-2-.jpg",
    creator: "Squidward",
    avatarImg: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f2/5c/da/f25cda65-3b49-20e4-ddaf-371fecad468c/iMessage_App_Icon-0-0-1x_U007emarketing-0-0-0-0-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-181-0-0.png/512x512bb.jpg",
    proposedDate: new Date().toISOString(),
    id: 1,
  },
  {
    title: "Escape Room",
    image: "https://opolum.com/wp-content/uploads/2022/03/Escape-Room-Hamburg.png",
    creator: "Sponge",
    avatarImg: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/70/701f939d7104b6e5756a8f2f45ec0ffc08fd508e_full.jpg",
    proposedDate: new Date().toISOString(),
    id: 2,
  },
  {
    title: "Astor Kino",
    image: "https://www.hannover.de/var/storage/images/_aliases/alias_1600xVariabel/media/01-data-neu/bilder/hmtg/erlebnispakete/2015/fr%C3%BChling-2015/kinosaal-astor/12417952-2-ger-DE/Kinosaal-Astor.jpg",
    creator: "Cineast",
    avatarImg: "https://www.hannover.de/var/storage/images/_aliases/alias_1600xVariabel/media/01-data-neu/bilder/hmtg/erlebnispakete/2015/fr%C3%BChling-2015/kinosaal-astor/12417952-2-ger-DE/Kinosaal-Astor.jpg",
    proposedDate: new Date().toISOString(),
    id: 3,
  },
  {
    title: "Würfel & Zucker",
    image: "https://image.jimcdn.com/app/cms/image/transf/dimension=364x10000:format=png/path/s82cc354e4f0c6458/image/i35968f9d2875b051/version/1671732700/image.png",
    creator: "Mr. Miepel",
    avatarImg: "https://ih1.redbubble.net/image.842289618.5875/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg",
    proposedDate: new Date().toISOString(),
    id: 4,
  },
  {
    title: "Action Arena",
    image: "https://www.hamburg.de/resource/image/405032/landscape_ratio16x9/1280/720/cb70f4d5ad91380c4ddd3dfb836ebafa/C01F0D1E981E6B54862C20077AF7636F/action-arena-bild-2-.jpg",
    creator: "Squidward",
    avatarImg: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f2/5c/da/f25cda65-3b49-20e4-ddaf-371fecad468c/iMessage_App_Icon-0-0-1x_U007emarketing-0-0-0-0-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-181-0-0.png/512x512bb.jpg",
    id: 5,
  },
  {
    title: "Action Arena",
    image: "https://www.hamburg.de/resource/image/405032/landscape_ratio16x9/1280/720/cb70f4d5ad91380c4ddd3dfb836ebafa/C01F0D1E981E6B54862C20077AF7636F/action-arena-bild-2-.jpg",
    creator: "Squidward",
    avatarImg: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f2/5c/da/f25cda65-3b49-20e4-ddaf-371fecad468c/iMessage_App_Icon-0-0-1x_U007emarketing-0-0-0-0-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-181-0-0.png/512x512bb.jpg",
    id: 6,
  },
  {
    title: "Action Arena",
    image: "https://www.hamburg.de/resource/image/405032/landscape_ratio16x9/1280/720/cb70f4d5ad91380c4ddd3dfb836ebafa/C01F0D1E981E6B54862C20077AF7636F/action-arena-bild-2-.jpg",
    creator: "Squidward",
    avatarImg: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f2/5c/da/f25cda65-3b49-20e4-ddaf-371fecad468c/iMessage_App_Icon-0-0-1x_U007emarketing-0-0-0-0-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-181-0-0.png/512x512bb.jpg",
    proposedDate: new Date().toISOString(),
    id: 7,
  },
]

</script>

<style scoped>
.disturber {
  background: var(--color-primary);
}

.disturber .button-wrapper button {
  background: var(--color-accent);
}
</style>