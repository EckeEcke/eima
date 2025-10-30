<template>
  <UCard class="w-full max-w-sm" variant="subtle" :ui="{ body: 'sm:px-4 sm:p-4', header: 'p-0 sm:p-0', footer: 'sm:px-4', }">
    <template #header>
      <div class="relative">
        <div class="bg-black" :class="eventObject.hasHappened ? 'opacity-50' : ''">
          <NuxtImg class="h-48 w-auto mx-auto" :src="eventObject.image" />
        </div>
        <StarIcon v-if="!eventObject.hasHappened" class="absolute top-1 right-1"/>
        <CheckIcon v-if="eventObject.hasHappened" class="absolute top-1 right-1"/>
        <UBadge class="absolute bottom-1 right-1" color="neutral" variant="outline">
          <Icon name="pepicons-pop:persons"/>
          Öffentlich
        </UBadge>
        <UModal>
          <UButton color="neutral" size="sm" variant="subtle" icon="i-lucide-edit" class="absolute top-1 left-1" />
          <template #title>
            Bearbeite dein Event
          </template>
          <template #body>
            <div>
              <div>
                <UForm :schema="eventSchema" :state="state" class="space-y-4 new-event-form mb-16" @submit="submitEvent">
                  <UFormField label="Event Titel" name="title" class="form-field" required>
                    <UInput v-model="state.title" maxLength="50" />
                  </UFormField>

                  <UFormField label="Beschreibung" name="description" class="form-field" required>
                    <UTextarea v-model="state.description" maxLength="400" />
                  </UFormField>

                  <UFormField label="Link zum Event" name="link" class="form-field">
                    <UInput v-model="state.link" />
                  </UFormField>

                  <UFormField label="Bild URL" name="image" class="form-field">
                    <UInput v-model="state.image" />
                  </UFormField>

                  <UFormField label="Preis" name="price" class="form-field">
                    <UInput v-model="state.price" />
                  </UFormField>

                  <UFormField label="Gruppen auswählen" name="groups" class="multiple-select">
                    <USelect v-if="groups" v-model="state.groups" multiple :items="groups" placeholder="Gruppen auswählen" />
                  </UFormField>

                  <UFormField label="Kategorie wählen" name="category" class="multiple-select" required>
                    <USelect v-model="state.category" value-key="id" :items="categories" placeholder="Kategorie auswählen" />
                  </UFormField>
                </UForm>
              </div>
              <PreviewCard
                  class="w-2xs"
                  :title="state?.title"
                  :image="state?.image"
                  :is-public="(state?.groups?.length || 0) > 0"
                  :creator="userStore.user.name"
                  :avatar-img="userStore.user.avatarImg"
              />
            </div>
          </template>
          <template #footer="{ close }">
            <div class="flex gap-4 justify-end w-full">
              <UButton label="Abbrechen" color="neutral" variant="subtle" @click="close" />
              <UButton label="Änderungen speichern" color="primary" variant="solid" />
            </div>
          </template>
        </UModal>
        <UButton color="neutral" size="sm" variant="subtle" icon="i-lucide-trash" class="absolute top-1 left-10" @click="deleteEvent"/>
      </div>
    </template>

    <Placeholder class="h-32" />

    <Placeholder class="h-8" />
    <div class="flex items-center gap-2 w-full mb-4">
      <UAvatar :src="eventObject.avatarImg" />
      <span class="text-xs">{{ eventObject.creator.name }}</span>
    </div>
    <h3 class="font-semibold mb-4">{{ eventObject.title }}</h3>
    <div class="grid grid-cols-1 gap-2">
      <div class="text-sm"><span class="font-semibold">Vorgeschlagener Termin:</span> {{ eventObject.proposedDate ? d(eventObject.proposedDate) : 'TBD' }}</div>
      <div v-if="eventObject.price" class="text-sm"><span class="font-semibold">Preis: </span>{{ eventObject.price }}</div>
      <div v-if="eventObject.link" class="text-sm"><span class="font-semibold">Mehr Infos:</span> <ULink :to="eventObject.link" target="_blank">LINK</ULink></div>
      <div class="text-sm flex flex-col gap-2 mb-2">
        <div class="font-semibold">Interessiert:</div>

        <UAvatarGroup max="5">
          <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
          <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
          <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
          <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
          <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
          <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
          <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
          <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
          <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
          <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
        </UAvatarGroup>
      </div>
      <div v-if="eventObject.description" class="description rounded-lg text-sm">{{ eventObject.description }}</div>
    </div>
    <template #footer v-if="eventObject.hasHappened">
      <Placeholder class="h-8" />
      <div class="flex justify-end">
        <div class="text-sm">
          Dieses Event hat bereits stattgefunden. Warst du dabei? Dann klicke auf "<Icon name="mingcute:check-2-fill" />", um es von deiner Bucketlist zu streichen.
        </div>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import { useI18n } from "#imports"
