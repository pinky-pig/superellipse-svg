<script setup lang="ts">
import Code from '~/components/layout/Code.vue'
import Demo from '~/components/layout/Demo.vue'
import Alert from '~/components/ui/Alert.vue'
import Background from '~/components/ui/Background.vue'
import { showConfetti } from '~/utils/confetti'
import { downloadSVG, getSVGCode } from '~/utils/svg'
import { t } from '~/i18n'

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

    alertInfo.value = t('other.alertTextSuccess')
    $Alert.value!.open()
  }
  catch (err) {
    alertInfo.value = t('other.alertTextFailed')
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

const isRerenderFlag = ref(0)
function handleChangeBg() {
  isRerenderFlag.value = (isRerenderFlag.value + 1) % 11
}
</script>

<template>
  <Background v-model="isRerenderFlag" />
  <ConfettiCanvas />

  <Suspense>
    <div class="fixed bottom-0 left-0 right-0 top-0 h-full w-full flex flex-col overflow-x-hidden overflow-y-auto">
      <Header />
      <div class="main-content-layout flex flex-1">
        <div class="flex flex-1 flex-col items-center justify-center">
          <div
            class="h-336px w-336px flex-shrink-0 cursor-pointer"
          >
            <Preview @click="handleChangeBg" />
          </div>
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

      <!-- <div class="footer fixed bottom-0 w-screen flex flex-row">
        <Footer class="flex-1" />
        <div class="footer-placeholder h-2 w-352px flex-shrink-0 flex-grow-0" />
      </div> -->
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
  .footer{
    position: unset;
  }
  .footer .footer-placeholder{
    height: 0 !important;
    width: 0 !important;
  }

}
</style>
