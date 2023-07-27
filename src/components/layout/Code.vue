<script setup lang="ts">
import Modal from '~/components/ui/Modal.vue'
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

const code = ref('')
function render() {
  code.value = getSVGCode('superellipse')
}
</script>

<template>
  <Modal ref="$modal">
    <div class="px-4">
      <div class="flex flex-row items-center justify-between">
        <span class="h-16 font-bold leading-16 text-[#A4B2C1]">SVG Code</span>
        <div class="cursor-pointer font-bold text-[#A4B2C1] hover:bg-white" i-carbon-close @click="close" />
      </div>

      <div class="h-full overflow-auto rounded-[0.8rem] bg-[#1d2026] py-4">
        {{ code }}
      </div>
    </div>
  </Modal>
</template>

<style scoped>

</style>
