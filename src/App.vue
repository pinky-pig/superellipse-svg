<template>
  <Suspense>
    <main class="main fixed bottom-0 left-0 right-0 top-0 h-full w-full bg-[#18202b]">
      <RouterView />
    </main>
  </Suspense>
</template>

<style scoped>
.main::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/noise.png');
  background-repeat: repeat;
  opacity: .04;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
</style>
