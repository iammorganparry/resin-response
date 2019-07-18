<template>
<div id="hero">
  <v-img height="600" :src="src">
  <!-- <Card :data="about" /> -->
            <Card :data="about" />
  </v-img>
</div>
</template>

<script>
import Card from '~/components/Card.vue'
export default {
  data() {
    return {
        src: require('~/assets/hero.jpg'),
        about: {
        title: 'Thank you for visiting Resin Response',
        subtitle: "The UK's No.1 Resin Specialist",
        offer: '20% OFF!',
        subOffer: 'ALL WORK',
        paragraph: '',
        button: {
          text: 'CONTACT US',
          to: '#contact'
        }
      },
    }
  },
  components: {
    Card
  }
}
</script>

<style>
#hero {
  border-bottom: 5px solid #EF5350;
}
</style>
