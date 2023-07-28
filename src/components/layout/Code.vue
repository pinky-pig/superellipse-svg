<script setup lang="ts">
import Modal from '~/components/ui/Modal.vue'

import { getResults } from '~/utils/encodeSvg'
import { getSVGCode } from '~/utils/svg'

const $modal = ref<typeof Modal | null>(null)
function open() {
  render()
  $modal.value!.open()
}
function close() {
  $modal.value!.close()
}
defineExpose({
  close,
  open,
})

const cssStyle = ref('unset')
const encoded = ref('')
function render() {
  const svgCode = getSVGCode('superellipse')

  const result = getResults(svgCode)
  cssStyle.value = result.resultCss
  encoded.value = result.encoded
}
</script>

<template>
  <Modal ref="$modal">
    <div class="px-2 md:px-4">
      <div class="flex flex-row items-center justify-between">
        <span class="h-12 font-bold leading-12 text-[#A4B2C1]">SVG Code</span>
        <div class="cursor-pointer font-bold text-[#A4B2C1] hover:bg-white" i-carbon-close @click="close" />
      </div>

      <div
        class="preview-demo h-80px bg-no-repeat"
        :style="cssStyle"
      />

      <TextareaCode
        title="CSS"
        :code="cssStyle"
      />

      <TextareaCode
        title="Encoded"
        :code="encoded"
      />
    </div>
  </Modal>
</template>

<style scoped>

</style>
