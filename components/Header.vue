<template>
  <div id="header" class='text-xs-center v-toolbar--fixed'>
    <nuxt-link to="/">
    <v-img absolute width="150" :src="imageSrc" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
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
</style>
