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
        src: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/35416225_115127122722425_4219977128357134336_o.jpg?_nc_cat=103&_nc_oc=AQlGYZF4Rzow04MS569qLXh5bB0lLkG3lJauEfufamWFY2M7CQXpJ_lxJAqdKc8am02HY1CuCVFiYpxiahwb3FIA&_nc_ht=scontent-lht6-1.xx&oh=1da6c4b979d0f7d04a07fc952289cae7&oe=5DAD1269',
        about: {
        title: 'Thank you for visiting Resin Response',
        subtitle: 'Youre No.1 Choice For Driveways, Pathways & Patios',
        offer: '20% OFF!',
        subOffer: 'ALL WORK',
        paragraph: '',
        button: {
          text: 'CONTACT US',
          to: '/contact'
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
