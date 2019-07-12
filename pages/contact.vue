<template>
  <div>
  <Mapbox />
  <v-layout>
    <v-flex text-xs-center>
      <h1>Contact</h1>
      <ContactForm />
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue'
import Mapbox from '~/components/Mapbox.vue'
export default {
  components: {
    ContactForm,
    Mapbox
  }
}
</script>
