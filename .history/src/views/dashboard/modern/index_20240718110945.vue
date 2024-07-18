<script setup >
import Logo from '@/layouts/full/logo/Logo.vue';
/* Login form */
import LoginForm from '@/components/auth/LoginForm.vue';
import Topcards from "../dashboardComponents/modern/TopCards.vue";
import TopProjects from "../dashboardComponents/modern/TopProjects.vue";

</script>
<!--
<template>
    <div class="pa-3">
                <div class="">
                    <img src="@/assets/images/syscall/principal_syscall.jpg" class="position-relative d-none d-lg-flex"
                        alt="login-background" />
                </div>
    </div> 
    
</template> -->
<template>
    <v-row>
        <!-- Top cards -->
        <v-col cols="12">
            <Topcards/>
        </v-col> 
         <v-col cols="12">
           <v-row>
                <!-- Top Projects -->
                <v-col cols="12" lg="8" md="8">
                    <TopProjects/>
                </v-col>
           </v-row>
        </v-col>    
    </v-row>
</template>