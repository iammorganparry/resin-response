<template>
<div id="hero" class="">
  <HeroCarousel v-if="isMobile" :title="title" height="300" />
  <HeroCarousel v-else :title="title" height="400" />
  <!-- <v-img class="blur" v-else height="350" :src="src">
    <div class="title-container">
    <h1 class="title primary--text">{{title}}</h1>
    </div> -->
  <!-- <Card :data="about" /> -->
            <!-- <Card :data="about" /> -->
  <!-- </v-img> -->
</div>
</template>

<script>
import Card from '~/components/Card.vue'
import HeroCarousel from '~/components/HeroCarousel.vue'
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
        src: require('~/assets/hero6.jpeg'),
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
    Card,
    HeroCarousel
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
/* margin: 125px 0 0 50px; */
color: white;
}

.title-container {
  background: rgb(255,255,255,0.5);
  width: 30%;
  justify-content: center;
  display: flex;
  margin: 125px 0 0 0;

  border-radius: 0 25px 25px 0;
  height: 100px;
}
</style>
