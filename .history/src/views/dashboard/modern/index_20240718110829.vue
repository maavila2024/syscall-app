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
                <!-- Revenue Updates -->
                <v-col cols="12" lg="8" md="12">
                    <RevenueUpdates/>
                </v-col>
                <!-- Yearly Breakup / Monthly Earnings -->
                <v-col cols="12" lg="4" sm="12">
                    <v-row>
                        <v-col cols="12" lg="12" sm="6">
                            <YearlyBreakup/>
                        </v-col>
                        <v-col cols="12" lg="12" sm="6">
                            <MonthlyEarnings/>
                        </v-col>
                    </v-row>
                </v-col>
                <!-- Employee Salary -->    
                <v-col cols="12" lg="4" md="4">
                    <EmployeeSalary/>
                </v-col>
                <!-- Customers / Projects / Usercard -->    
                <v-col cols="12" lg="4" md="4">
                    <v-row>
                        <v-col cols="12" sm="6">
                            <Customers/>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <Projects/>
                        </v-col>
                        <v-col cols="12">
                            <UserCard/>
                        </v-col>
                    </v-row>
                </v-col>
                <!--Best selling products-->    
                <v-col cols="12" lg="4" md="4">
                    <BestSellingProducts/>
                </v-col>
                <!-- Weekly Stats -->
                <v-col cols="12" lg="4" md="4">
                    <WeeklyStats/>
                </v-col>
                <!-- Top Projects -->
                <v-col cols="12" lg="8" md="8">
                    <TopProjects/>
                </v-col>
           </v-row>
        </v-col>    
    </v-row>
</template>