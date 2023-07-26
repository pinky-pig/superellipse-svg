<script setup lang="ts">
const props = defineProps({
  max: {
    default: 10,
  },
  min: {
    default: 0,
  },
  steps: {
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
  <input v-model="value" class="range-bar" type="range">
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
  /*横条的高度*/
}

input[type="range"]::-webkit-slider-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #6967fe;
  box-shadow: 0 0 2px rgba(61, 26, 26, 0.3),
    0 3px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  -webkit-appearance: none;
  border: 0;
}
</style>
