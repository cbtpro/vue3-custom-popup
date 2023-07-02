<!--
 Copyright 2023 Peter Chen
 
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 
     http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

<script setup lang="ts">
const emits = defineEmits(['close', 'ok']);

const okHandle = () => {
  emits('ok');
};
</script>

<template>
  <div class="popup-inner">
    <div class="inner">
      <img
        src="https://img2.baidu.com/it/u=1535537231,3770427295&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750"
        class="poster"
      />
      <div @click="okHandle" class="button-ok">Go!</div>
    </div>
  </div>
  
</template>

<style lang="less" scoped>
.popup-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 400px;
  background-color: #efefef;
  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .poster {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      object-fit: cover; //重要
    }
    .button-ok {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 60px;
      border-radius: 50%;
      color: #fff;
      background-color: orange;
      font-size: 28px;
      font-weight: 900;
      text-align: center;
      line-height: 60px;
      cursor: pointer;
    }
  }
}
</style>
