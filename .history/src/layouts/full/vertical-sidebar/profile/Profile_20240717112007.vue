<script setup>
import { useAuthStore } from '@/stores/auth';
import { useMeStore } from "@/stores/me";

const meStore = useMeStore()
const authStore = useAuthStore();
</script>

<template>
    <v-sheet rounded="md" color="lightsecondary" class="px-4 py-3 ExtraBox">
        <div class="d-flex align-center hide-menu">
            <v-avatar size="40">
                <img src="@/assets/images/profile/user-1.jpg" alt="user" height="40" />
            </v-avatar>
            <div class="ml-4">
                <h4 class="mb-n1 text-h6 textPrimary">{{  meStore.user.first_name }}</h4>
                <span class="text-subtitle-2 textSecondary"></span>
            </div>
            <div class="ml-auto">
                <v-btn variant="text" icon rounded="md" color="secondary" :to="{ name: 'logout' }">
                    <PowerIcon />

                    <v-tooltip activator="parent" location="top">Logout</v-tooltip>
                </v-btn>
            </div>
        </div>
    </v-sheet>
</template>
<style lang="scss">
.ExtraBox {
    position: relative;
    overflow: hidden;
}
.line-height-none {
    line-height: normal;
}
</style>
