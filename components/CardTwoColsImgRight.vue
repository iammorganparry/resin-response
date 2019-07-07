<template>
  <div>
 <v-card flat>
    <v-layout>
      <v-flex
      xs12
      md8
      lg8
      >
        <v-card-title class="headline">
          {{data.title}}
        </v-card-title>
        <v-card-title>
          {{data.subtitle}}
        </v-card-title>
        <v-card-text>
          <p>
          {{data.paragraph}}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            flat
            nuxt
            :to="data.to"
          >
            {{data.button.text}}
          </v-btn>
        </v-card-actions>
      </v-flex>
       <v-flex
      xs12
      md4
      lg4
      >
        <v-img height="350" :src="data.imgSrc"/>
      </v-flex>
    </v-layout>
      </v-card>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style>
.card {
  margin-bottom: 50px !important;
}
</style>
