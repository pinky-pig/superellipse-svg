<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  code: {
    type: String,
    default: '',
  },
})

const hasCopy = ref(false)

async function handleCopy() {
  hasCopy.value = true

  try {
    await navigator.clipboard.writeText(props.code)
  }
  catch (err) {
    console.error('复制失败：', err)
  }

  setTimeout(() => {
    hasCopy.value = false
  }, 1000)
}
</script>

<template>
  <div class="text-[#A4B2C1]">
    <div class="relative flex flex-row items-center justify-between pr-10px">
      <span class="h-12 select-none font-bold leading-12">
        {{ title }}
      </span>

      <svg
        v-show="hasCopy"
        class="cursor-pointer hover:text-[#A4B2C190]"
        xmlns="http://www.w3.org/2000/svg"
        width="18" height="18"
        viewBox="0 0 24 24"
      >
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="m9 14l2 2l4-4" />
        </g>
      </svg>

      <svg
        v-show="!hasCopy"
        class="cursor-pointer hover:text-[#A4B2C190]"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18" viewBox="0 0 24 24"
        @click="handleCopy"
      >
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        </g>
      </svg>

      <div v-if="hasCopy" class="up-up absolute right-2px select-none text-[12px] -top-5px">
        已拷贝
      </div>
    </div>
    <div class="h-180px rounded-[0.8rem]">
      <textarea
        class="h-180px w-full resize-none rounded-md bg-[#1d2026] p-2 outline-none"
        :value="code"
      />
    </div>
  </div>
</template>

<style scoped>
.up-up {
  animation: riseAnimation .3s both;
}
@keyframes riseAnimation {
  0% {
    opacity: 0;
    transform: translateY(50%)
  }
  100% {
    opacity: 1;
    transform: none
  }
}
</style>
