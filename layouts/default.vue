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
      <v-toolbar-title v-text="title" />
      <v-spacer />
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
        <v-list-tile-action>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-tile-action>
        <NuxtLink :to="item.to">
        <v-list-tile-title>{{item.title}}</v-list-tile-title>
        </NuxtLink>
      </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
    app
    height="300"
    absolute
    >
    <Footer :footer="footer" />
    </v-footer>
  </v-app>
</template>

<script>
import Footer from '~/components/Footer.vue'
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
          title: 'Products',
          to: '/products'
        },
        {
          icon: 'bubble_chart',
          title: 'Services',
          to: '/services'
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
      footer: {
        copy: 'Copyright Resin Response 2019 | Website by MJP Websites Solutions',
        contact: {
          title: 'Contact Us',
          phone: '07449857222',
          email: 'info@resinresponse.co.uk'
        },
        services: {
          title: 'Our Services',
          resin: 'Resin Driveways',
          landscaping: 'Resin Landscaping'
        }
      }
    }
  },
   components: {
    Footer
  }
}
</script>

<style scoped>
a {
    text-decoration: none;
}

</style>
