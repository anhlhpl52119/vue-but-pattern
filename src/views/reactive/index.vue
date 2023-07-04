<template>
    <div>Hello Vue 3</div>
    <h3>Component A</h3>
    <button @click="state1.count++">click add {{ state1.count }}</button>
    <h3><pre>{{ state1.converted }}</pre></h3>
    <button @click="state1.setNewItem('sdsd')">Another</button>
    <button @click="state1.changeoutside">change out</button>
  </template>
  <script lang="ts" setup>
import {  reactive, ref } from 'vue';
  const controller = ref(150)
  interface Converted {
    name: string,
    age: number,
  }
  const state1 = reactive({
    count: 100,
    item55: {} as {name: string, con: string},
    converted: {} as Converted,

    setNewItem(item: string){
        this.item55.name = item;
    },
    changeoutside(){
        controller.value = 20;
        console.log(this.count);
    },
    changeVl(){
      const hello = this.count * 2
      return `hello this is curent count: ${hello}`
    },
    _setconver() {
      return this.count++;
      },
  });

  </script>
  <style scoped lang="less">
  </style>
  