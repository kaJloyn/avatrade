<template>
    <login-sign-up-form-component
        @login="login"
        @create-account="createAccount"
    >
      <template #title>
        <v-row>
          <v-col class="primary-color text-center">
      <span>
        Sign-Up,
      </span>
            <strong>
              It's Free!
            </strong>
          </v-col>
        </v-row>
      </template>

      <template #other-auth>

        <div class="d-flex align-center">
          <v-divider class="fat-border"/>
          <span class="ma-6 text--secondary"> Or </span>
          <v-divider class="fat-border"/>
        </div>

        <div class="d-flex align-center justify-space-around">
          <v-icon size="32">
            mdi mdi-google
          </v-icon>

          <v-icon size="36">
            mdi mdi-facebook
          </v-icon>

          <v-icon size="36">
            mdi mdi-apple
          </v-icon>
        </div>

        <div class="mt-6 text--secondary text-center text-small">
          By creating an account you agree to the privacy policy ad to receive economic and marketing communications from
          AvaTrade. You can remove yourself from the mailing list at anytime.
        </div>

      </template>

    </login-sign-up-form-component>

</template>

<script lang="ts">
import Vue from 'vue'
import LoginSignUpFormComponent from "@/components/LoginSignUpFormComponent.vue"
import { UserPayload } from "@/store/modules/auth"

export default Vue.extend({
  name: "LoginSignUpView",

  components: { LoginSignUpFormComponent },

  data() {
    return {
      selectedTab: 'sign-up',
    }
  },

  computed: {
    buttonName(): string {
      return this.selectedTab === 'login' ? 'Log In' : 'Create My Account'
    }
  },

  methods: {
    async login (user: UserPayload):Promise<void> {
      try {
        await this.$store.dispatch('auth/login', user)
        this.$root.$customRouter.push('/deposit')
      } catch (e) {
        console.log(e)
      }

    },

    createAccount (): void {
      console.log('create account')
    }
  }
})
</script>

<style scoped>

</style>