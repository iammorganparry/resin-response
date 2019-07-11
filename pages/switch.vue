<template>
<div id="why-resin">
  <HeroSlim title='WHY RESIN?' />
  <v-container>
  <v-layout id="resin-intro" align-center row wrap>
    <v-flex xs12 lg6 md6 text-xs-center>
      <h2>Why Choose Resin?</h2>
       <p>That’s simple; our resin bound systems have the long-term strength and durability of concrete with minimal maintenance. It also has remarkable drainage ability whilst having the appearance of loose gravel, Water drains through the layers of resin to create a puddle free surface that alleviates flood risks. Resin Bound Surfacing binds a range of selective decorative kiln-dried aggregates with a two-part polyurethane resin, providing an attractive porous surface that looks amazing.</p>
    </v-flex>
    <v-flex xs12 lg6 md6 text-xs-center>
      <div class="text-xs-center"
      >
      <img :src="satisfactionImg" class="text-xs-center satisfaction-image"/>
      </div>
    </v-flex>
  </v-layout>
    <v-flex xs 12>
    <h2 class="secondary--text text-xs-center">HERE ARE JUST SOME BENEFITS</h2>
    <List :items="resinInfo" />
    </v-flex>
  </v-container>
</div>
</template>

<script>
import List from '~/components/List.vue'
import HeroSlim from '~/components/HeroSlim.vue'
export default {
  data() {
    return {
      satisfactionImg: require('~/assets/satisfaction-label.jpg'),
       resinInfo: [
        {
          title: 'Non Slip Surface',
          subtitle: ''
        },
        {
          title: 'No need for planning permission',
          subtitle: ''
        },
        {
          title: 'Its <span class="secondary--text">Wheelchair Friendly</span>, making it ideal for DDA schemes',
          subtitle: ''
        },
        {
          title: 'There are <span class="secondary--text">no loose stones</span>',
          subtitle: `- The decorative aggregate cant be scattered or kicked about<br>- We provide a smooth and permanently bound finish`
        },
        {
          title: 'It has a long lifespan as the resin and aggregates are specially selected for durability',
          subtitle: ''
        },
        {
          title: 'Once set, the resin course exhibits some flexibility enabling it to <span class="secondary--text">resist cracking</span>',
          subtitle: ''
        },
        {
          title: 'Its a full-thickness system',
          subtitle: '- Minimum of 12mm thick and can be considerably thicker depending on aggregate size and application'
        },
        {
          title: 'It can be used to overlay existing tired looking surfaces',
          subtitle: ''
        },
        {
          title: 'The finished surface can be used for all kinds of projects',
          subtitle: ''
        },
      ]
    }
  },
  components: {
    List,
    HeroSlim
  }
}
</script>

<style>
#why-resin p {
  font-size: 1.2em;
}

#resin-intro {
  padding-top: 75px;
}

.satisfaction-image {
  max-width: 400px;
  margin: 0 auto;
}

.v-list--three-line .v-list__tile {
  height: 60px !important;
}
</style>
