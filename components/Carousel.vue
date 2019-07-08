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
            <v-container fill-height>
              <v-layout align-center>
                <v-flex style="background-color:rgba(0, 0, 0, 0.5);">
                  <h5 color="white" class="display-2 text-xs-center">FIND INSPIRATION IN OUR GALLERY</h5>
                  <div class="text-xs-center subheading"><v-btn class="text-xs-center">VIEW GALLERY</v-btn></div>
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