import PreviewCard from '~/components/PreviewCard.vue'
import { object, string, minLength, optional, pipe, url, union, literal } from 'valibot'
import type {SelectMenuItem} from '#ui/components/SelectMenu.vue'
import { Categories } from '~~/types/categories'

const props = defineProps({
  eventObject: {
    type: Object as PropType<EventObject>,
    required: true,
  }
})

const userStore = useUserStore()
const eventStore = useEventStore()

const { d, t } = useI18n()

const state = reactive({
  title: props.eventObject?.title,
  description: props.eventObject?.description,
  link: props.eventObject?.link,
  image: props.eventObject?.image,
  price: props.eventObject?.price,
  groups: props.eventObject?.groups,
  category: props.eventObject?.category,
})

const eventSchema = object({
  title: pipe(string(), minLength(3, 'Ein Titel wird benötigt.')),
  description: pipe(string(), minLength(3, 'Eine Beschreibung wird benötigt.')),
  link: optional(union([
    pipe(string(), url('Bitte eine gültige URL eingeben.')),
    literal('')
  ]), ''),
  image: optional(union([
    pipe(string(), url('Bitte eine gültige URL eingeben.')),
    literal('')
  ]), ''),
  category: pipe(string(), minLength(3, 'Eine Kategorie wird benötigt.')),
})

const groups = computed(() => userStore.user.groups)
const categories: SelectMenuItem[] = Object.values(Categories).map(category => {
  return {
    label: t(`categories.${category}`),
    id: category,
  }
})

const submitEvent = () => {
  eventStore.events.push(
      {
        title: state.title,
        image: state.image,
        creator: {
          name: userStore.user.name,
          id: userStore.user.userId,
        },
        avatarImg: userStore.user.avatarImg,
        createdAt: new Date().toISOString(),
        id: '2',
        groups: state.groups,
        price: state.price,
        hasHappened: false,
        category: state.category,

      }
  )
  showToast()
  navigateTo('/')
}

const isPublic = computed(() => state.groups.length > 0)

const toast = useToast()

const showToast = () => {
  toast.add({
    title: `Dein Event "${state.title}" wurde erstellt!`,
    description: 'Plan doch direkt ein Datum!',
    color: 'success',
    icon: 'streamline-ultimate-color:check',
  })
}

const showToastDeletedEvent = () => {
  toast.add({
    title: `Dein Event "${state.title}" wurde gelöscht!`,
    description: '',
    color: 'info',
    icon: 'i-lucide-info',
  })
}

const deleteEvent = () => {
  confirm(`Möchtest du das Event "${state.title}" wirklich löschen?`)
  const indexToDelete = eventStore.events.findIndex(entry => entry.id === props.eventObject.id)

  if (indexToDelete !== -1) {
    eventStore.events.splice(indexToDelete, 1)
  }
  showToastDeletedEvent()
  navigateTo('/')
}

</script>

<style scoped>
img {
  max-width: 500px;
}

.description {
  background: var(--background-color-accented);
  padding: 0.5rem;
}
</style>