<template>
<div>
      <v-carousel
      id="hero-carousel"
      :height="height"
      hide-controls hide-delimiters flat
      >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    <div class="title-container">
        <h1 class="title primary--text">{{title}}</h1>
    </div>

    </v-carousel-item>

      </v-carousel>
</div>
</template>

<script>
export default {
  props: {
    title: {
      tyle: String
    },
    height: {
      type: String
    }
  },
  data() {
    return {
      items: [
        {
          src: require('~/assets/hero.jpg'),
        },
        {
          src: require('~/assets/hero7.jpg'),
        },
        {
          src: require('~/assets/hero8.jpg'),
        },
        {
          src: require('~/assets/hero9.jpg'),
        },
      ]
    }
  }
}
</script>

<style>
.title {
font-size: 3em !important;
/* margin: 125px 0 0 50px; */
color: white;
}

#hero-carousel {
  width: 100%;
  /* height: 250px; */
}

.title-container {
  background: rgb(255,255,255,0.5);
  width: 100%;
  justify-content: center;
  display: flex;
  margin: 175px 0 0 0;
  height: 100px;
}

@media only screen and (max-width: 850px) {
.title-container {
  background: rgb(255,255,255,0.5);
  width: 100%;
  margin: 125px 0 0 0;
  height: 75px;
}
.title {
font-size: 2em !important;
/* margin: 125px 0 0 50px; */
color: white;
}
}

</style>
