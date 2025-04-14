<script setup>
import { computed } from "vue";
import LogoLight from "./LogoLight.vue";
import LogoDark from "./LogoDark.vue";
import { useCustomizerStore } from "../../../stores/customizer";
import logoImage from '@/assets/images/syscall/principal_dcontrol.jpeg';

const customizer = useCustomizerStore();

//const dark = ref(false);
const dark = computed(() => {
  if (
    customizer.actTheme === "DARK_BLUE_THEME" ||
    customizer.actTheme === "DARK_AQUA_THEME" ||
    customizer.actTheme === "DARK_ORANGE_THEME" ||
    customizer.actTheme === "DARK_PURPLE_THEME" ||
    customizer.actTheme === "DARK_GREEN_THEME" ||
    customizer.actTheme === "DARK_CYAN_THEME"
  ) {
    return true;
  } else {
    return false;
  }
});


</script>
<template>
  <div class="logo-wrapper">
    <v-img
      :src="logoImage"
      class="position-relative d-none d-lg-flex"
      max-width="180"
      contain
      style="border-radius: 10px;"
    />
  </div>
</template>

<style scoped>
.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}
</style>

