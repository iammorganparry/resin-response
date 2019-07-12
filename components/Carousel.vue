<template>
      <v-layout>
        <v-flex xs12
      sm12
      md12>
         <v-carousel id="carousel" max="100%">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
     <!-- <v-jumbotron dark> -->
            <v-container id="text-container" fill-height>
              <v-layout align-center>
                <v-flex style="background-color:rgba(0, 0, 0, 0.5);">
                  <h5 class="white-text text-xs-center">FIND INSPIRATION IN OUR <span class="gallery-text display-1">GALLERY</span></h5>
                  <div class="text-xs-center subheading"><v-btn
                  nuxt
                  color="primary"
                  large to='/gallery'
                  class="text-xs-center">
                  VIEW GALLERY
                  </v-btn>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          <!-- </v-jumbotron> -->
    </v-carousel-item>
  </v-carousel>
  </v-flex>
      </v-layout>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array
      }
    },
    data: () => ({
      absolute: true,
      opacity: 1,
      dialog: true,
    }),
  }
</script>

<style>
.white-text {
  color: white !important;
}

.gallery-text {
  display: block;
}

#text-container {
  width: 50%;
  padding: 50px;
}
@media only screen and (max-width: 850px) {
#text-container {
  width: 100%;
  padding: 50px;
}
}

</style>
