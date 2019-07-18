<template>
<div id="why-resin">
  <HeroSlim title='RESIN COMPOUND' :isMobile="isMobile" />
  <v-container>
  <v-layout id="resin-intro" align-center row wrap>
    <v-flex xs12 lg6 md6 text-xs-center>
      <h2>Why Choose Resin?</h2>
      <p><strong class="secondary--text">Low maintenance</strong>, <strong class="secondary--text">durable</strong> and <strong class="secondary--text">long lasting!</strong> These are just a handful of reasons why you should make the switch to a Resin Bound Drive, Patio or Path. Because resin is extrememly porous you never have to worry about rain forming puddles again. Rain water is naturally drained through the surface alleviating the risk of slipping and flooding! With a vast array of colours and designs to choose from, you can rest assured that the look and feel of your driveway, path or patio will be incredible! Our work is completely SuDS (Sustainable Drainage Systems) compliant, therefore no need for planning permission!</p>
    </v-flex>
    <v-flex xs12 lg6 md6 text-xs-center>
      <div class="text-xs-center"
      >
      <img :src="satisfactionImg" class="text-xs-center satisfaction-image"/>
      </div>
    </v-flex>
  </v-layout>
    <div id="benefits">
    <v-flex xs 12>
    <h2 class="header-padding secondary--text text-xs-center">HERE ARE JUST SOME BENEFITS</h2>
    <v-layout row wrap>
      <v-flex xs12 md6 lg6>
        <List :items="resinInfo" />
      </v-flex>
      <v-flex xs12 md6 lg6>
        <List :items="resinInfoRight" />
      </v-flex>
    </v-layout>
    </v-flex>
    <v-flex xs12>
          <h2 class="header-padding secondary--text text-xs-center">CHOOSE FROM A RANGE OF COLOURS</h2>
          <v-layout row wrap align-center>
            <v-flex xs12 md6 lg6>
              <v-img :src='coloursImg' alt='colour palette'/>
            </v-flex>
            <v-flex xs12 md6 lg6>
              <p class='text-xs-center'>We offer up to 40 stunning colours to choose from! Pick your favourite from our samples or mix and match for that perfect look!</p>
            </v-flex>
          </v-layout>
    </v-flex>
    <v-flex id="resin-contact" xs12>
      <div class="header-padding">
      <Divider dividerText="CONTACT US" />
      </div>
      <ContactForm />
    </v-flex>
    </div>
  </v-container>
</div>
</template>

<script>
import List from '~/components/List.vue'
import HeroSlim from '~/components/HeroSlim.vue'
import Divider from '~/components/Divider.vue'
import ContactForm from '~/components/ContactForm.vue'
export default {
  data() {
    return {
      isMobile: false,
      satisfactionImg: require('~/assets/satisfaction-label.jpg'),
      coloursImg: require('~/assets/colors/colour-palette.png'),
       resinInfo: [
        {
          title: 'Non Slip Surface',
          subtitle: ''
        },
        {
          title: 'No need for planning permission - SuDS Compliant',
          subtitle: ''
        },
        {
          title: 'Its <span class="secondary--text">Wheelchair Friendly</span>, making it ideal for DDA schemes',
          subtitle: ''
        },
        {
          title: 'There are <span class="secondary--text">no loose stones</span>',
          subtitle: `- The decorative aggregate cant be scattered or kicked about<br>- We provide a smooth and permanently bound finish`
        }
      ],
      resinInfoRight:[
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
        }
      ],
    }
  },
   beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
    },
    mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
    },
    methods: {
    onResize () {
      this.isMobile = window.innerWidth < 850
    }
    },
  components: {
    List,
    HeroSlim,
    Divider,
    ContactForm
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

#resin-contact {
  margin-top: 50px;
}

.satisfaction-image {
  max-width: 400px;
  margin: 0 auto;
}

#benefits {
  margin-top: 75px;
  margin-bottom: 100px;
}

@media only screen and (max-width: 600px) {

.satisfaction-image {
  max-width: 250px;
  margin: 0 auto;
}
}
</style>
