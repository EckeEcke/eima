<template>
  <UContainer v-if="entry">
    <h2 class="text-2xl font-semibold mb-8">{{ entry.title }}</h2>
    <div class="flex flex-row flex-wrap gap-16 mb-8">
      <div class="w-full sm:w-auto">
        <DetailPageCard
            class="w-full sm:max-w-xs"
            :eventObject="entry"
        />
      </div>
      <div v-if="!entry.hasHappened" class="w-full sm:w-auto">
        <h2 class="text-lg font-semibold mb-4">
          Bereits vorgeschlagene Termine
        </h2>
        <div v-if="suggestedDates" class="w-80 mb-8 max-w-full">
          <UCalendar v-model="suggestedDates" size="lg" :multiple="true" :readonly="true" />
        </div>
        <UModal>
          <UButton label="Termine vorschlagen" color="primary" size="lg" variant="solid" icon="i-lucide-calendar" />
          <template #title>
            Wähle deine Wunschtermine
          </template>
          <template #body>
            <UCalendar v-model="userSelectedDates" size="lg" :min-value="dateToday" :multiple="true" />
          </template>
          <template #footer="{ close }">
            <div class="flex gap-4 justify-end w-full">
              <UButton label="Abbrechen" color="neutral" variant="subtle" @click="close" />
              <UButton label="Termine bestätigen" color="primary" variant="solid" />
            </div>
          </template>
        </UModal>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { today, getLocalTimeZone, CalendarDate } from '@internationalized/date'
import type { DateValue } from '@internationalized/date'

const eventStore = useEventStore()
const route = useRoute()
const dateToday = today(getLocalTimeZone())

const userSelectedDates = ref<DateValue[]>([dateToday])

const suggestedDates = ref<CalendarDate[]>([
  new CalendarDate(2025, 11, 11),
  new CalendarDate(2025, 11, 12),
  new CalendarDate(2025, 12, 12),
])

const entries = computed(() => eventStore.events)

const entry = computed(() => entries.value.find(entry => entry.id === route.params.id))
</script>