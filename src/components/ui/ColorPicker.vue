<script setup lang="ts">
const props = defineProps({
  presetColor: {
    default: ['#fff', '#CAE7B9', '#f3de8a', '#eb9486', '#7e7f9a', '#97a7b3', '#F4E8C100', '#000000'],
  },
  currentColor: {
    default: '#000000',
  },
})
const emit = defineEmits([
  'update:currentColor',
])

const currentColor = ref(props.currentColor)
watch(currentColor, (val) => {
  emit('update:currentColor', val)
})

const inputRef = ref<HTMLInputElement | null>(null)
function handlePickColor() {
  inputRef.value && (inputRef.value as HTMLElement).click()
}

function setCurrentColor(color: string) {
  currentColor.value = color
}

function isTransparent(color: string) {
  return /^(transparent|rgba?\( *\d{1,3}, *\d{1,3}, *\d{1,3}(?:, *\d+(?:\.\d+)? *)?\)|#[0-9a-fA-F]{8})$/.test(color)
}
</script>

<template>
  <div class="relative z-1 my-10px h-full w-full">
    <div class="grid grid-cols-[1.625rem_20px_1fr] items-center">
      <div
        class="color-picker !h-26px !w-26px"
        :style="isTransparent(currentColor) ? { background: '#fff', backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==)' } : { background: currentColor } "
        @click="handlePickColor"
      />
      <div style="width: 1px; height: 100%; background-color: #d6d6d6; margin: 0px auto;" />
      <div class="flex flex-row gap-8px">
        <div
          v-for="item in presetColor"
          :key="item" class="color-picker"
          :style="isTransparent(item) ? { background: '#fff', backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==)' } : { background: item } "
          @click="setCurrentColor(item)"
        />
      </div>
    </div>
    <input ref="inputRef" v-model="currentColor" class="invisible absolute top-0 -left-55px -z-1" type="color">
  </div>
</template>

<style scoped>
.color-picker {
  height: 24px;
  width: 24px;
  border-radius: calc(0.25rem + 1px);
  box-sizing: border-box;
  cursor: pointer;
}
</style>
