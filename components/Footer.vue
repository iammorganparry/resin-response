<template>
  <div id='footer'>
    <v-container fluid>
        <v-flex xs12 md4 lg4>
          <h4>{{footer.contact.title}}</h4>
          <p>T: {{footer.contact.phone}}</p>
          <p>E: {{footer.contact.email}}</p>
        </v-flex>
        <v-flex xs12 md4 lg4>
          <h4>{{footer.services.title}}</h4>
          <p>{{footer.services.resin}}</p>
          <p>{{footer.services.landscaping}}</p>
        </v-flex>
        <v-flex xs12 md4 lg4>
          {{footer.about}}
        </v-flex>
          <v-flex xs12>
          {{footer.copy}}
        </v-flex>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    footer: {
      type: Object
    }
  }
}
</script>

<style>
#footer {
  width: 100%
}
</style>
