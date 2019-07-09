<template>
  <div class="rounded">
      <v-card max-height="450" flat>
        <v-img max-height="250" min-height="250" :src="data.imgSrc"/>
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
        <!-- <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            flat
            nuxt
            :to="data.to"
          >
            {{data.button.text}}
          </v-btn>
        </v-card-actions> -->
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
.rounded {
  border-radius: 20px !important;
}

.v-card {
    border-radius: 10px !important;
}
</style>
