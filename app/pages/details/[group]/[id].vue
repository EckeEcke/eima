<template>
  <UContainer>
    <div class="flex flex-row flex-wrap gap-16 mb-8">
      <DetailPageCard
          class="w-full sm:max-w-xs"
          :eventObject="entry!"
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

const eventStore = useEventStore()
const route = useRoute()
const dateToday: any = today(getLocalTimeZone())

const value = ref(dateToday)

const entries = computed(() => eventStore.events)

const entry = entries.value.find(entry => entry.id === route.params.id)
</script>