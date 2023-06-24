<template>
  <div>
    <button @click="goto">Count++ A</button>
    <div>
      This is Component <strong>One</strong> and this is store:
      {{ store2.refRouteQuery }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouteParams } from './store';
const router = useRouter();
const random = Math.random() * 20;
const store2 = useRouteParams();

const goto = () => {
  router.push({ query: { keyword: `radom${random}` } });
};

</script>
<style scoped></style>
