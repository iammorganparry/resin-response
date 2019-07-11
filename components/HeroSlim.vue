<template>
<div id="hero" class="">
  <v-img class="blur" v-if="isMobile" height="200" :src="src">
        <div class="title-container">
    <h1 class="title primary--text">{{title}}</h1>
      </div>
  </v-img>
  <v-img class="blur" v-else height="300" :src="src">
    <div class="title-container">
    <h1 class="title primary--text">{{title}}</h1>
    </div>
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



@media only screen and (max-width: 600px) {
.title-container {
  background: rgb(255,255,255,0.5);
  width: 80%;
  justify-content: center;
  display: flex;
  height: 100px;
}
}
</style>
