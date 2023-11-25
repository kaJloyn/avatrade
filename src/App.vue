<template>
  <v-app id="app">
    <custom-router-view></custom-router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import CustomRouterView from "@/custom-router/CustomRouterView.vue"

export default Vue.extend({
  name: 'App',

  components: {
    CustomRouterView
  },

  data: () => ({
    //
  }),
})
</script>
