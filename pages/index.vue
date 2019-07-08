<template>
<div>
<Hero />
<v-container id="main">
  <v-layout
  >
    <v-flex
      xs12
      sm12
      md12
    >
      <div class="text-xs-center">
      </div>
     <div class="header-padding">
      <div style="width: 100%; height: 30px; border-bottom: 1px solid rgba(0,0,0,0.12); text-align: center">
  <span class="primary--text"  style="font-size: 40px; background-color: white; padding: 0 10px 0 10px;">
    OUR SERVICES <!--Padding is optional-->
  </span>
</div>
     </div>
     <v-container grid-list-md>
     <v-layout row wrap>
      <v-flex xs12 md4 lg4>
     <div id="driveway-card">
     <CardTwoCols :data="products" />
     </div>
      </v-flex>
    <v-flex xs12 md4 lg4>
     <div id="landscape-card">
     <CardTwoCols :data="services" />
     </div>
    </v-flex>
    <v-flex xs12 md4 lg4>
     <CardTwoCols :data="patios" />
    </v-flex>
     </v-layout>
     </v-container>
     <v-divider></v-divider>
    <Carousel :items="items" />
     <v-divider></v-divider>
     <div class="header-padding">
     <h1 class="primary--text text-xs-center">Dont Just Take Our Word For It!</h1>
     <h2 class="text-xs-center">Read What Our Customers Have To Say</h2>
     </div>
    <Quotes />
    <ContactForm />
    </v-flex>
  </v-layout>
</v-container>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Card from '~/components/Card.vue'
import CardTwoCols from '~/components/CardTwoCols.vue'
import CardTwoColsImgRight from '~/components/CardTwoColsImgRight.vue'
import Carousel from '~/components/Carousel.vue'
import Hero from '~/components/Hero.vue'
import Quotes from '~/components/Quotes.vue'
import ContactForm from '~/components/ContactForm.vue'
export default {
  data() {
    return {
      items: [
        {
          name: 'Image One',
          src: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/35416225_115127122722425_4219977128357134336_o.jpg?_nc_cat=103&_nc_oc=AQlGYZF4Rzow04MS569qLXh5bB0lLkG3lJauEfufamWFY2M7CQXpJ_lxJAqdKc8am02HY1CuCVFiYpxiahwb3FIA&_nc_ht=scontent-lht6-1.xx&oh=1da6c4b979d0f7d04a07fc952289cae7&oe=5DAD1269'
        },
        {
          name: 'Image Two',
          src: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/54524155_276783313223471_7789933960309506048_o.jpg?_nc_cat=102&_nc_oc=AQlUGVzLz4S13ytXdx4fb2MWlrEbZu8mz6lEXzFZK5G8KL2RLPYdhELhXWyikyR6I6qYGuMIQ7EqslQBeIoDcJlE&_nc_ht=scontent-lht6-1.xx&oh=d235624e18f506b53949c73baff363de&oe=5DC7050C'
        },
        {
          name: 'Image Three',
          src: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/39748512_156856168549520_3251939182565654528_n.jpg?_nc_cat=100&_nc_oc=AQnbFNApRi_3FYyzXiqwiyBTVhfxRNzIACjnOrGqeN4ds4nPYXbegKdD2ers4av9DUtpLZ6d54BF_T9bNoV-LQsU&_nc_ht=scontent-lht6-1.xx&oh=ad00ab687a83f9518243f77415730d44&oe=5DC4B79C'
        }
      ],
      products: {
        title: 'Driveways',
        subtitle: `Tired of your cracking driveway? With a resin bound driveway, you're guarenteed a smooth, long-lasting, puddle-free drivway for years to come! Oh.. and its SUDS compliant!`,
        imgSrc: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/35416225_115127122722425_4219977128357134336_o.jpg?_nc_cat=103&_nc_oc=AQlGYZF4Rzow04MS569qLXh5bB0lLkG3lJauEfufamWFY2M7CQXpJ_lxJAqdKc8am02HY1CuCVFiYpxiahwb3FIA&_nc_ht=scontent-lht6-1.xx&oh=1da6c4b979d0f7d04a07fc952289cae7&oe=5DAD1269',
        paragraph: '',
        button: {
          text: 'View Projects',
          to: '/products'
        }
      },
      services: {
        title: 'Paths',
        subtitle: 'We provide both residential and commercial services for pathways, we can rejuventate old worn pathways with ease!',
        imgSrc: require('~/assets/pathway.jpeg'),
        paragraph: '',
        button: {
          text: 'View Projects',
          to: '/services'
        }
      },
      patios: {
        title: 'Patios and Garden',
        subtitle: 'Make sure your garden is in the best shape possible for those summer BBQs and get-togethers! Our bespoke designs will ensure your garden is the topic of conversation!',
        imgSrc: require('~/assets/garden.jpeg'),
        paragraph: '',
        button: {
          text: 'View Projects',
          to: '/services'
        }
      },
    }
  },
  components: {
    Logo,
    VuetifyLogo,
    Card,
    CardTwoCols,
    CardTwoColsImgRight,
    Carousel,
    Hero,
    Quotes,
    ContactForm
  }
}
</script>

<style>
.header-padding {
  padding: 50px;
}
#driveway-card, #landscape-card {
  margin-bottom: 50px;
}
#main {
  margin-top: 10px;
}
</style>
