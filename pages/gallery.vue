<template>
<div>
  <HeroSlim title='GALLERY' :isMobile="isMobile"/>
<div id="gallery">
  <v-layout row wrap>
    <v-flex text-xs-center>
      <!-- <ContactForm /> -->
      <Gallery />
      <div class="header-padding">
      <Divider dividerText="CONTACT US" />
      </div>
      <ContactForm />
    </v-flex>
  </v-layout>
</div>
</div>
</template>

<script>
import Gallery from '~/components/Gallery.vue'
import HeroSlim from '~/components/HeroSlim.vue'
import ContactForm from '~/components/ContactForm.vue'
import Divider from '~/components/Divider.vue'
export default {
  data() {
    return {
      isMobile: null
    }
  },
   beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
    },
    mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
    },
    methods: {
    onResize () {
      this.isMobile = window.innerWidth < 850
    }
    },
    components: {
    Gallery,
    HeroSlim,
    ContactForm,
    Divider
  },
}
</script>

<style>
/* #gallery {
  margin-top: 75px;
  width: 100%;
  height: 100%;
} */
</style>

