<script setup lang="ts">
const props = defineProps({
  max: {
    default: 10,
  },
  min: {
    default: 0,
  },
  step: {
    default: 0.1,
  },
  value: {
    default: 0,
  },
})

const emit = defineEmits([
  'update:value',
])

const value = ref(props.value)
watch(value, (val) => {
  emit('update:value', val)
})
</script>

<template>
  <div class="">
    <div class="flex flex-row">
      <slot name="title" />
      <span class="ml-auto">{{ value }}</span>
    </div>
    <input
      v-model="value"
      :min="min"
      :max="max"
      :step="step"
      class="range-bar"
      type="range"
    >
  </div>
</template>

<style scoped>
.range-bar {
  margin: auto;
  width: 100%;
  background: #a4b2c1;
  outline: none;
  -webkit-appearance: none;
  /*清除系统默认样式*/
  height: 3px;
}

input[type='range']::-webkit-slider-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #6967fe;
  box-shadow:
    0 0 2px rgba(61, 26, 26, 0.3),
    0 3px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  -webkit-appearance: none;
  box-shadow: 0 0 0 0px #6967fe90;
  transition: box-shadow 0.2s ease-out;
}
input[type='range']::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 4px #6967fe90;
}
input[type='range']:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 4px #6967fe90;
}
</style>
