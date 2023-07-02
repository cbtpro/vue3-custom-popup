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
  <div class="button-close">
    <svg
      t="1688212583983"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3120"
      width="100%"
      height="100%"
    >
      <path
        d="M512 83.2c-234.666667 0-426.666667 192-426.666667 426.666667s192 426.666667 426.666667 426.666666 426.666667-192 426.666667-426.666666-192-426.666667-426.666667-426.666667z m0 810.666667c-211.2 0-384-172.8-384-384s172.8-384 384-384 384 172.8 384 384c0 213.333333-172.8 384-384 384z"
        fill="#666666"
        p-id="3121"
      ></path>
      <path
        d="M674.133333 345.6c-8.533333-8.533333-21.333333-8.533333-29.866666 0l-134.4 134.4-134.4-134.4c-8.533333-8.533333-21.333333-8.533333-29.866667 0-8.533333 8.533333-8.533333 21.333333 0 29.866667l134.4 134.4-134.4 134.4c-8.533333 8.533333-8.533333 21.333333 0 29.866666 4.266667 4.266667 10.666667 6.4 14.933333 6.4 6.4 0 10.666667-2.133333 14.933334-6.4l136.533333-134.4 134.4 134.4c4.266667 4.266667 10.666667 6.4 14.933333 6.4 6.4 0 10.666667-2.133333 14.933334-6.4 8.533333-8.533333 8.533333-21.333333 0-29.866666l-134.4-134.4 134.4-134.4c6.4-8.533333 6.4-21.333333-2.133334-29.866667z"
        fill="#666666"
        p-id="3122"
      ></path>
    </svg>
  </div>
</template>

<style lang="less" scoped>
.button-close {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 32px;
  height: 32px;
  cursor: pointer;
}
</style>
