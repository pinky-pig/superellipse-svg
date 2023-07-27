<template>
  <div
    id="nav-bg"
    class="z-2 h-80px h-fit w-full flex flex-row items-center justify-between px-3.5vw py-16px text-white"
  >
    <div class="flex flex-row items-center justify-center gap-20px">
      <img
        class="h-40px w-40px"
        src="/favicon.svg"
        alt=""
      >
      <span class="cursor-default text-[24px] font-bold tracking-[2px] text-[#a4b2c1]">Superellipse SVG</span>
    </div>

    <div class="grid h-40px w-40px place-items-center">
      <a href="https://github.com/pinky-pig/superellipse-svg" target="_blank">
        <div i-carbon-logo-github class="h-24px w-24px" />
      </a>
    </div>
  </div>
</template>

<style scoped>
#nav-bg {
  will-change: opacity,transform;
}
</style>
