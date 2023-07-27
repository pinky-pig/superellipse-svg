<script setup lang="ts">
const currentStrokeColor = inject('currentStrokeColor') as Ref<string>
const currentFillColor = inject('currentFillColor') as Ref<string>
const currentCurvatureX = inject('currentCurvatureX') as Ref<number>
const currentCurvatureY = inject('currentCurvatureY') as Ref<number>
const currentRotate = inject('currentRotate') as Ref<number>
const currentStrokeWidth = inject('currentStrokeWidth') as Ref<number>

// 1. 路径及其视口大小
const pathString = ref('')
const $path = ref<SVGPathElement | null>(null)
const svgViewbox = ref({ x: 0, y: 0, width: 200, height: 200 })

// 2. 绘制超椭圆的路径
pathString.value = await getSuperellipsePath(50, 50, currentCurvatureX.value, currentCurvatureY.value, 360)

// 3. 计算视口大小
onMounted(() => {
  svgViewbox.value = getViewbox($path.value!)
})

// 3. 监听曲率变化，重新绘制超椭圆
watch([currentCurvatureX, currentCurvatureY], async () => {
  pathString.value = await getSuperellipsePath(50, 50, currentCurvatureX.value, currentCurvatureY.value, 360)
  svgViewbox.value = getViewbox($path.value!)
})

function getViewbox(path: SVGPathElement) {
  const bbox = path.getBBox()
  return {
    x: bbox.x,
    y: bbox.y,
    width: bbox.width,
    height: bbox.height,
  }
}
async function getSuperellipsePath(
  a = 50, // X 轴半径
  b = 50, // Y 轴半径
  nX = 4, // X 轴幂指数
  nY = 4, // Y 轴幂指数
  steps = 360, // 点的个数
) {
  // 计算超椭圆的路径点
  const nX2 = 2 / nX
  const nY2 = 2 / nY
  const points = await Array.from({ length: steps }, (_, i) => {
    const t = (i * 2 * Math.PI) / steps
    const cosT = Math.cos(t)
    const sinT = Math.sin(t)
    const x = Math.abs(cosT) ** nX2 * a * Math.sign(cosT)
    const y = Math.abs(sinT) ** nY2 * b * Math.sign(sinT)
    return { x, y }
  })
  return `${points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')} Z`
}
</script>

<template>
  <svg
    :viewBox="`${svgViewbox.x} ${svgViewbox.y} ${svgViewbox.width} ${svgViewbox.height}`"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    :style="{
      transform: `rotate(${currentRotate}deg)`,
      strokeWidth: `${currentStrokeWidth}px`,
    }"
  >
    <path
      ref="$path"
      :d="pathString"
      :stroke="currentStrokeColor"
      :fill="currentFillColor"
    />
  </svg>
</template>
