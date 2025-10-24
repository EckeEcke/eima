<template>
  <UPageCard class="w-full max-w-md mx-auto">
    <UAuthForm
        title="Account erstellen"
        description="Enter your credentials to access your account."
        icon="i-lucide-user"
        :fields="fields"
        separator="oder"
        @submit="onSubmit"
    >
      <template #description>
        Du hast bereits einen Account? <ULink class="text-primary font-medium" @click="emit('switchView')">Zum Login</ULink>.
      </template>
    </UAuthForm>
  </UPageCard>
</template>

<script setup lang="ts">
import type {AuthFormField} from '@nuxt/ui'

const emit = defineEmits(['switchView'])

const fields: AuthFormField[] = [{
  name: 'email',
  type: 'email',
  label: 'Email',
  placeholder: 'Enter your email',
  required: true
}, {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password',
  required: true
}]
</script>