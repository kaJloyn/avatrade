import LoginSignUpView from "@/views/LoginSignUpView.vue"
import DepositView from "@/views/DepositView.vue"

import TheAuthLayoutWrap from "@/layouts/TheAuthLayoutWrap.vue"

import ErrorView from "@/views/ErrorView.vue"
import guest from "@/custom-router/guards/guest"
import auth from "@/custom-router/guards/auth"

export const routes = [
    {
        path: '/login',
        component: TheAuthLayoutWrap,
        children: [
            {
                path: '',
                component: LoginSignUpView,
            }
        ],
        guards: [guest]
    },

    {
        path: '/deposit',
        component: TheAuthLayoutWrap,
        children: [
            {
                path: '',
                component: DepositView,
            }
        ],
        guards: [auth]
    },

    {
        path: '/',
        redirect: '/deposit',
        component: DepositView,
        guards: [auth]
    },
    {
        path: '*',
        component: ErrorView,
    }
]