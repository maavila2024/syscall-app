<script setup lang="ts">
import { ref } from 'vue';

/*Location Select*/
const select = ref('United States');
const location = ref(['United States', 'United Kingdom', 'India', 'Russia']);

/*Currency Select*/
const Currencyselect = ref('US Dollar ($)');
const Currency = ref(['US Dollar ($)','United Kingdom (Pound)', 'India (INR)', 'Russia (Ruble)',]);

/*change password*/
const currenypwd = ref('123456789142');
const newpwd = ref('123456789142');
const confirmpwd = ref('123456789142');

/*personal detail*/
const namemodel = ref('Mathew Anderson');
const storemodel = ref('Maxima Studio');
const storemail = ref('info@modernize.com');
const storephone = ref('+91 12345 65478');
const storeaddress = ref('814 Howard Street, 120065, India');

</script>

<template>
    <v-card elevation="10" >
        <v-row class="ma-sm-n2 ma-n1">
            <v-col cols="12" sm="6">
                <v-card elevation="10">
                    <v-card-item>
                        <h5 class="text-h5">Change Profile</h5>
                        <div class="text-subtitle-1 text-medium-emphasis mt-2">Change your profile picture from here</div>
                        <div class="text-center mt-6 mb-6">
                            <v-avatar size="120">
                                <img src="@/assets/images/profile/user-1.jpg" height="120" alt="image" />
                            </v-avatar>
                        </div>
                        <div class="d-flex justify-center">
                            <v-btn color="primary" class="mx-2" flat> Upload</v-btn>
                            <v-btn color="error" class="mx-2" variant="outlined" flat>Reset</v-btn>
                        </div>
                        <div class="text-subtitle-1 text-medium-emphasis text-center my-sm-8 my-6">Allowed JPG, GIF or PNG. Max size of 800K</div>
                    </v-card-item>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6">
                <v-card elevation="10">
                    <v-card-item>
                        <h5 class="text-h5">Change Password</h5>
                        <div class="text-subtitle-1 text-medium-emphasis mt-2">To change your password please confirm here</div>
                        <div class="mt-5">
                            <v-label class="mb-2 font-weight-medium">Current Password</v-label>
                            <v-text-field
                                color="primary"
                                variant="outlined"
                                type="password"
                                v-model="currenypwd"
                            />
                            <v-label class="mb-2 font-weight-medium">New Password</v-label>
                            <v-text-field
                                color="primary"
                                variant="outlined"
                                type="password"
                                v-model="newpwd"
                            />
                            <v-label class="mb-2 font-weight-medium">Confirm Password</v-label>
                            <v-text-field
                                color="primary"
                                variant="outlined"
                                type="password"
                                v-model="confirmpwd"
                                hide-details
                            />
                        </div>
                    </v-card-item>
                </v-card>
            </v-col>
        </v-row>
        <div class="d-flex justify-end mt-5">
            <v-btn size="large" color="primary" class="mr-4" flat>Save</v-btn>
            <v-btn size="large" class="bg-lighterror text-error"  flat>Cancel</v-btn>
        </div>
    </v-card>
</template>
