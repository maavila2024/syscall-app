import { auth } from '@/router/guards';

export default {
    path: '/',
    // meta: {
    //     requiresAuth: true
    // },
    // redirect: '/main',
    component: () => import('@/layouts/full/FullLayout.vue'),
    beforeEnter: auth,
    children: [
        {
            name: 'dashboard',
            path: '/dashboard',
            component: () => import('@/views/dashboard/modern/index.vue')
        },
        {
            name: 'teams',
            path: '/apps/teams',
            component: () => import('@/views/apps/teams/index.vue')
        },
        {
            name: 'priorities',
            path: '/apps/priorities',
            component: () => import('@/views/apps/priorities/index.vue')
        },
        {
            name: 'tasks',
            path: '/apps/tasks',
            component: () => import('@/views/apps/tasks/index.vue')
        },
        {
            name: 'tasksStatus',
            path: '/apps/tasksStatus',
            component: () => import('@/views/apps/tasksStatus/index.vue')
        },
    ]
};

// export default MainRoutes;
