<script setup>
import { computed } from "vue";
import LogoLight from "./LogoLight.vue";
import LogoDark from "./LogoDark.vue";
// import { useCustomizerStore } from "../../../stores/customizer";

const customizer = useCustomizerStore();

//const dark = ref(false);
// const dark = computed(() => {
//   if (
//     customizer.actTheme === "DARK_BLUE_THEME" ||
//     customizer.actTheme === "DARK_AQUA_THEME" ||
//     customizer.actTheme === "DARK_ORANGE_THEME" ||
//     customizer.actTheme === "DARK_PURPLE_THEME" ||
//     customizer.actTheme === "DARK_GREEN_THEME" ||
//     customizer.actTheme === "DARK_CYAN_THEME"
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// });


</script>
<template>
  <div class="">
      <img src="@/assets/images/syscall/logo_syscall.jpg" class="position-relative d-none d-lg-flex logo-size"
          alt="login-background" style="border-radius: 10px;"/>
  </div>
</template>

