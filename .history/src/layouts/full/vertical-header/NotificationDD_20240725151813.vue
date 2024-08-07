<template>
    <v-menu :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-btn icon variant="text" color="primary" class="custom-hover-primary" v-bind="props">
                <v-badge dot color="primary">
                    <BellRingingIcon stroke-width="1.5" size="22" />
                </v-badge>
            </v-btn>
        </template>
        <v-sheet rounded="md" width="360" elevation="10">
            <div class="px-8 pb-4 pt-6">
                <div class="d-flex align-center justify-space-between">
                    <h6 class="text-h5">Notifications</h6>
                    <v-chip color="primary" variant="flat" size="small" class="text-white">{{ notifications.length }} New</v-chip>
                </div>
            </div>
            <perfect-scrollbar style="height: 400px">
                <v-list class="py-0 theme-list" lines="two">
                    <v-list-item v-for="item in notifications" :key="item.title" :value="item" active-color="primary" class="py-4 px-8">
                        <template v-slot:prepend>
                            <v-avatar size="48" class="mr-3">
                                <v-img :src="item.avatar" width="48" :alt="item.avatar" />
                            </v-avatar>
                        </template>
                        <div>
                            <h6 class="text-subtitle-1 font-weight-bold mb-1">{{ item.title }}</h6>
                        </div>
                        <p class="text-subtitle-1 font-weight-regular textSecondary">{{ item.subtitle }}</p>
                    </v-list-item>
                    <v-divider></v-divider>
                </v-list>
            </perfect-scrollbar>
            <div class="py-4 px-6 text-center">
                <v-btn color="primary" variant="outlined" block>See all Notifications</v-btn>
            </div>
        </v-sheet>
    </v-menu>
</template>

<script>
import { onMounted } from 'vue';
import { useMeStore } from '@/stores/me';
import { useNotificationStore } from '@/stores/notifications';

export default {
    setup() {
        const meStore = useMeStore();
        const notificationStore = useNotificationStore();

        onMounted(() => {
            Echo.private('App.Models.User.' + meStore.user.id)
                .notification((notification) => {
                    notificationStore.addNotification(notification);
                    // Mostre a notificação na tela
                    alert('Nova interação criada para sua task');
                });
        });

        return {
            notifications: notificationStore.notifications,
        };
    }
};
</script>
