<script setup lang="ts">
import Background from '~/components/ui/Background.vue'
</script>

<template>
  <Background />
  <Suspense>
    <div class="fixed bottom-0 left-0 right-0 top-0 h-full w-full">
      <Header />
    </div>
  </Suspense>
</template>

<style scoped>

</style>
