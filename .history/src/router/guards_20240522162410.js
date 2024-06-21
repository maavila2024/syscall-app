import { useMeStore } from "@/stores/me";

export const auth = (to, from, next) => {
    const meStore = useMeStore();
        if (!meStore.isLoggedIn) {
            next({name: 'login'})
        } else {
            next();
        }
    // const meStore = useMeStore()
    //         if (meStore.isLoggedIn) {
    //            next({name: 'dashboard'}) 
    //         } else {
    //             next();
    //         }
}