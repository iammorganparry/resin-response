<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog">
      <v-card>
          <v-img :src="image.src" alt="gallery-image" />
          <v-btn color="green darken-1" flat @click="dialog = false">Close</v-btn>
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
    }
  }
</script>
