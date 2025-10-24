<template>
  <UPageCard class="w-full max-w-md mx-auto">
    <UAuthForm
        title="Login"
        description="Enter your credentials to access your account."
        icon="i-lucide-user"
        :fields="fields"
        :providers="providers"
        separator="oder"
        @submit="onSubmit"
    >
      <template #description>
        Du hast noch keinen Account? <ULink class="text-primary font-medium" @click="emit('switchView')">Zur Registrierung</ULink>.
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
}, {
  name: 'remember',
  label: 'Remember me',
  type: 'checkbox'
}]

const providers = [{
  label: 'Google',
  icon: 'i-simple-icons-google',
}, {
  label: 'GitHub',
  icon: 'i-simple-icons-github',
}]
</script>