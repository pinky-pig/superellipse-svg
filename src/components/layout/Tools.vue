<script setup lang="ts">
const emit = defineEmits([
  'export-svg',
  'preview-svg',
  'preview-css-mask',
])

interface IBtn {
  label: string
  emit: 'export-svg' | 'preview-svg' | 'preview-css-mask'
}
const btns = ref<IBtn[]>([
  {
    label: '导出 SVG',
    emit: 'export-svg',
  },
  {
    label: '预览 SVG',
    emit: 'preview-svg',
  },
  {
    label: '预览 CSS',
    emit: 'preview-css-mask',
  },
])
</script>

<template>
  <div class="h-80px w-full flex flex-row items-center justify-center gap-4 text-14px">
    <div v-for="(item, index) in btns" :key="index">
      <button @click="emit(item.emit)">
        {{ item.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
button{
  position: relative;
  min-width: 6rem;
  height: 2.5rem;
  padding: 0 1rem;
  color: #a4b2c1;
  font-weight: 700;
  background: #2a2f37;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: color .2s;
  user-select: none;
  border: 1px solid #4e5566;
}
button:hover{
  color: #c2ccd6;
}
</style>
