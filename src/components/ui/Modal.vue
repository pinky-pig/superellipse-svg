<script setup lang="ts">
const visible = ref(false)

function close() {
  const animateDom = document.querySelectorAll('.glass-modal-container')[0] as HTMLElement
  animateDom.classList.add('fade-out')

  const animateOutDom1 = document.querySelectorAll('.glass-modal')[0] as HTMLElement
  animateOutDom1.classList.remove('scale-up-center')
  animateOutDom1.classList.add('scale-down-center')

  setTimeout(() => {
    visible.value = false
  }, 300)
}

function open() {
  visible.value = true
}

defineExpose({
  visible,
  close,
  open,
})
</script>

<template>
  <Teleport to="body">
    <div v-if="visible" class="glass-modal-container">
      <div class="glass-modal scale-up-center">
        <slot />
      </div>

      <div class="mask" @click="close" />
    </div>
  </Teleport>
</template>

<style scoped>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
}
.glass-modal-container{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 1px 1px #ffffff, 0 1px 5px 0px #ffffff;
  padding: 12px;
  z-index: 99;
}
.glass-modal{
  pointer-events: auto;
  min-height: 300px;
  width: 550px;
  height: 640px;
  margin: 0 auto;
  padding: 4rem 2rem 2.5rem;
  overflow: hidden;
  border-radius: 20px;
  background-color: rgba(37, 42, 49, 1);
  backdrop-filter: blur(40px);
  padding: 12px;
  z-index: 100;
}
.modal-box{
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 1);
  backdrop-filter: blur(2px);
  z-index: 100;
  padding-top: 10px;
}
.modal-header{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #f4f4f4;
  padding: 0 20px;
  font-size: 20px;
}
.modal-content{
  height: calc(100% - 40px);
  padding: 20px;
}

.scale-up-center{
  animation:scale-up-center 0.2s;
}
@keyframes scale-up-center{
  0%{
    transform:scale(.5)
  }
  100%{
    transform:scale(1)
  }
}

.scale-down-center{
  animation:scale-down-center 0.2s forwards;
}
@keyframes scale-down-center{
  0%{
    transform:scale(1);
  }
  100%{
    transform:scale(.5);
  }
}

.fade-out{
  animation-name: fade-out;
  animation-duration: 0.2s;
  animation-fill-mode: forwards; /* 动画结束后停留在最终状态 */
}
@keyframes fade-out{
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
</style>
