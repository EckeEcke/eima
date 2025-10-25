<template>
  <UTabs :items="items" v-model="selectedTab" class="w-full max-w-md mx-auto">
    <template #login>
      <UPageCard class="w-full max-w-md mx-auto">
        <UAuthForm
            title="Login"
            description="Enter your credentials to access your account."
            icon="i-lucide-user"
            :fields="fieldsLogin"
            :providers="providers"
            separator="oder"
            @submit="onSubmit"
        >
          <template #description>
            Du hast noch keinen Account? <ULink class="text-primary font-medium" @click="selectedTab = 'signup'">Zur Registrierung</ULink>.
          </template>
        </UAuthForm>
      </UPageCard>
    </template>

    <template #signup>
      <UPageCard class="w-full max-w-md mx-auto">
        <UAuthForm
            title="Account erstellen"
            description="Enter your credentials to access your account."
            icon="i-lucide-user"
            :fields="fieldsSignup"
            separator="oder"
            @submit="onSubmit"
        >
          <template #description>
            Du hast bereits einen Account? <ULink class="text-primary font-medium" @click="selectedTab = 'login'">Zum Login</ULink>.
          </template>
        </UAuthForm>
      </UPageCard>
    </template>
  </UTabs>

</template>

<script setup lang="ts">
import type { AuthFormField } from '@nuxt/ui'

const selectedTab = ref('login')

const items = [
  {
    label: 'Login',
    icon: 'i-lucide-user',
    slot: 'login',
    value: 'login'
  },
  {
    label: 'Signup',
    icon: 'i-lucide-user-plus',
    slot: 'signup',
    value: 'signup'
  }
]

const fieldsSignup: AuthFormField[] = [{
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

const fieldsLogin: AuthFormField[] = [{
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