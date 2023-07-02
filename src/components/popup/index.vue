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
// import { Fragment, useAttrs, useSlots } from 'vue'

// import ButtonClose from './button-close.vue';

// const props = defineProps();
// const slots = useSlots()
// const attrs = useAttrs()

const emits = defineEmits(['close', 'ok', 'cancel'])
const onClose = () => {
  emits('close', Date.now())
}
</script>

<template>
  <div class="popup">
    <div @click="onClose">
      <slot name="close">
      </slot>
    </div>

    <slot />
    <!-- <button @click="emits('ok')">ok</button>
    <button @click="emits('cancel')">cancel</button> -->
  </div>
</template>

<style lang="less" scoped>
.popup {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  // pointer-events: none;
  background-color: rgba(0, 0, 0, 0.1);
  // background-color: rgba(255, 0, 0, 0.377);
}
</style>
