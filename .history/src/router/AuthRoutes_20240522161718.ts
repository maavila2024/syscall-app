import { useMeStore } from '@/stores/me'

export default [
    {
        path: '/login',
        component: () => import('@/layouts/blank/BlankLayout.vue'),
        // meta: {
        //     requiresAuth: false
        // },
        beforeEnter: (to, from, next) => {
            const meStore = useMeStore()
            if (meStore.isLoggedIn) {
               next({name: 'dashboard'}) 
            } else {
                next();
            }
        }
        children: [
            {
                name: 'login',
                path: '',
                component: () => import('@/views/authentication/SideLogin.vue')
            },
        ]
    },
    {
        path: '/register',
        component: () => import('@/layouts/blank/BlankLayout.vue'),
        children: [
            {
                name: 'register',
                path: '',
                component: () => import('@/views/authentication/SideRegister.vue')
            },
        ]
    },
    {
        path: '/forgot',
        component: () => import('@/layouts/blank/BlankLayout.vue'),
        children: [
            {
                name: 'forgot-password',
                path: '',
                component: () => import('@/views/authentication/SideForgotPassword.vue')
            },
        ]
    },
    
    //         {
    //             name: 'Boxed Login',
    //             path: '/auth/login2',
    //             component: () => import('@/views/authentication/BoxedLogin.vue')
    //         },
    //         {
    //             name: 'Side Register',
    //             path: '/auth/register',
    //             component: () => import('@/views/authentication/SideRegister.vue')
    //         },
    //         {
    //             name: 'Boxed Register',
    //             path: '/auth/register2',
    //             component: () => import('@/views/authentication/BoxedRegister.vue')
    //         },
    //         {
    //             name: 'Side Forgot Password',
    //             path: '/auth/forgot-password',
    //             component: () => import('@/views/authentication/SideForgotPassword.vue')
    //         },
    //         {
    //             name: 'Boxed Forgot Password',
    //             path: '/auth/forgot-password2',
    //             component: () => import('@/views/authentication/BoxedForgotPassword.vue')
    //         },
    //         {
    //             name: 'Side Two Steps',
    //             path: '/auth/two-step',
    //             component: () => import('@/views/authentication/SideTwoStep.vue')
    //         },
    //         {
    //             name: 'Boxed Two Steps',
    //             path: '/auth/two-step2',
    //             component: () => import('@/views/authentication/BoxedTwoStep.vue')
    //         },
    //         {
    //             name: 'Error',
    //             path: '/auth/404',
    //             component: () => import('@/views/authentication/Error.vue')
    //         },
    //         {
    //             name: 'Maintenance',
    //             path: '/auth/maintenance',
    //             component: () => import('@/views/authentication/Maintenance.vue')
    //         }
    //     ]
    // }
]

// export default AuthRoutes;
