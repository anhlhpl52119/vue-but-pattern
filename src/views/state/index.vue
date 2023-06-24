<template>
  <div>Hello Vue 3</div>
  <h3>Component A</h3>
  <ComponentOne></ComponentOne>
  <h3>Component B</h3>
  <ComponentTwo></ComponentTwo>
</template>
<script lang="ts" setup>
import ComponentOne from './ComponentOne.vue';
import ComponentTwo from './ComponentTwo.vue';

</script>
<style scoped lang="less">
// * {
//   background-color: rgb(37, 37, 37);
//   color: white;
//   height: 100vh;
// }
</style>
