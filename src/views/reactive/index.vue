<template>
    <div>Hello Vue 3</div>
    <h3>Component A</h3>
    <button @click="state1.addone">click add {{ state1.count }}</button>
  <h3>Component Other <pre>{{ state1.item55  }}</pre></h3>
    <button @click="state1.setNewItem('sdsd')">Another</button>
  </template>
  <script lang="ts" setup>
import {  reactive } from 'vue';

  
  const state1 = reactive({
    count: 1,
    item55: {} as {name: string, con: string},
    addone(){
        this.count++;
    },
    setNewItem(item: string){
        this.item55.name = item;
    }
  });

  </script>
  <style scoped lang="less">
  </style>
  