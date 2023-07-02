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

<script setup lang="ts"></script>

<template>
  <div class="popup-inner">
    <div class="inner">
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Ff2ab120c-0a69-4a1b-b0a4-30cf755f9be9%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1690873031&t=2bfa73ae4c15b98c79e999d24fd6ac8d"
        class="poster"
      />
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
  }
}
</style>
