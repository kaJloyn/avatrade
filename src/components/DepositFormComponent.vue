<template>
  <v-container class="pa-5">
    <v-form>
    <v-row>
      <v-col class="pa-0">
        <v-text-field
            outlined
            hint="Enter your card number"
            placeholder="Card Number"
            type="number"
            autocomplete="off"
            prepend-inner-icon="mdi-credit-card"
            v-model="cardNumber"
            :error-messages="cardNumberError"
            @blur="validateCardNumber"
        >
        </v-text-field>
      </v-col>

      <v-col cols="3" class="py-0">
        <v-text-field
          outlined
          type="number"
          autocomplete="off"
          hint="Enter your cvv"
          placeholder="CVV"
          v-model="cvv"
          :error-messages="cvvError"
          @blur="validateCvv"
        />
      </v-col>
    </v-row>

      <v-row>
        <v-col class="pa-0">
          <v-text-field
            outlined
            hint="Enter your card expires dats"
            placeholder="Expires Date"
            type="date"
            prepend-inner-icon="mdi-calendar-range"
            v-model="expiryDate"
            :error-messages="expiryDateError"
            @blur="validateExpiryDate"
          >
          </v-text-field>
        </v-col>
      </v-row>
    </v-form>

    <v-row justify="center" class="mt-0">
      <v-col cols="8">
        <v-btn
            block
            rounded
            x-large
            color="primary"
            class="mb-1"
            :disabled="!cardNumber || !cvv || !expiryDate"
            @click="deposit"
        >
          Deposit
        </v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>



<script lang="ts">
import Vue from 'vue'

export default Vue.extend ({
  name: "DepositFormComponent",

  data () {
    return {
      cardNumber: null,
      cvv: null,
      expiryDate: null,

      cardNumberError: '',
      cvvError: '',
      expiryDateError: ''
    }
  },

  methods: {
    validateCardNumber (): void {
      if(!this.cardNumber) {
        this.cardNumberError = 'Card number is required'
      } else {
        this.cardNumberError = ''
      }
    },

    validateCvv (): void {
      if(!this.cvv) {
        this.cvvError = 'CVV is required'
      } else {
        this.cvvError = ''
      }
    },

    validateExpiryDate (): void {
      if (!this.expiryDate) {
        this.expiryDateError = 'Expiry Date is required'
      } else {
        this.expiryDateError = ''
      }
    },

    deposit (): void {
      console.log('Card Number', this.cardNumber)
      console.log('CVV', this.cvv)
      console.log('Expiry Date', this.expiryDate)
    }
  }
})
</script>

<style scoped>

</style>