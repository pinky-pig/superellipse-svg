<script setup lang="ts">
import { ref } from 'vue'
import '~/utils/RandomBg'

// 随机色色板
const palettes = [
  '031926-468189-77aca2-9dbebb-f4e9cd'.split('-').map(a => `#${a}`),
  'f4faff-dee7e7-b7adcf-4f646f-535657'.split('-').map(a => `#${a}`),
  'acadbc-9b9ece-6665dd-473bf0-000500'.split('-').map(a => `#${a}`),
  '88498f-779fa1-e0cba8-ff6542-564154'.split('-').map(a => `#${a}`),
  '493b2a-593f62-7b6d8d-8499b1-a5c4d4'.split('-').map(a => `#${a}`),
  'c41e3d-7d1128-ff2c55-3c0919-e2294f'.split('-').map(a => `#${a}`),
  '16bac5-5fbff9-efe9f4-171d1c-5863f8'.split('-').map(a => `#${a}`),
  'd9e5d6-00a7e1-eddea4-f7a072-ff9b42'.split('-').map(a => `#${a}`),
]

// 初始化颜色
const initial = [
  { path: 'polygon(2% 86%,4% 78%,26% 37%,24% 65%,11% 20%,15% 58%,3% 20%,2% 41%,9% 14%,18% 7%)', color: '#628395' },
  { path: 'polygon(55% 11%,44% 59%,47% 57%,59% 71%,58% 72%)', color: '#96897b' },
  { path: 'polygon(91% 1%,67% 87%,77% 0%,71% 45%)', color: '#dbad6a' },
]

// 只要改变这个值，就会触发重新渲染
const isRerenderFlag = ref(0)
function printf(e: any) {
  // console.log(e.detail, '重新渲染后的数据')
}

onMounted(() => {
  document.addEventListener('keydown', (event) => {
    if (event.key === ' ')
      isRerenderFlag.value = (isRerenderFlag.value + 1) % 11
  })
})
</script>

<template>
  <random-bg
    :palettes="palettes"
    :initial="initial"
    :rerender="`${isRerenderFlag}`"
    @rendered="printf"
  />
</template>
