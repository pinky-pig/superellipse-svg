<script setup lang="ts">
const currentStrokeColor = inject('currentStrokeColor') as Ref<string>
const currentFillColor = inject('currentFillColor') as Ref<string>
const currentCurvatureX = inject('currentCurvatureX') as Ref<number>
const currentCurvatureY = inject('currentCurvatureY') as Ref<number>
const currentRotate = inject('currentRotate') as Ref<number>
const currentStrokeWidth = inject('currentStrokeWidth') as Ref<number>

const strokePresetColor = ['#fff', '#CAE7B9', '#f3de8a', '#eb9486', '#7e7f9a', '#97a7b3', '#F4E8C100', '#000000']
const fillPresetColor = ['#fff', '#e7e6f7', '#e3d0d8', '#aea3b0', '#827081', '#c6d2ed', '#F4E8C100', '#000000']

const isLockedXY = ref(false)
const curvature = ref(currentCurvatureX)
watch(curvature, () => {
  currentCurvatureX.value = curvature.value
  currentCurvatureY.value = curvature.value
})
</script>

<template>
  <div class="option h-full w-320px flex flex-col gap-4">
    <div v-if="isLockedXY">
      <RangeBar
        v-model:value="curvature"
        :min="0.01"
        :max="10"
        :step="0.01"
      >
        <template #title>
          <span class="mb-.25rem select-none text-16px font-bold">曲率</span>
        </template>
      </RangeBar>
    </div>

    <div v-if="!isLockedXY">
      <RangeBar
        v-model:value="currentCurvatureX"
        :min="0.01"
        :max="10"
        :step="0.01"
      >
        <template #title>
          <span class="mb-.25rem select-none text-16px font-bold">曲率 X</span>
        </template>
      </RangeBar>
    </div>
    <div v-if="!isLockedXY">
      <RangeBar
        v-model:value="currentCurvatureY"
        :min="0.01"
        :max="10"
        :step="0.01"
      >
        <template #title>
          <span class="mb-.25rem select-none text-16px font-bold">曲率 Y</span>
        </template>
      </RangeBar>
    </div>

    <div>
      <div class="btn" @click="isLockedXY = !isLockedXY">
        <div v-if="isLockedXY" i-carbon:locked />
        <div v-else i-carbon:unlocked />
      </div>
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
      <RangeBar
        v-model:value="currentStrokeWidth"
        :min="0"
        :max="5"
        :step="0.1"
      >
        <template #title>
          <span class="mb-.25rem select-none text-16px font-bold">描边宽度</span>
        </template>
      </RangeBar>
    </div>
    <div>
      <RangeBar
        v-model:value="currentRotate"
        :min="0"
        :max="360"
        :step="1"
      >
        <template #title>
          <span class="mb-.25rem select-none text-16px font-bold">旋转角度</span>
        </template>
      </RangeBar>
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
