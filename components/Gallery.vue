<template>
  <v-layout>
    <v-flex xs12 lg12 md12 sm12>
      <v-card flat>
        <v-container grid-list-lg>
          <v-layout row wrap>
            <v-flex
              v-for="(image,i) in images"
              :key="i"
              xs3
              d-flex
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="image.src"
                  :lazy-src="image.src"
                  aspect-ratio="1"
                  max-width="300"
                  class="grey lighten-2"
                  @click="openModal(image)"
                >
            <!-- <ImageModal :image="image" :dialog="openImage" /> -->
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    <ImageModal :image="image" :dialog="toggleImage" />
  </v-layout>
</template>

<script>
import ImageModal from '~/components/ImageModal.vue'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      image: {},
      openImage: false,
      images:[
        {
          src: require('~/assets/gallery/image1.jpg')
        },
        {
          src: require('~/assets/gallery/image2.jpg')
        },
        {
          src: require('~/assets/gallery/image3.jpg')
        },
        {
          src: require('~/assets/gallery/image4.jpg')
        },
        {
          src: require('~/assets/gallery/image5.jpg')
        },
        {
          src: require('~/assets/gallery/image6.jpg')
        },
        {
          src: require('~/assets/gallery/image7.jpg')
        },
        {
          src: require('~/assets/gallery/image8.jpg')
        },
        {
          src: require('~/assets/gallery/image9.jpg')
        },
        {
          src: require('~/assets/gallery/image10.jpg')
        },
        {
          src: require('~/assets/gallery/image12.jpg')
        },
        {
          src: require('~/assets/gallery/image13.jpg')
        },
        {
          src: require('~/assets/gallery/image14.jpg')
        },
        {
          src: require('~/assets/gallery/image15.jpg')
        },
        {
          src: require('~/assets/gallery/image16.jpg')
        },
        {
          src: require('~/assets/gallery/image18.jpg')
        },
        {
          src: require('~/assets/gallery/image19.jpg')
        },
        {
          src: require('~/assets/gallery/image20.jpg')
        },
        {
          src: require('~/assets/gallery/image21.jpg')
        },
        {
          src: require('~/assets/gallery/image22.jpg')
        },
        {
          src: require('~/assets/gallery/image23.jpg')
        },
        {
          src: require('~/assets/gallery/image25.jpg')
        },
        {
          src: require('~/assets/gallery/image26.jpg')
        },
        {
          src: require('~/assets/gallery/image27.jpg')
        },
        {
          src: require('~/assets/gallery/image29.jpg')
        },
        {
          src: require('~/assets/gallery/20180904_183807_resized.jpg')
        },
        {
          src: require('~/assets/gallery/20190314_153404_resized.jpg')
        },
        {
          src: require('~/assets/gallery/20190411_105447_resized.jpg')
        },
        {
          src: require('~/assets/gallery/20190530_163634_resized.jpg')
        },
        {
          src: require('~/assets/gallery/20190530_163703_resized.jpg')
        },
        {
          src: require('~/assets/gallery/20190530_163723_resized.jpg')
        },
        {
          src: require('~/assets/gallery/20190601_142340_resized.jpg')
        },
        {
          src: require('~/assets/gallery/20190601_142340_resized.jpg')
        },
        {
          src: require('~/assets/gallery/20190601_142340_resized.jpg')
        },
        {
          src: require('~/assets/gallery/20190601_143027_resized.jpg')
        },
        {
          src: require('~/assets/gallery/20190707_132316_resized.jpg')
        },
        {
          src: require('~/assets/gallery/20190707_132319_resized.jpg')
        },
        {
          src: require('~/assets/gallery/20190707_132327_resized.jpg')
        },
      ]
    }
  },
  computed: {
   toggleImage() {
     return this.$store.state.toggleImage
   }
  },
  methods: {
    openModal(img) {
      this.$store.dispatch('toggleImage')
      return this.image = img
    },
    resetModal() {
      return setTimeout(() => {
        this.openImage = false
      }, 5000);
    }
  },
  components: {
    ImageModal
  }
}
</script>
