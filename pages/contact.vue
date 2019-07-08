<template>
  <v-layout>
    <v-flex text-xs-center>
      <h1>Contact</h1>
      <ContactForm />
    </v-flex>
  </v-layout>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue'
export default {
  components: {
    ContactForm
  }
}
</script>
