<template>
  <v-app light>
    <v-toolbar
    flat
    fixed
    >
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
      <v-spacer />
      <v-toolbar-title>
        CALL OUR TEAM ON: 07376411844
      </v-toolbar-title>
       <v-btn
        icon
      >
        <v-icon>phone</v-icon>
      </v-btn>
    </v-toolbar>
     <v-navigation-drawer
      v-model="rightDrawer"
      :left="left"
      temporary
      fixed
    >
      <v-list>
          <v-list-tile v-for="(item, i) in items" :key="i">
        <NuxtLink :to="item.to">
        <v-list-tile-title>{{item.title}}</v-list-tile-title>
        </NuxtLink>
      </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <Header />
      <!-- <v-container id="main"> -->
        <nuxt />
      <!-- </v-container> -->
    </v-content>
    <v-footer
    app
    height="300"
    absolute
    >
    <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'About',
          to: '/about'
        },
        {
          icon: 'bubble_chart',
          title: 'Why Switch?',
          to: '/switch'
        },
        {
          icon: 'camera_enhance',
          title: 'Gallery',
          to: '/gallery'
        },
        {
          icon: 'bubble_chart',
          title: 'Contact',
          to: '/contact'
        }
      ],
      miniVariant: false,
      left: true,
      rightDrawer: false,
      title: 'Resin Response',
        services: {
          title: 'Our Services',
          resin: 'Resin Driveways',
          landscaping: 'Resin Landscaping'
        }
      }
    },
   components: {
    Footer,
    Header
  }
}
</script>

<style scoped>
a {
    text-decoration: none;
}

#main {
  margin-top: 100px;
}
.application.theme--light {
  background-color: white !important;
}
</style>
