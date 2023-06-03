<template>
  <div class="cont" ref="containerRefs">
    <section class="hidden">
      <h1>Hello</h1>
      <p>this is My website</p>
    </section>
    <section class="hidden">
      <h1>Hello</h1>
      <p>this is My website</p>
    </section>
    <section class="hidden">
      <h1>Hello</h1>
      <p>this is My website</p>
    </section>
    <section class="hidden">
      <h1>Hello</h1>
      <p>this is My website</p>
    </section>
    <section class="hidden">
      <h1>Hello</h1>
      <p>this is My website</p>
    </section>
  </div>
</template>
<script lang="ts" setup>
onMounted(async () => {
});
const containerRefs = ref<HTMLElement>();
</script>
<style scoped lang="less">
section {
  display: grid;
  place-items: center;
  align-items: center;
  min-height: 100vh;
}
.cont {
  background: #131316;
  color: #fff;
  // display: grid;
  // place-items: center;
  // min-height: 100vh;
}
</style>
