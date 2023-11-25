<template>
  <v-app>
    <div class="side-layout">
      <div class="background-section" />
      <div class="content-section">
        <div class="content-inner-wrapper">

          <transition :key="`${currentRouter}`" mode="out-in" name="scale">
            <slot></slot>
          </transition>

        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'

export default Vue.extend({
  name: "TheAuthLayoutWrap",

  computed: {
    currentRouter () :VueConstructor<Vue> | null {
      return this.$root.$customRouter.currentComponent
    }
  }
})
</script>

<style lang="scss" scoped>

.side-layout {
  display: flex;
  width: 100%;
  height: 100%;
  background: var(--v-white-base);
}

@media only screen and (max-width: 1024px) {
  .background-section {
    display: none !important;
  }
}

.background-section {
  width: 30%;
  height: 100%;
  background-color: var(--v-primary-lighten2);
  display: flex;
}

.content-section {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-inner-wrapper {
  width: 440px;
}
</style>