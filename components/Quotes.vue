<template>
   <div id="quotes">
    <v-carousel id="quotes-carousel" max="100%" height="200" hide-controls hide-delimiters flat light>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      >
        <blockquote class="blockquote text-xs-center">"{{item.quote}}"</blockquote>
        <footer class="text-xs-right">
          <small class="text-xs-right">
            <em>&mdash;{{item.customer}}</em>
          </small>
        </footer>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          quote: "Best thing I've had done for my garden thanks Resin Response roll on summer can't wait to get the BBQ out",
          customer: "Colin Bennet"
        },
        {
          quote: "The guys at Resin Response were amazing! Great job from the whole team!",
          customer: "Morgan P"
        },
        {
          quote: "Best thing I've had done for my garden thanks Resin Response roll on summer can't wait to get the BBQ out",
          customer: "Colin Bennet"
        },
      ]
    }
  }
}
</script>

<style>
#quotes {
  width: 50%;
  margin: 0 auto;
}
#quotes-carousel {
  box-shadow: none;
  padding: 10px;
}

#quotes-carousel small {
  padding-right: 10px;
}
@media only screen and (max-width: 600px) {
#quotes {
  width: 90%;
  margin: 0 auto;
}
.blockquote {
  padding: 16px 0 16px !important;
}
}
</style>
