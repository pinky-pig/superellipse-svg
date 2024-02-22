<script setup lang="ts">
import { i18n } from '~/i18n'

const { width } = useWindowSize()
</script>

<template>
  <div
    id="nav-bg"
    class="z-2 h-80px h-fit w-full flex flex-row items-center justify-between px-3.5vw py-16px text-white"
  >
    <MoneyCard
      align="right"
      rotate-mode="right"
      :align-offset="width > 625 ? 160 : 0"
      :top-offset="width > 625 ? -190 : -220"
    />

    <div class="flex flex-row items-center justify-center gap-20px">
      <img
        class="h-40px w-40px"
        src="/favicon.svg"
        alt=""
      >
      <span class="cursor-default text-[24px] font-bold tracking-[2px] text-[#a4b2c1]">
        Superellipse SVG
      </span>
    </div>

    <div class="grid grid-cols-3 h-40px w-fit select-none place-items-center gap-4">
      <a href="https://encodesvg.mmeme.me/" target="_blank">
        <div i-carbon-svg class="h-24px w-24px" />
      </a>
      <a href="https://github.com/pinky-pig/superellipse-svg" target="_blank">
        <div i-carbon-logo-github class="h-24px w-24px" />
      </a>

      <svg v-if="i18n.global.locale === 'cn'" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" @click="i18n.global.locale = 'en'">
        <path fill="currentColor" d="M30 3H14v5h2V5h14c.6 0 1 .4 1 1v11c0 .6-.4 1-1 1H17v7h-5.3L8 27.9V25H5c-.6 0-1-.4-1-1V13c0-.6.4-1 1-1h13v-2H5c-1.7 0-3 1.3-3 3v11c0 1.7 1.3 3 3 3h1v5.1l6.3-5.1H19v-7h11c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3z" class="clr-i-outline clr-i-outline-path-1" />
        <path fill="currentColor" d="M6.2 22.9h2.4l.6-1.6h3.1l.6 1.6h2.4L11.9 14H9.5l-3.3 8.9zm4.5-6.4l1 3.1h-2l1-3.1z" class="clr-i-outline clr-i-outline-path-2" />
        <path fill="currentColor" d="M20 17c1.1 0 2.6-.3 4-1c1.4.7 3 1 4 1v-2s-1 0-2.1-.4c1.2-1.2 2.1-3 2.1-5.6V8h-3V6h-2v2h-3v2h5.9c-.2 1.8-1 2.9-1.9 3.6c-.6-.5-1.2-1.2-1.6-2.1h-2.1c.4 1.3 1 2.3 1.8 3.1c-1 .4-1.9.4-2.1.4v2z" class="clr-i-outline clr-i-outline-path-3" />
        <path fill="none" d="M0 0h36v36H0z" />
      </svg>

      <svg v-else class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" @click="i18n.global.locale = 'cn'">
        <path fill="currentColor" d="m11 16.5l-1 3.1h2l-1-3.1z" class="clr-i-solid clr-i-solid-path-1" />
        <path fill="currentColor" d="M30.3 3h-16v5h4v2h-13c-1.7 0-3 1.3-3 3v11c0 1.7 1.3 3 3 3h1v5.1l6.3-5.1h6.7v-7h11c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zM13.1 22.9l-.5-1.6H9.5l-.6 1.6H6.5L9.8 14h2.4l3.3 8.9h-2.4zM28.3 15v2c-1.3 0-2.7-.4-3.9-1c-1.2.6-2.6.9-4 1l-.1-2c.7 0 1.4-.1 2.1-.3c-.9-.9-1.5-2-1.8-3.2h2.1c.3.9.9 1.6 1.6 2.2c1.1-.9 1.8-2.2 1.9-3.7h-6V8h3V6h2v2h3.3l.1 1c.1 2.1-.7 4.2-2.2 5.7c.7.2 1.3.3 1.9.3z" class="clr-i-solid clr-i-solid-path-2" />
        <path fill="none" d="M0 0h36v36H0z" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
#nav-bg {
  will-change: opacity, transform;
}
</style>
