<template>
  <div>
    <a href="tel:+07376411844" target="" rel="noopener noreferrer">
     <v-btn
              color="primary"
              dark
              medium
              fixed
              bottom
              right
              fab
              v-if="mobile"
            >
              <v-icon>phone</v-icon>
            </v-btn>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    mobile: {
      type: Boolean
    }
  }
}
</script>

