<script setup lang="ts">
defineProps({
  info: String,
  type: String,
})
const visible = ref(false)

function close() {
  const animateOutDom1 = document.querySelectorAll('.alert-container')[0] as HTMLElement
  animateOutDom1.classList.remove('scale-up-center')
  animateOutDom1.classList.add('scale-down-center')
  animateOutDom1.classList.add('fade-out')

  setTimeout(() => {
    visible.value = false
  }, 300)
}

function open() {
  visible.value = true

  setTimeout(() => {
    close()
  }, 1000)
}

defineExpose({
  open,
})
</script>

<template>
  <div v-if="visible" class="scale-up-center alert-container pointer-events-none fixed h-full w-full flex items-center justify-center">
    <div class="h-64px w-200px flex flex-row items-center justify-center gap-2 rounded-md bg-white">
      <div i-fluent-emoji:check-mark />
      <span class="font-bold">{{ info }}</span>
    </div>
  </div>
</template>

<style scoped>
.scale-up-center{
  animation:scale-up-center 0.2s;
}
@keyframes scale-up-center{
  0%{
    transform:scale(.5)
  }
  100%{
    transform:scale(1)
  }
}

.scale-down-center{
  animation:scale-down-center 0.2s forwards;
}
@keyframes scale-down-center{
  0%{
    transform:scale(1);
  }
  100%{
    transform:scale(.5);
  }
}

.fade-out{
  animation-name: fade-out;
  animation-duration: 0.2s;
  animation-fill-mode: forwards; /* 动画结束后停留在最终状态 */
}
@keyframes fade-out{
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
</style>
