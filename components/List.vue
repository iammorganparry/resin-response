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
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
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
.v-list__tile__title, .v-list__tile__sub-title {
  overflow: none !important;
  white-space: pre-line !important;
  height: auto !important;
}




.v-list--three-line .v-list__tile  {
  height: auto !important;
}
</style>
