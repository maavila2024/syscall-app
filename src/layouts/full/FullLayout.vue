<script setup >
import { RouterView } from 'vue-router';
import VerticalSidebarVue from './vertical-sidebar/VerticalSidebar.vue';
import VerticalHeaderVue from './vertical-header/VerticalHeader.vue';
import Customizer from './customizer/Customizer.vue';
import { useCustomizerStore } from '@/stores/customizer';
import { useMeStore } from '@/stores/me';
import { computed, watch } from 'vue';

const customizer = useCustomizerStore();
const meStore = useMeStore();
const isAdmin = computed(() => {
  if (!meStore.user || !meStore.user.teams) return false;
  return meStore.user.teams.some(team => team.is_admin);
});

// Adicionar um watch para garantir que os menus sejam atualizados quando o usuário for carregado
watch(() => meStore.user, (newUser) => {
  if (newUser) {
    // Força reavaliação do computed
    isAdmin.value;
  }
}, { immediate: true });
</script>

<template>
    <!-----RTL LAYOUT------->
    <v-locale-provider  v-if="customizer.setRTLLayout"  rtl >
        <v-app
            :theme="customizer.actTheme"
            :class="[
                customizer.actTheme,
                customizer.mini_sidebar ? 'mini-sidebar' : '',
                customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
                customizer.setBorderCard ? 'cardBordered' : ''
            ]"
        >
            <!---Customizer location left side--->
            <v-navigation-drawer app temporary elevation="10" location="left" v-model="customizer.Customizer_drawer" width="320" class="left-customizer">
            <Customizer />
            </v-navigation-drawer>
            <VerticalSidebarVue v-if="!customizer.setHorizontalLayout" />
            <VerticalHeaderVue v-if="!customizer.setHorizontalLayout" />
            <HorizontalHeader v-if="customizer.setHorizontalLayout" />
            <HorizontalSidebar v-if="customizer.setHorizontalLayout" />

            <v-main>
                <v-container fluid class="page-wrapper pb-sm-15 pb-10">
                    <div :class="customizer.boxed ? 'maxWidth' : ''">
                        <RouterView />
                        <v-btn
                            class="customizer-btn"
                            size="large"
                            icon
                            variant="flat"
                            color="primary"
                            @click.stop="customizer.SET_CUSTOMIZER_DRAWER(!customizer.Customizer_drawer)"
                        >
                            <SettingsIcon />
                        </v-btn>
                    </div>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>

     <!-----LTR LAYOUT------->
    <v-locale-provider  v-else> 
        <v-app
            :theme="customizer.actTheme"
            :class="[
                customizer.actTheme,
                customizer.mini_sidebar ? 'mini-sidebar' : '',
                customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
                customizer.setBorderCard ? 'cardBordered' : ''
            ]"
        >
            <!---Customizer location right side--->
            <v-navigation-drawer app temporary elevation="10" location="right" v-model="customizer.Customizer_drawer" width="320">
                <Customizer />
            </v-navigation-drawer>
            <VerticalSidebarVue v-if="!customizer.setHorizontalLayout" />
            <VerticalHeaderVue v-if="!customizer.setHorizontalLayout" />
            <HorizontalHeader v-if="customizer.setHorizontalLayout" />
            <HorizontalSidebar v-if="customizer.setHorizontalLayout" />

            <v-main>
                <v-container fluid class="page-wrapper pb-sm-15 pb-10">
                    <div :class="customizer.boxed ? 'maxWidth' : ''">
                        <RouterView />
                        <v-btn
                            v-if="isAdmin"
                            class="customizer-btn"
                            size="large"
                            icon
                            variant="flat"
                            color="primary"
                            @click.stop="customizer.SET_CUSTOMIZER_DRAWER(!customizer.Customizer_drawer)"
                        >
                            <SettingsIcon />
                        </v-btn>
                    </div>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>
