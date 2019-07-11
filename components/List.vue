<template>
   <v-list three-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar
            >
              <v-list-tile-avatar>
                 <v-icon class="secondary--text">check</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content class='text-xs-center'>
                <v-list-tile-title class='text-xs-center' v-html="item.title"></v-list-tile-title>
                <p class='text-xs-center' v-html="item.subtitle"></p>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: [
        {
          title: 'Resin',
          subtitle: 'Response'
        }
      ]
    }
  }
}
</script>

<style>
</style>
