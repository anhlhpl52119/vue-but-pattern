<template>
    <div>Hello Vue 3</div>
    <h3>Component A</h3>
    <button @click="state1.count++">click add {{ state1.count }}</button>
    <h3>this Change: {{ state1.changeVl() }}</h3>
    <button @click="state1.setNewItem('sdsd')">Another</button>
    <button @click="state1.changeoutside">change out</button>
  </template>
  <script lang="ts" setup>
import {  reactive, ref } from 'vue';
  const controller = ref(150)
  
  const state1 = reactive({
    count: 100,
    item55: {} as {name: string, con: string},
    // addone(){
    //     this.count++;
    // },
    setNewItem(item: string){
        this.item55.name = item;
    },
    changeoutside(){
        controller.value = 20;
        console.log(this.count);
    },
    changeVl(){
      const hello = this.count * 2
      console.log('count:',this.count);
      console.log('object', hello);
      return `hello this is curent count: ${hello}`
    }
  });

  </script>
  <style scoped lang="less">
  </style>
  