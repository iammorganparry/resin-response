<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="600" persistent>
      <v-card>
          <v-img :src="image.src" alt="gallery-image" max-width="600">
            <v-btn fixed right icon @click="toggleImage()">
            <v-icon large color="white">close</v-icon>
            </v-btn>
          </v-img>
          <!-- <v-btn color="green darken-1" flat @click="toggleImage()">Close</v-btn> -->
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    props: {
      dialog:{
        type: Boolean
      },
      image: {
        type: Object
      }
    },
    methods: {
      toggleImage() {
        this.$store.dispatch('toggleImage')
      }
    }
  }
</script>

<style>
#close-btn {
  z-index: 3 !important;
}
</style>

