<script setup lang="ts">
import Code from '~/components/layout/Code.vue'
import Demo from '~/components/layout/Demo.vue'
import Alert from '~/components/ui/Alert.vue'
import Background from '~/components/ui/Background.vue'
import { showConfetti } from '~/utils/confetti'
import { downloadSVG, getSVGCode } from '~/utils/svg'

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

function exportSvg() {
  downloadSVG('superellipse', 'superellipse.svg')
}

const $Alert = ref<typeof Alert | null>(null)
const alertInfo = ref('')

const throttledFn = useThrottleFn(async () => {
  const code = getSVGCode('superellipse')

  try {
    await navigator.clipboard.writeText(code)
    showConfetti()

    alertInfo.value = '已拷贝到剪切板'
    $Alert.value!.open()
  }
  catch (err) {
    alertInfo.value = '拷贝失败'
    console.error('复制失败：', err)
  }
}, 3000)
async function copySVG() {
  throttledFn ()
}

const $Code = ref<typeof Code | null>(null)
function previewCSS() {
  $Code.value!.open()
}
const $Demo = ref<typeof Demo | null>(null)
function previewDemo() {
  $Demo.value!.open()
}

// 点击 Preview 更换背景色
const $background = ref<typeof Background | null>(null)
function test() {
  if ($background.value)
    $background.value.isRerenderFlag = ($background.value.isRerenderFlag + 1) % 11
}
</script>

<template>
  <Background ref="$background" />
  <ConfettiCanvas />

  <Suspense>
    <div class="fixed bottom-0 left-0 right-0 top-0 h-full w-full flex flex-col overflow-auto">
      <Header />
      <div class="main-content-layout flex flex-1">
        <div class="flex flex-1 flex-col items-center justify-center">
          <Preview
            class="h-336px w-336px flex-shrink-0 cursor-pointer"
            @click="test"
          />
          <Tools
            class="mt-2rem md:mt-5rem"
            @export-svg="exportSvg"
            @copy-svg="copySVG"
            @preview-css="previewCSS"
            @preview-demo="previewDemo"
          />
        </div>
        <div class="p-4">
          <Options />
        </div>
      </div>
    </div>
  </Suspense>

  <Demo ref="$Demo" />
  <Code ref="$Code" />
  <Alert ref="$Alert" :info="alertInfo" />
</template>

<style scoped>
.main-content-layout {
  flex-direction: row;
}
@media screen and (max-width: 768px) {
  .main-content-layout {
    flex-direction: column;
    align-items: center;
  }
}
</style>
