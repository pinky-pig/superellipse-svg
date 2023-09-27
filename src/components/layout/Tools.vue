<script setup lang="ts">
import { t } from '~/i18n'

const emit = defineEmits([
  'export-svg',
  'copy-svg',
  'preview-css',
  'preview-demo',
])

interface IBtn {
  label: string
  emit: 'export-svg' | 'copy-svg' | 'preview-css' | 'preview-demo'
}
const btns = computed<IBtn[]>(() => [
  {
    label: t('tool.export'),
    emit: 'export-svg',
  },
  {
    label: t('tool.copy'),
    emit: 'copy-svg',
  },
  {
    label: t('tool.preview'),
    emit: 'preview-css',
  },
  {
    label: t('tool.demo'),
    emit: 'preview-demo',
  },
])
</script>

<template>
  <div class="mb-4 h-80px w-full flex flex-row flex-wrap items-center justify-center gap-4 text-14px">
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
