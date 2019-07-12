<template>
   <div id="quotes">
    <v-carousel id="quotes-carousel" hide-controls hide-delimiters flat light>
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
          quote: "Booked to have my drive resurfaced and am extremely pleased with the result. Resin Response - Dan & Scott completed the job within a few days following extensive prep work. The result is outstanding and I thoroughly recommend Resin Response. The team are professional, hard working, prompt and reliable! The price was very competitive too. Thanks lads for a great job 👍🏻",
          customer: "Gina Thomas"
        },
      ]
    }
  }
}
</script>

<style>
#quotes {
  width: 80%;
  margin: 0 auto;
}
#quotes-carousel {
  box-shadow: none;
  height: 300px !important;
  padding: 10px;
}

#quotes-carousel small {
  padding-right: 10px;
}
@media only screen and (max-width: 850px) {
#quotes {
  width: 90%;
  margin: 0 auto;
}
.blockquote {
  padding: 16px 0 16px !important;
  font-size: 14px;
}
}
</style>
