import { Module, MutationTree, ActionTree, GetterTree } from "vuex"

import { AuthService } from "@/services/auth.service"

interface User {
    id: string
    name: string
    token: string
}

interface AuthState  {
    user: User | string | null
}

export interface UserPayload {
    email: string,
    password: string,
}

const state: AuthState =  {
    user: JSON.parse(localStorage.getItem('current_user') || 'null') || ''
}


const mutations: MutationTree<AuthState> = {
    setUser (state: AuthState , user: User) {
        state.user = user
    },
}

const actions: ActionTree<AuthState, any> = {
    login ({commit}, user: UserPayload) {
        return AuthService.login(user).then((data => {
            commit('setUser', data)
        })).catch((error) => {
            throw error
        })

    }
}

const getters: GetterTree<AuthState, any> = {
    getCurrentUser (state: AuthState ) {
        return state.user
    }
}

 const authModule: Module<AuthState, any> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default authModule