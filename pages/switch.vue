<template>
  <v-layout>
    <v-flex text-xs-center>
    <h1 class="header-padding text-xs-center primary--text">Why switch to Resin Bound Surfacing?</h1>
    <List :items="resinInfo" />
    </v-flex>
  </v-layout>
</template>

<script>
import List from '~/components/List.vue'
export default {
  data() {
    return {
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
    List
  }
}
</script>
