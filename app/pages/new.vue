<template>
  <UContainer class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h2 class="text-2xl font-semibold mb-8">Erstelle dein nächstes Event</h2>
      <UForm :schema="eventSchema" :state="state" class="space-y-4 new-event-form" @submit="submitEvent">
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

        <div class="mt-16">
          <UButton size="lg" type="submit" icon="i-lucide-rocket" class="px-4">
            Event erstellen
          </UButton>
        </div>
      </UForm>
    </div>
    <div>
      <h2 class="text-2xl font-semibold mb-8">Vorschau</h2>
      <PreviewCard
          :title="state.title"
          :image="state.image"
          :is-public="isPublic"
          :creator="userStore.user.name"
          :avatar-img="userStore.user.avatarImg"
      />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { object, string, minLength, optional, pipe, url, union, literal } from 'valibot'
import type {SelectMenuItem} from '#ui/components/SelectMenu.vue'
import PreviewCard from "~/components/PreviewCard.vue";

const userStore = useUserStore()
const eventStore = useEventStore()

const state = reactive({
  title: '',
  description: '',
  link: '',
  image: '',
  price: undefined,
  groups: [],
  category: '',
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
const categories:SelectMenuItem[] = [
    {
      label: 'Restaurant',
      id: 'restaurant',
    },
  {
    label: 'Aktivität',
    id: 'activity',
  },
  {
    label: 'Sightseeing',
    id: 'sightseeing',
  },
  {
    label: 'Adventure',
    id: 'adventure',
  },
  {
    label: 'Experience',
    id: 'experience',
  }
]

const submitEvent = () => {
  eventStore.events.push(
      {
        title: state.title,
        image: state.image,
        creator: userStore.user.name,
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
</script>

<style>
.new-event-form .form-field {
  width: 100%;
  max-width: 524px;
}

.new-event-form .form-field * {
  width: 100%;
}

.new-event-form .multiple-select * {
  max-width: 100%;
}
</style>