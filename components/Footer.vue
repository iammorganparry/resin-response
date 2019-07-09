<template>
  <div id='footer'>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md12 lg12 class="text-xs-center">
          <h4>{{footer.contact.title}}</h4>
          <p>T: {{footer.contact.phone}}</p>
          <p>E: {{footer.contact.email}}</p>
          <nuxt-link to="/privacy">
          <p>PRIVACY POLICY</p>
          </nuxt-link>
          <nuxt-link to="/complaints">
          <p>CUSTOMER COMPLAINTS</p>
          </nuxt-link>
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
      </v-layout>
    </v-container>
  </div>
</template>

<script>
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
          title: 'Why Resin?',
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
        footer: {
        copy: 'Copyright Resin Response 2019 | Website by MJP Websites Solutions',
        contact: {
          title: 'Contact Us',
          phone: '07449857222',
          email: 'resinresponse@hotmail.co.uk'
        },
        services: {
          title: 'Services',
          resin: 'Resin Bound Driveways',
          landscaping: 'Landscaping',
          email: 'resinresponse@hotmail.co.uk'
        },
      }
      }
  }
}
</script>

<style scoped>
#footer {
  width: 100%
}

a {
 text-decoration: none;
}
</style>
