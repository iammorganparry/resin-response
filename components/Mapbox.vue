<template>
  <div id="map">
    <v-img v-if="isMobile" :src="mapSrcMob"/>
    <v-img v-else :src="mapSrc"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
      mapSrc: require('~/assets/map2.png'),
      mapSrcMob: require('~/assets/map-mobile.png')
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
      this.isMobile = window.innerWidth < 650
    }
    },
}
</script>

<style scoped>
  #map {
  border-bottom: 5px solid #EF5350;
  }

  .v-image__image.v-image__image--cover {
    background-position: top center !important;
  }

  @media only screen and (max-width: 850px) {
 #map {
   height: 100%;
  }
  }
</style>
