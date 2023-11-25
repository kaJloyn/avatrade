<template>
  <div class="container">
    <deposit-form-component />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DepositFormComponent from "@/components/DepositFormComponent.vue"

export default Vue.extend({
  name: "DepositView",

  components: { DepositFormComponent }
})
</script>

<style scoped>

</style>