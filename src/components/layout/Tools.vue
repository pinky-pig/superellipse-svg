<script setup lang="ts">
const emit = defineEmits([
  'export-svg',
  'copy-svg',
  'preview-css',
])

interface IBtn {
  label: string
  emit: 'export-svg' | 'copy-svg' | 'preview-css'
}
const btns = ref<IBtn[]>([
  {
    label: '导出 SVG',
    emit: 'export-svg',
  },
  {
    label: '拷贝 SVG',
    emit: 'copy-svg',
  },
  {
    label: '预览 CSS',
    emit: 'preview-css',
  },
])
</script>

<template>
  <div class="h-80px w-full flex flex-row items-center justify-center gap-4 text-14px">
    <div v-for="(item, index) in btns" :key="index">
      <button
        class="btn"
        @click="emit(item.emit)"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/* button{
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
} */
</style>
