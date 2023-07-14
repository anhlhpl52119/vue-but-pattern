<template>
  <div class="testvue">Hello Vue 3 with: {{ textItem }}</div>
</template>
<script lang="ts" setup>
const textItem = ref<string>('');

const loader = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      textItem.value = 'asdfasdfasdf';
      resolve({
        sdsd: 'controller resolve',
      });
    }, 2000);
  });
};

await loader();
</script>
<style scoped>
.testvue {
  height: 10rem;
  width: 30rem;
  border-radius: 15px;
  background-color: #fff;
  color: red;
}
</style>
