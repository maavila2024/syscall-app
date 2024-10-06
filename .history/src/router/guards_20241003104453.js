import { useMeStore } from "@/stores/me";
import { useAuthStore } from "@/stores/auth"; 

export const auth = (to, from, next) => {
  const meStore = useMeStore();
  const authStore = useAuthStore();

  if (authStore.sessionExpired) {
    next({ name: 'login' });
  } else if (!meStore.isLoggedIn) {
    next({ name: 'login' })
  } else {
    next();
  }
}

export const redirectIfAuthenticated = (to, from, next) => {
  const meStore = useMeStore()

  if (meStore.isLoggedIn) {
    next({ name: 'dashboard' })
  } else {
    next()
  }
}

export const checkIfTokenExists = (to, from, next) => {
  if (!to.query?.token) {
    next({name: 'login'})
  } else {
    next();
  }
}
