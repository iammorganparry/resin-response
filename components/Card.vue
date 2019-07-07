<template>
  <div>
     <v-card flat>
          <h1 class="text-xs-center header-padding">
          {{data.title}}
          </h1>
          <h2 class="text-xs-center">
          {{data.subtitle}}
          </h2>
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

</style>

