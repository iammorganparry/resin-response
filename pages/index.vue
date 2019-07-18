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
      <Divider dividerText="SERVICES" />
     </div>
     <v-container grid-list-md>
     <v-layout row wrap>
      <v-flex xs12 md6 lg6>
     <div id="driveway-card">
     <CardTwoCols :data="products" />
     </div>
      </v-flex>
    <v-flex xs12 md6 lg6>
     <div id="landscape-card">
     <CardTwoCols :data="services" />
     </div>
    </v-flex>
    <v-flex xs12 md6 lg6>
     <CardTwoCols :data="patios" />
    </v-flex>
    <v-flex xs12 md6 lg6>
     <CardTwoCols :data="landscaping" />
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
    <div class="header-padding">
    <Divider dividerText="CONTACT US" />
    </div>
    <div id="contact">
    <ContactForm />
    </div>
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
import Divider from '~/components/Divider.vue'
export default {
  data() {
    return {
      items: [
        {
          name: 'Image One',
          src: require('~/assets/hero.jpg')
        },
        {
          name: 'Image Two',
          src: require('~/assets/hero7.jpg')
        },
        {
          name: 'Image Three',
          src: require('~/assets/hero8.jpg')
        },
        {
          name: 'Image Four',
          src: require('~/assets/hero9.jpg')
        },
        {
          name: 'Image Five',
          src: require('~/assets/hero10.jpg')

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
        subtitle: 'Make sure your garden patio is in the best shape possible for those summer BBQs and get-togethers! Our bespoke designs will ensure your garden is the topic of conversation!',
        imgSrc: require('~/assets/garden.jpeg'),
        paragraph: '',
        button: {
          text: 'View Projects',
          to: '/services'
        }
      },
      landscaping: {
        title: 'Landscaping',
        subtitle: 'Thinking about updating a tired and dated garden or peice of propery? We offer a full range of landscaping services to cover your needs!',
        imgSrc: require('~/assets/landscaping.jpeg'),
        paragraph: '',
        button: {
          text: 'View Projects',
          to: '/services'
        }
      },
      contactDivider: 'CONTACT US',
      servicesDivider: 'OUR SERVICES'
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
    ContactForm,
    Divider
  }
}
</script>

<style>
.header-padding {
  padding: 50px;
  margin-bottom: 25px;
}
#driveway-card, #landscape-card {
  margin-bottom: 50px;
}
#main {
  margin-top: 10px;
}

@media only screen and (max-width: 850px) {
  .header-padding {
  padding: 50px;
  margin-bottom: 50px;
}
}
</style>
