<template>
  <UContainer>
    <div class="flex flex-row flex-wrap gap-16 mb-8">
      <DetailPageCard
          class="w-full sm:max-w-xs"
          :title="entry?.title"
          :proposed-date="entry?.proposedDate"
          :avatar-img="entry?.avatarImg"
          :creator="entry?.creator"
          :id="entry?.id"
          :image="entry?.image"
      />
      <div>
        <h2 class="text-xl mb-4">
          An welchen Tagen bist du verfügbar?
        </h2>
        <div class="w-80">
          <UCalendar v-model="value" size="lg" :min-value="dateToday"/>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import {today, getLocalTimeZone} from '@internationalized/date'

const route = useRoute()
const dateToday: any = today(getLocalTimeZone())

const value = ref(dateToday)

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

const entry = entries.find(entry => entry.id.toString() === route.params.id)
</script>