<template>
  <v-card elevation="10">
    <v-row class="ma-sm-n2 ma-n1">
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
                :error-messages="errors.newPassword"
                hide-details
              />
              <v-label class="mb-2 font-weight-medium">Confirm Password</v-label>
              <v-text-field
                color="primary"
                variant="outlined"
                type="password"
                v-model="confirmPassword"
                :error-messages="errors.confirmPassword"
                hide-details
              />
            </div>
          </v-card-item>
        </v-col>
      </v-row>
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
        </v-col>
      </v-row>
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
import { useForm, useField } from 'vee-validate';
import { object, string, ref as yupRef } from 'yup';

const authStore = useAuthStore();
const meStore = useMeStore();
const feedbackMessage = ref(null);

const schema = object({
  firstName: string().required().label('First Name'),
  currentPassword: string().nullable().label('Current Password'),
  newPassword: string().when('currentPassword', {
    is: (val) => val && val.length > 0,
    then: string().required().min(8).matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, "Password must contain 8 characters, at least one letter and one number").label("New Password"),
    otherwise: string().nullable()
  }),
  confirmPassword: string().when('currentPassword', {
    is: (val) => val && val.length > 0,
    then: string().required().oneOf([yupRef('newPassword'), null], 'Passwords must match').label('Confirm Password'),
    otherwise: string().nullable()
  }),
});

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    firstName: meStore.user.first_name,
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  }
});

const { value: firstName } = useField('firstName');
const { value: currentPassword } = useField('currentPassword');
const { value: newPassword } = useField('newPassword');
const { value: confirmPassword } = useField('confirmPassword');

const save = handleSubmit(async (values) => {
  feedbackMessage.value = null;

  try {
    // Update first name if changed
    if (firstName.value !== meStore.user.first_name) {
      await authStore.updateFirstName(firstName.value);
      meStore.user.first_name = firstName.value;
    }

    // Change password if current password and new password are provided
    if (currentPassword.value && newPassword.value) {
      await authStore.changePassword(currentPassword.value, newPassword.value);
    }

    alert('Profile updated successfully');
  } catch (error) {
    feedbackMessage.value = 'Error updating profile: ' + error.message;
  }
});

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
