<template>
  <div id='footer'>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md12 lg12 class="text-xs-center">
          <!-- <h3 class="contact-title">{{footer.contact.title}}</h3> -->
          <p><strong>T: {{footer.contact.phone}}</strong></p>
          <p><strong>E: {{footer.contact.email}}</strong></p>
          <FacebookButton :data="facebookButton" />
          <a href="https://twitter.com/ResinResponse" target="_blank">
          <i class="twitter-icon fa fa-twitter"></i>
          </a>
          <!-- <nuxt-link to="/privacy">
          <p>PRIVACY POLICY</p>
          </nuxt-link>
          <nuxt-link to="/complaints">
          <p>CUSTOMER COMPLAINTS</p>

          </nuxt-link> -->
        </v-flex>
        <v-flex xs12 md12 lg12 class="text-xs-center">

        <span v-for="(item, i) in items" :key="i">
        <NuxtLink :to="item.to">
        {{item.title}}
        </NuxtLink>
      </span>
        </v-flex>
          <v-flex xs12 class="text-xs-center">
          {{footer.copy}}
        </v-flex>
        <v-layout align-center justify-center row fill-height>
        <v-flex xs3 lg1 md1>
          <div class="text-xs-center mini-logo">
              <nuxt-link to="/">
      <v-img width="75" :src="imageSrc" class='text-xs-center'/>
      </nuxt-link>
          </div>
        </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import FacebookButton from '~/components/FacebookButton.vue'
export default {
    data() {
      return {
           items: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'About',
          to: '/about'
        },
        {
          title: 'Resin Compound',
          to: '/switch'
        },
        {
          title: 'Gallery',
          to: '/gallery'
        },
        {
          title: 'Contact',
          to: '/contact'
        }
      ],
      imageSrc: require('~/assets/logo.jpg'),
        footer: {
        copy: 'Copyright Resin Response 2019',
        contact: {
          title: 'Contact Us',
          phone: '07376411844',
          email: 'info@resinresponse.co.uk'
        },
        services: {
          title: 'Services',
          resin: 'Resin Bound Driveways',
          landscaping: 'Landscaping',
          email: 'resinresponse@hotmail.co.uk'
        },
      },
          facebookButton: {
            url: 'https://www.facebook.com/resin.response'
          }
      }
  },
  components: {
    FacebookButton
  }
}
</script>

<style scoped>
#footer {
  width: 100%;
  align-content: bottom;
}
#footer p {
  margin: 0;
}
a {
 text-decoration: none;
}
.twitter-icon:hover {
  cursor: pointer;
}
.twitter-icon {
  font-size: 4em;
  color: #38A1F3;
}

.contact-title {
  margin-bottom: 20px;
}

.container {
  margin: 0 auto;
}

.mini-logo {
  width: 100%;
  opacity: 0.5;
}
</style>
