<template>
  <component :is="currentComponent"></component>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";

export default Vue.extend ({
  name: "CustomRouterView",
  computed: {
    currentComponent ():VueConstructor<Vue> | null {
      return this.$root.$customRouter.currentComponent;
    }
  }
})
</script>

<style scoped>

</style>