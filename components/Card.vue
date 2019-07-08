<template>
  <div id="opening-card">

          <h1 class="primary--text text-xs-center">
          {{data.title}}
          </h1>
          <h2 class="text-xs-center">
          {{data.subtitle}}
          </h2>
        <v-card-text>
          <div class="text-xs-center">
          <span class="offer">{{data.offer}}</span>
          <span class="sub-offer">{{data.subOffer}}</span>
          </div>
          <p>
          {{data.paragraph}}
          </p>
        </v-card-text>
          <!-- <v-spacer /> -->

          <div class="text-xs-center">
          <v-btn
            color="primary"

            nuxt
            :to="data.button.to"
          >
            {{data.button.text}}
          </v-btn>
          </div>
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
h1 {
  margin-top: 25px;
}
#opening-card {
    top: 100px;
    left: 25%;
    margin-bottom: 75px;
    width: 50%;
    padding: 50px;
    background:rgb(255, 255, 255,0.1);
    border-radius: 10px;
    position: absolute;
}
.offer {
  font-size: 6em;
  display: block;
  font-weight: 600;
}

.sub-offer {
  font-size: 3em;
}
</style>

