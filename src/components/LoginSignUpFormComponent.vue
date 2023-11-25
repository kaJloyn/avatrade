<template>
  <v-container class="pa-10">

    <slot name="title"></slot>

    <v-row align-content="center">
      <v-col>
        <v-tabs
            active-class="tab-active"
            class="mb-4"
            show-arrows
            centered
            grow
            v-model="selectedTab"
        >
          <v-tab
              key="sign-up"
              href="#sign-up"
          >
            Sign-Up
          </v-tab>

          <v-tab
              key="login"
              href="#login"
          >
            Login
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-form>
          <v-text-field
              hint="Enter your e-mail"
              placeholder="E-mail"
              type="text"
              prepend-inner-icon="mdi-email-outline"
              outlined
              v-model="email"
              :error-messages="emailError"
              @blur="validateEmail"

          >
          </v-text-field>

          <v-text-field
              outlined
              autocomplete="off"
              hint="Enter your password"
              placeholder="Password"
              prepend-inner-icon="mdi-key-variant"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              :error-messages="passwordError"
              @click:append="showPassword = !showPassword"
              @blur="validatePassword"
          />

          <v-text-field
              v-if="showPartnerNumber"
              id="password"
              autocomplete="off"
              hint="Enter your partner number"
              placeholder="partner number"
              outlined
              v-model="partnerNumber"
              :error-messages="partnerNumberError"
              @blur="validatePartnerNumber"
          />

        </v-form>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-0">
      <v-col cols="8">
        <v-btn
            block
            rounded
            x-large
            color="primary"
            class="mb-1"
            :disabled="hasAnyError"
            @click="loginOrCreateAccount"

        >
          {{ buttonName }}
        </v-btn>
      </v-col>
    </v-row>

    <slot name="other-auth"></slot>

    <div
        class="partner-number-wrapper d-flex align-center justify-center mt-6"
        v-if="selectedTab === 'sign-up'"
        @click="showPartnerNumber = true"
    >
      <div>
        Has a partner number ?
      </div>

      <div class="ml-1 link-look-like">
        Click Here
      </div>
    </div>



  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend ({
  name: "LoginSignUpFormComponent",

  data () {
    return {
      selectedTab: 'sign-up',

      email: null,
      password: null,
      partnerNumber: null,

      emailError: '',
      passwordError: '',
      partnerNumberError: '',

      showPartnerNumber: false,

      showPassword: false
    }
  },

  computed: {
    buttonName ():string {
      return this.selectedTab === 'login' ? 'Log In' : 'Create My Account'
    },

    hasAnyError ():boolean {
      if (this.showPartnerNumber) {
        return !this.email || !this.password || !this.partnerNumber
      }
      return !this.email || !this.password
    }
  },

  watch: {
    selectedTab ():void {
      this.resetValues()
    }
  },

  methods: {
    validateEmail ():void {
      if (!this.email) {
        this.emailError = 'E-mail is required'
      } else {
        this.emailError = ''
      }
    },

    validatePassword ():void {
      if (!this.password) {
        this.passwordError = 'Password is required'
      } else {
        this.passwordError = ''
      }
    },

    validatePartnerNumber ():void {
      if(!this.partnerNumber) {
        this.partnerNumberError = 'Partner number is required'
      } else {
        this.partnerNumberError = ''
      }
    },

    resetValues ():void {
      this.password = null
      this.passwordError = ''

      this.email = null
      this.emailError = ''

      this.partnerNumber = null
      this.partnerNumberError = ''

      this.showPartnerNumber = false
    },

    loginOrCreateAccount ():void {
      if (this.selectedTab === 'login') {

        this.$emit('login', {
          email:this.email,
          password: this.password
        })
      } else {
        this.$emit('create-account')
      }
    }
  }
})
</script>

<style scoped lang="scss">

.partner-number-wrapper {
  cursor: pointer;

  .link-look-like {
    color: var(--v-primary-base);
    font-weight: bold;
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
}

</style>