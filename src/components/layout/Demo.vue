<script setup lang="ts">
import Modal from '~/components/ui/Modal.vue'
import Alert from '~/components/ui/Alert.vue'

const alertInfo = ref('')
const $Alert = ref<typeof Alert | null>(null)

const $modal = ref<typeof Modal | null>(null)
function open() {
  $modal.value!.open()
}
function close() {
  $modal.value!.close()
}

defineExpose({
  close,
  open,
})

// 从文件夹遍历获取 SVG 内容
const svgFiles = await getAllSvgRaw()

// 从单个文件目录获取原始文件内容
async function getAllSvgRaw() {
  const posts = await Promise.all(
    Object.entries(
      import.meta.glob('~/assets/demo/*.svg', { as: 'raw' }))
      .map(async ([path, resolver]) => {
        return {
          raw: await resolver(),
          title: (path as any).split('/').pop().split('.')[0],
          path,
        }
      }),
  )
  return posts
}

const throttledFn = useThrottleFn(async (item) => {
  try {
    await navigator.clipboard.writeText(item.raw)

    alertInfo.value = '已拷贝到剪切板'
    $Alert.value!.open()
  }
  catch (err) {
    alertInfo.value = '拷贝失败'
    console.error('复制失败：', err)
  }
}, 2000)

async function copyDemo(item: typeof svgFiles[0]) {
  throttledFn(item)
}
</script>

<template>
  <Modal ref="$modal">
    <div class="px-2 md:px-4">
      <div class="flex flex-row items-center justify-between">
        <span class="h-12 flex flex-row font-bold leading-12 text-[#A4B2C1]">
          Demo
          <p class="text-8px leading-12">（点击图形自动粘贴到剪切板）</p>
        </span>
        <div class="cursor-pointer font-bold text-[#A4B2C1] hover:bg-white" i-carbon-close @click="close" />
      </div>

      <div class="grid grid-cols-4 gap-y-4">
        <div
          v-for="(item, index) in svgFiles"
          :key="index"
          :alt="item.path"
          class="mx-auto h-80px w-80px cursor-pointer bg-no-repeat"
          @click="copyDemo(item)"
          v-html="item.raw"
        />
      </div>
    </div>
    <Alert ref="$Alert" :info="alertInfo" />
  </Modal>
</template>

<style scoped>

</style>
