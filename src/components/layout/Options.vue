<script setup lang="ts">

</script>

<template>
  <div class="option h-full w-320px flex flex-col gap-3">
    <div>
      <span class="mb-.25rem block text-16px font-bold">曲率</span>
      <input type="range" min="0" max="10" step="0.1">
    </div>
    <div>
      <span class="mb-.25rem block text-16px font-bold">描边</span>
      <ColorPicker />
    </div>
    <div>
      <span class="mb-.25rem block text-16px font-bold">背景</span>
      <ColorPicker />
    </div>
    <div>
      <span class="mb-.25rem block text-16px font-bold">描边宽度</span>
      <input type="range">
    </div>
    <div>
      <span class="mb-.25rem block text-16px font-bold">旋转角度</span>
      <input type="range">
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
