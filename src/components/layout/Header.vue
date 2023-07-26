<template>
  <div
    id="nav-bg"
    class="z-2 h-80px h-fit w-full flex flex-row items-center justify-between px-3.5vw py-16px text-white"
  >
    <img
      class="h-40px w-40px"
      src="/favicon.svg"
      alt=""
    >

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
