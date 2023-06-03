<template>
  <header>this is Header</header>
  <main>
    <router-view #="{ Component }">
      <component :is="Component"></component>
    </router-view>
  </main>
  <footer>This is Footer</footer>
</template>
<script lang="ts" setup></script>
<style scoped></style>
