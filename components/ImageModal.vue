<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
          <v-img :src="image.src" alt="gallery-image" max-width="600"/>
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
