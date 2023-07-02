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
import { useUserVisitPopup } from '@/hooks/user-visit-popup';
import { useEventNotificationPopup } from '@/hooks/event-notification-popup';

const { openWelcomePopup, openNewUserPopup } = useUserVisitPopup();

const { openNewEventNotificationPopup, openEventNotificationPopup } = useEventNotificationPopup();
</script>

<template>
  <button @click="openWelcomePopup">弹出欢迎弹窗</button>
  <button @click="openNewUserPopup">弹出新用户弹窗</button>
  <button @click="openNewEventNotificationPopup">弹出活动预告</button>
  <button @click="openEventNotificationPopup">弹出当前正在进行中的热门活动</button>
</template>

<style lang="less" scoped></style>
