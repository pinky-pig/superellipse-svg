<script setup lang="ts">
const strokePresetColor = ['#fff', '#CAE7B9', '#f3de8a', '#eb9486', '#7e7f9a', '#97a7b3', '#F4E8C100', '#000000']
const fillPresetColor = ['#fff', '#e7e6f7', '#e3d0d8', '#aea3b0', '#827081', '#c6d2ed', '#F4E8C100', '#000000']

const currentStrokeColor = ref('#000000')
const currentFillColor = ref('#00000000')
</script>

<template>
  <div class="option h-full w-320px flex flex-col gap-4">
    <div>
      <span class="mb-.25rem block text-16px font-bold">曲率</span>
      <RangeBar :min="0" :max="10" :step="0.1" />
    </div>
    <div>
      <span class="mb-.25rem block text-16px font-bold">描边</span>
      <ColorPicker
        v-model:current-color="currentStrokeColor"
        :preset-color="strokePresetColor"
      />
    </div>
    <div>
      <span class="mb-.25rem block text-16px font-bold">背景</span>
      <ColorPicker
        v-model:current-color="currentFillColor"
        :preset-color="fillPresetColor"
      />
    </div>
    <div>
      <span class="mb-.25rem block text-16px font-bold">描边宽度</span>
      <RangeBar />
    </div>
    <div>
      <span class="mb-.25rem block text-16px font-bold">旋转角度</span>
      <RangeBar />
    </div>
  </div>
</template>

<style scoped>
.option{
  box-sizing: border-box;
  overflow-y: auto;
  padding: 0.75rem;
  color: #a4b2c1;
  border: 1px solid #4e5566;
  border-radius: 0.75rem;
}
</style>
