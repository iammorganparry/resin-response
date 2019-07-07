<template>
  <v-layout
  >
    <v-flex
      xs12
      sm12
      md12
    >
      <div class="text-xs-center">
    <v-carousel max="100%">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
      </div>
     <Card :data="about" />
     <div class="header-padding">
      <div style="width: 100%; height: 30px; border-bottom: 1px solid rgba(0,0,0,0.12); text-align: center">
  <span  style="font-size: 40px; background-color: #fafafa; padding: 0 10px 0 10px;">
    Our Services <!--Padding is optional-->
  </span>
</div>
     </div>
     <div id="driveway-card">
     <CardTwoCols :data="products" />
     </div>
     <div id="landscape-card">
     <CardTwoColsImgRight :data="services" />
     </div>
     <v-divider></v-divider>
     <div class="header-padding">
     <h1 class="text-xs-center">Dont Just Take Our Word For It!</h1>
     <h2 class="text-xs-center">Read What Our Customers Have To Say</h2>
     </div>
     <div id="quotes">
        <blockquote class="blockquote text-xs-center">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at."</blockquote>
        <footer class="text-xs-right">
          <small class="text-xs-right">
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
     </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Card from '~/components/Card.vue'
import CardTwoCols from '~/components/CardTwoCols.vue'
import CardTwoColsImgRight from '~/components/CardTwoColsImgRight.vue'
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
      about: {
        title: 'Thank you for visiting Resin Response',
        subtitle: 'Youre No.1 Choice For Driveways, Pathways & Patios',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac eros id lectus scelerisque blandit id ac lorem. Morbi iaculis, tellus ut ultricies pulvinar, ipsum urna euismod turpis, non dapibus dolor nisi a tellus. Morbi lacinia ipsum vitae imperdiet maximus. Proin vel odio dolor. Integer augue enim, pellentesque ut suscipit euismod, vehicula vel urna. Nulla at nisl id urna interdum scelerisque. Etiam pellentesque pulvinar ex et scelerisque.',
        button: {
          text: 'About Us',
          to: '/about'
        }
      },
      products: {
        title: 'Driveways',
        subtitle: 'We only use the best products to ensure a qaulity finish everytime!',
        imgSrc: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/39748512_156856168549520_3251939182565654528_n.jpg?_nc_cat=100&_nc_oc=AQnbFNApRi_3FYyzXiqwiyBTVhfxRNzIACjnOrGqeN4ds4nPYXbegKdD2ers4av9DUtpLZ6d54BF_T9bNoV-LQsU&_nc_ht=scontent-lht6-1.xx&oh=ad00ab687a83f9518243f77415730d44&oe=5DC4B79C',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac eros id lectus scelerisque blandit id ac lorem. Morbi iaculis, tellus ut ultricies pulvinar, ipsum urna euismod turpis, non dapibus dolor nisi a tellus. Morbi lacinia ipsum vitae imperdiet maximus. Proin vel odio dolor. Integer augue enim, pellentesque ut suscipit euismod, vehicula vel urna. Nulla at nisl id urna interdum scelerisque. Etiam pellentesque pulvinar ex et scelerisque.',
        button: {
          text: 'View Projects',
          to: '/products'
        }
      },
      services: {
        title: 'Landscaping',
        subtitle: 'We provide both residential and commercial services!',
        imgSrc: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/58769504_297549484480187_4075725248652115968_n.jpg?_nc_cat=109&_nc_oc=AQnx77bJnJarVO8579KoBo7qMGi8EOwd_iGWd_fvcBlwgGURY-cGOd4UgZ_ZdT33NxNgl-k2tWi30SeyEpV0YSZ_&_nc_ht=scontent-lht6-1.xx&oh=0a0416812176e28fb7bf7239ccb9eeea&oe=5D7B6230',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac eros id lectus scelerisque blandit id ac lorem. Morbi iaculis, tellus ut ultricies pulvinar, ipsum urna euismod turpis, non dapibus dolor nisi a tellus. Morbi lacinia ipsum vitae imperdiet maximus. Proin vel odio dolor. Integer augue enim, pellentesque ut suscipit euismod, vehicula vel urna. Nulla at nisl id urna interdum scelerisque. Etiam pellentesque pulvinar ex et scelerisque.',
        button: {
          text: 'View Projects',
          to: '/services'
        }
      }
    }
  },
  components: {
    Logo,
    VuetifyLogo,
    Card,
    CardTwoCols,
    CardTwoColsImgRight
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
#quotes {
  width: 50%;
  margin: 0 auto;
}
</style>
