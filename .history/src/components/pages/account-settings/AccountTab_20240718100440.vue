<template>
    <v-card elevation="10">
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
                  v-model="currentPassword"
                  hide-details
                />
                <v-label class="mb-2 font-weight-medium">New Password</v-label>
                <v-text-field
                  color="primary"
                  variant="outlined"
                  type="password"
                  v-model="newPassword"
                  hide-details
                />
                <v-label class="mb-2 font-weight-medium">Confirm Password</v-label>
                <v-text-field
                  color="primary"
                  variant="outlined"
                  type="password"
                  v-model="confirmPassword"
                  hide-details
                />
              </div>
            </v-card-item>
          </v-card>
          <v-col cols="12">
          <v-card elevation="10">
            <v-card-item>
              <h5 class="text-h5">Personal Details</h5>
              <div class="text-subtitle-1 text-medium-emphasis mt-2">To change your personal detail, edit and save from here</div>
              <div class="mt-5">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-label class="mb-2 font-weight-medium">Your Name</v-label>
                    <v-text-field
                      color="primary"
                      variant="outlined"
                      type="text"
                      v-model="firstName"
                      hide-details
                    />
                  </v-col>
                </v-row>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
        </v-col>
        
      </v-row>
      <div class="d-flex justify-end mt-5">
        <v-btn size="large" color="primary" class="mr-4" flat @click="save">Save</v-btn>
        <v-btn size="large" class="bg-lighterror text-error" flat @click="cancel">Cancel</v-btn>
      </div>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '@/stores/auth';
  import { useMeStore } from '@/stores/me';
  
  const authStore = useAuthStore();
  const meStore = useMeStore();
  
  const firstName = ref(meStore.user.first_name);
  const currentPassword = ref('');
  const newPassword = ref('');
  const confirmPassword = ref('');
  
  const save = async () => {
    if (newPassword.value !== confirmPassword.value) {
      alert('New password and confirm password do not match');
      return;
    }
  
    try {
      // Update first name
      await meStore.updateFirstName(firstName.value);
      // Update password
      if (currentPassword.value && newPassword.value) {
        await authStore.changePassword(currentPassword.value, newPassword.value);
      }
      alert('Profile updated successfully');
    } catch (error) {
      alert('Error updating profile: ' + error.message);
    }
  };
  
  const cancel = () => {
    firstName.value = meStore.user.first_name;
    currentPassword.value = '';
    newPassword.value = '';
    confirmPassword.value = '';
  };
  </script>
  
  <style scoped>
  .bold-label .v-label {
    font-weight: bold !important;
    color: white !important;
    font-size: 1.2rem !important;
  }
  </style>
  