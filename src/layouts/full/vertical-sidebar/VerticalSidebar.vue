<script setup>
import { ref, shallowRef, computed } from 'vue';
import { useCustomizerStore } from '@/stores/customizer';
import sidebarItems from './sidebarItem';

import NavGroup from './NavGroup/index.vue';
import NavItem from './NavItem/index.vue';
import NavCollapse from './NavCollapse/NavCollapse.vue';
import Profile from './profile/Profile.vue';
import Logo from '../logo/Logo.vue';
import RtlLogo from '../logo/RtlLogo.vue';
import TeamMenu from '@/layouts/full/team-menu/TeamMenu.vue';
import { useMeStore } from '@/stores/me';

const customizer = useCustomizerStore();
const sidebarMenu = shallowRef(sidebarItems);
const meStore = useMeStore();
const isAdmin = computed(() => {
  return meStore.user?.teams?.some(team => team.is_admin);
});

</script>

<template>
     
    <v-navigation-drawer
        left
        v-model="customizer.Sidebar_drawer"
        elevation="0"
        rail-width="75"
        mobile-breakpoint="960"
        app
        class="leftSidebar"
        :rail="customizer.mini_sidebar"
        expand-on-hover width="270"
    >
        <!---Logo part -->
        <v-locale-provider  v-if="customizer.setRTLLayout"  rtl >
        <div class="pa-5">
            <RtlLogo />
        </div>
        </v-locale-provider>
        <v-locale-provider  v-else>
        <div class="pa-5" >
            <Logo />
           <!-- <TeamMenu />   -->
        </div>
        </v-locale-provider>

        
        <!-- ---------------------------------------------- -->
        <!---Navigation -->
        <!-- ---------------------------------------------- -->
        
        <perfect-scrollbar class="scrollnavbar">
            <v-list class="pa-6">
                <!---Menu Loop -->
                <template v-for="(item, i) in sidebarMenu" :key="i">
                    <template v-if="!item.adminOnly || (item.adminOnly && isAdmin)">
                        <!---Item Sub Header -->
                        <NavGroup :item="item" v-if="item.header" />
                        <!---If Has Child -->
                        <NavCollapse class="leftPadding" :item="item" :level="0" v-else-if="item.children" />
                        <!---Single Item-->
                        <NavItem :item="item" v-else class="leftPadding" />
                        <!---End Single Item-->
                    </template>
                </template>
            </v-list>
            <div class="pa-6 userbottom">
                <Profile />
            </div>
        </perfect-scrollbar>
    </v-navigation-drawer>
</template>
