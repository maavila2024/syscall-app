<template>
  <span v-if="shouldShow" class="idle-timer red">
    Sessão expira em: {{ minutes }}:{{ seconds }}
  </span>
</template>

<script setup>
import { useIdle } from '@vueuse/core';
import { useMeStore } from '@/stores/me';
import { ref, computed, watch, onMounted } from 'vue';

const meStore = useMeStore();
const SESSION_LIMIT = 30 * 60 * 1000; // 30 minutos em ms
const remaining = ref(SESSION_LIMIT);

const { idle } = useIdle(SESSION_LIMIT);
let interval = null;

// Exibir apenas para os IDs: 24, 27, 45
const shouldShow = computed(() =>
  [24, 27, 45].includes(meStore.user?.id)
);

const minutes = computed(() =>
  String(Math.floor(remaining.value / 60000)).padStart(2, '0')
);
const seconds = computed(() =>
  String(Math.floor((remaining.value % 60000) / 1000)).padStart(2, '0')
);

const startCountdown = () => {
  clearInterval(interval);
  remaining.value = SESSION_LIMIT;

  interval = setInterval(() => {
    remaining.value -= 1000;
    if (remaining.value <= 0) {
      clearInterval(interval);
    }
  }, 1000);
};

watch(idle, (isIdle) => {
  if (!isIdle) startCountdown();
});

onMounted(() => {
  if (!idle.value) startCountdown();
});
</script>

<style scoped>
.idle-timer {
  margin-right: 12px;
  font-weight: bold;
 /* animation: blink 1.5s infinite; */
  font-size: 13px;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
.red {
  color: #f44336;
}
</style> 