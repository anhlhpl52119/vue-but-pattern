<template>
  <div>
    <button @click="goto">Count++ B</button>
    <div>
      This is Component <strong>Two</strong> and this is store:
      {{ store2.refRouteQuery }}
    </div>
    <button @click="router.push('/')">go home</button>
  </div>
</template>
<script lang="ts" setup>
import { useRouteParams } from './store';
const router = useRouter();
const random = Math.random() * 20;
const store2 = useRouteParams();

const goto = () => {
  router.replace({ query: { keyword: `radom${random}` } });
};
</script>
<style scoped></style>
