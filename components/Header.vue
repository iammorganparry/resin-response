<template>
  <div id="header" class='animated slideInDown text-xs-center v-toolbar--fixed'>
    <nuxt-link to="/">
    <v-img absolute width="150" :src="imageSrc" class="" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    mobile: {
      type: Boolean
    }
  },
  data () {
    return {
      imageSrc: require('~/assets/logo.jpg')
    }
  }
}
</script>

<style>
#header {
  position: fixed;
  left: 75px;
  z-index: 3;
}

@media only screen and (max-width: 850px) {
  #header {
  position: fixed;
  top: 0;
  left: 28.5%;
  z-index: 3;
  }
}
</style>
