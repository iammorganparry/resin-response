<template>
  <v-app light>
    <v-toolbar
    flat
    fixed
    >
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
        v-if="isMobile"
      >
        <v-icon>menu</v-icon>
      </v-btn>
      <div v-else id="desktop-nav">
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in items"
          :key="item.title"
          nuxt
          :to="item.to">
          <!-- <v-icon left dark>{{ item.icon }}</v-icon> -->
          <span class="primary--text">
          {{ item.title }}
          </span>
        </v-btn>
      </v-toolbar-items>
      </div>
      <v-spacer />
      <v-toolbar-title v-if="!isMobile">
        CALL OUR TEAM ON: <span class="primary--text">07376411844</span>
      </v-toolbar-title>
      <span v-if="isMobile">
        <a href="https://www.facebook.com/resin.response" target="_blank">
       <v-btn
        icon
      >
       <i class="facebook-icon fa fa-facebook-f"></i>
      </v-btn>
        </a>
      </span>
      <span v-else>
       <v-btn
        icon
      >
      <v-icon>phone</v-icon>
      </v-btn>
      </span>
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
      <Header :mobile="isMobile" />
      <!-- <v-container id="main"> -->
        <nuxt />
      <!-- </v-container> -->
    </v-content>

    <PhoneButton :mobile="isMobile" />
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
import PhoneButton from '~/components/PhoneButton.vue'
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      isMobile: false,
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
          title: 'Resin Compound',
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
    beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
    },

    mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
    },
    methods: {
    onResize () {
      this.isMobile = window.innerWidth < 850
    }
    },
   components: {
    Footer,
    Header,
    PhoneButton
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
.facebook-icon {
  font-size: 2em;
  color: #3b5998;
}

#desktop-nav {
  margin-left: 200px;
  height: 100%;
}
</style>
