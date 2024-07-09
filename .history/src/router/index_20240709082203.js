import { createRouter, createWebHistory } from 'vue-router';
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';
import { useAuthStore } from '@/stores/auth';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/authentication/Error.vue')
        },
        MainRoutes,
        ...AuthRoutes,
    ]
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  await authStore.sanctum()
  next();
})

export default router;

