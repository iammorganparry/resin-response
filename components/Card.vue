<template>
  <div id="opening-card" class="animated fadeIn">

          <!-- <h1 class="title primary--text text-xs-center">
          {{data.title}}
          </h1> -->
          <h2 class="title text-xs-center">
          {{data.subtitle}}
          </h2>
        <v-card-text>
          <div class="text-xs-center">
          <span class="animated slideIn offer primary--text">{{data.offer}}*</span>
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
            large
          >
          <a :href="data.button.to">
            {{data.button.text}}
            </a>
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
    background:rgb(0 , 0, 0,0.6);
    border-radius: 10px;
    position: absolute;
}
.offer {
  font-size: 6em;
  display: block;
  font-weight: 600;
}

.sub-offer {
  font-size: 1.5em;
  color: white !important;
}
#opening-card a {
  text-decoration: none;
  color: white;
}

.title {
  /* text-shadow: 2px 2px 2px rgb(0,0,0,0.3); */
  font-weight: 600;
  font-size: 2em !important;
  color: white;
}


@media only screen and (max-width: 850px) {
 #opening-card {
    top: 100px;
    left: 10%;
    /* margin-bottom: 75px;  */
    /* height: 250px; */
    width: 80%;
    top: 25%;
    padding: 30px;
    background:rgb(0, 0, 0,0.6);
    border-radius: 10px;
    position: absolute;
}
.offer {
  font-size: 3em;
  display: block;
  font-weight: 600;
}

.sub-offer {
  font-size: 1em;
  color: white !important;
}
}
</style>

