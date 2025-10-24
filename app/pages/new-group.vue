<template>
  <UContainer class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <h2 class="text-2xl font-semibold mb-8">Erstelle eine neue Gruppe</h2>
      <p class="py-8">
        Erstelle eine Gruppe, um gemeinsam mit Freundinnen und Freunden Unternehmungen zu planen und Ideen auszutauschen.
      </p>
      <UForm :schema="eventSchema" :state="state" class="space-y-4 new-group-form" @submit="submitGroup">
        <UFormField label="Name der neuen Gruppe" name="groupName" class="form-field" required>
          <UInput v-model="state.groupName" maxLength="50" />
        </UFormField>
        <div class="mt-16">
          <UButton size="lg" type="submit" icon="i-lucide-rocket" class="px-4">
            Gruppe erstellen
          </UButton>
        </div>
      </UForm>
    </div>
    <NuxtImg src="/images/illustration-group.svg" class="mx-auto p-8" />
  </UContainer>
</template>

<script setup lang="ts">
import { object, string, minLength, pipe, custom } from 'valibot'

const userStore = useUserStore()

const state = reactive({
  groupName: ''
})

const eventSchema = object({
  groupName: pipe(string(), minLength(3, 'Ein Name wird benötigt.'), custom(
      (input) => {
        return !groups.value?.includes(input as string)
      },
      'Dieser Titel ist bereits vergeben.'
  )),
})

const groups = computed(() => userStore.user.groups)

const submitGroup = () => {
  if (userStore.user.groups) userStore.user.groups.push(state.groupName)
  else userStore.user.groups = [state.groupName]
  showToast()
  navigateTo('/')
}

const toast = useToast()

const showToast = () => {
  toast.add({
    title: `Deine neue Gruppe "${state.groupName}" wurde erstellt!`,
    description: 'Warum fügst du nicht direkt deinen Freundeskreis und euer nächstes Event zur Gruppe hinzu?',
    color: 'success',
    icon: 'streamline-ultimate-color:check',
  })
}

</script>

<style>
.new-group-form .form-field {
  width: 100%;
  max-width: 524px;
}
</style>