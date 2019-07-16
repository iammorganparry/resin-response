<template>
<div>
  <HeroSlim title="ABOUT US" :isMobile="isMobile"/>
  <v-container id="about-us">
  <v-layout row wrap>
    <v-flex xs12 text-xs-center>
      <h1>About Us</h1>
      <p>
        Here at Resin Response we are small local business operating out of Nantymoel, just 15 minutes outside of Bridgend. We cover all of South Wales to provide our customers a quality installation and a Low Maintentance, durable, long-lasting product everytime! Our services cover everything from Resin Bound Drives,Paths and Patios to Landscaping! Contact us for the best quote around!
      </p>
     <div class="header-padding">
      <Divider dividerText="CONTACT US" />
      </div>
      <ContactForm />
    </v-flex>
  </v-layout>
    </v-container>
</div>
</template>

<script>
import HeroSlim from '~/components/HeroSlim.vue'
import ContactForm from '~/components/ContactForm.vue'
import Divider from '~/components/Divider.vue'
export default {
  data() {
    return {
      isMobile: false
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
    HeroSlim,
    ContactForm,
    Divider
  }
}
</script>
<style>
  #about-us {
    margin-top: 100px;
    margin-bottom: 100px;
  }
  #about-us p {
    font-size: 1.3em;
  }
</style>
