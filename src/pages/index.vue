<script setup lang="ts">
const currentStrokeColor = ref('#7e7f9a')
const currentFillColor = ref('#7e7f9a')
const currentCurvatureX = ref(3)
const currentCurvatureY = ref(3)
const currentRotate = ref(0)
const currentStrokeWidth = ref(0.5)

provide('currentStrokeColor', currentStrokeColor)
provide('currentFillColor', currentFillColor)
provide('currentCurvatureX', currentCurvatureX)
provide('currentCurvatureY', currentCurvatureY)
provide('currentRotate', currentRotate)
provide('currentStrokeWidth', currentStrokeWidth)
</script>

<template>
  <Background />
  <Suspense>
    <div class="fixed bottom-0 left-0 right-0 top-0 h-full w-full flex flex-col overflow-auto">
      <Header />
      <div class="flex flex-1">
        <div class="flex flex-1 flex-col items-center justify-center">
          <Preview
            class="h-280px w-280px flex-shrink-0"
          />
          <Tools
            class="mt-5rem"
          />
        </div>
        <div class="p-4">
          <Options />
        </div>
      </div>
    </div>
  </Suspense>
</template>

<style scoped>

</style>
