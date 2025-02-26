// Copyright 2023 Peter Chen
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * 活动相关的弹窗
 */
import { h } from 'vue';
import { usePopup } from '@/hooks/popup';
import CustomPopupContainer from '@/components/popup/index.vue';
import EventNotification from '@/components/popup/event-notification.vue';
import NewEventAnnouncement from '@/components/popup/new-event-announcement.vue';
import ButtonClose from '@/components/popup/button-close.vue';

export const useEventNotificationPopup = () => {
  /**
   * 当前进行中的活动弹窗
   */
  const closeEventNotificationHandle = () => {
    console.log('close');
    eventNotificationPopup.destroy();
  };

  const eventNotificationPopup = usePopup(
    h(
      CustomPopupContainer,
      {
        title: '恭喜发财2',
        /** @close="() => {}" */
        onClose: closeEventNotificationHandle,
        onOk: () => {
          // 点击ok的操作
        },
        onCancel: () => {
          // 点击取消的操作
        },
      },
      {
        default: () => h(EventNotification),
        close: () => h(ButtonClose),
      },
    ),
  );

  const openEventNotificationPopup = () => {
    eventNotificationPopup.show();
  };

  /**
   * 新活动预告
   */
  const closeNewEventAnnouncementHandle = () => {
    console.log('close');
    newEventNotificationPopup.destroy();
  };

  const newEventNotificationPopup = usePopup(
    h(
      CustomPopupContainer,
      {
        title: '新活动预告',
        /** @close="() => {}" */
        onClose: closeNewEventAnnouncementHandle,
        onOk: () => {
          // 点击新活动时的逻辑
        },
        onCancel: () => {
          // 取消新活动时的逻辑
        },
      },
      {
        default: () =>
          h(NewEventAnnouncement, {
            onClose: closeNewEventAnnouncementHandle,
            onCustomEvent: () => {
              // 点击新活动时的逻辑
              closeNewEventAnnouncementHandle();
              alert('自定义事件');
            },
          }),
        close: () => h(ButtonClose),
      },
    ),
  );

  const openNewEventNotificationPopup = () => {
    newEventNotificationPopup.show();
  };

  return {
    openEventNotificationPopup,
    openNewEventNotificationPopup,
  };
};
