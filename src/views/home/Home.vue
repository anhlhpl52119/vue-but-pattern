<template>
  <header>
    <img :src="logoIMG" alt="logo" />
    <ul class="option-btn">
      <li><button class="header-btn">Indie Game</button></li>
      <li><button class="header-btn">Entry Game</button></li>
      <li><button class="header-btn">Community</button></li>
    </ul>
  </header>
  <main>
    <section>
      <template v-for="(item, index) in 40" :key="index">
        <div class="card">
          <div class="card__img">
            <img :src="randomURL()" alt="index" />
          </div>
          <div class="card__content">
            <span> Product name is quite long in some case </span>
          </div>
        </div>
      </template>
    </section>
  </main>
</template>
<script lang="ts" setup>
import { randomPick } from '@/utils/common';
const logoIMG = 'https://i.imgur.com/sOCVfKv.png';
const imgs = [
  'https://i.imgur.com/unmma82.jpeg',
  'https://i.imgur.com/2MM9Jqo.png',
];
const randomURL = () => {
  return randomPick(imgs);
};
</script>
<style scoped lang="less">
@headercolor: #00b59a;

header {
  z-index: 100;
  height: 60px;
  background-color: @headercolor;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  .option-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    .header-btn {
      background-color: @headercolor;
      color: white;
      border: 1px solid;
      padding: 8px;
      cursor: pointer;
      &:active {
        color: red;
      }
    }
  }
}
main {
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  top: 60px;
  section {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    gap: 1rem;
    .card {
      width: 250px;
      box-shadow: 0 0 transparent, 0 0 transparent, 0 0 1px rgba(0, 0, 0, 0.16),
        0 2px 4px rgba(0, 0, 0, 0.06);
      .card__img {
        width: 100%;
        img {
          object-fit: fill;
          display: block;
          aspect-ratio: 3/2;
          width: inherit;
        }
      }
      .card__content {
        display: block;
        width: 100%;
        white-space: nowrap;
        overflow: hidden !important;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
