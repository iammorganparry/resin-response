<template>
<div id="hero" class="text-xs-center">
  <v-img v-if="isMobile" height="200" :src="src">
    <h1 class="title primary--text">{{title}}</h1>
  </v-img>
  <v-img v-else height="300" :src="src">
    <h1 class="primary--text text-xs-center">{{title}}</h1>
  <!-- <Card :data="about" /> -->
            <!-- <Card :data="about" /> -->
  </v-img>
</div>
</template>

<script>
import Card from '~/components/Card.vue'
export default {
  props: {
    title: {
      type: String
    },
    isMobile: {
      type: Boolean
    }
  },
  data() {
    return {
        src: require('~/assets/hero.jpg'),
        about: {
        subtitle: 'Youre No.1 Choice For Driveways, Pathways & Patios',
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

<style scoped>
#hero {
  border-bottom: 5px solid #EF5350;
}

#hero .v-image__image {
  filter: blur(2px);
  -webkit-filter: blur(2px);
}

.title {
font-size: 3em !important;
margin-top: 75px;
}
</style>
