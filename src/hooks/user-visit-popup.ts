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
 * 用户访问相关的弹窗
 */
import { h } from 'vue'
import { usePopup } from '@/hooks/popup'
import CustomPopupContainer from '@/components/popup/index.vue'
import WelcomePopup from '@/components/popup/welcome.vue'
import NewUserPopup from '@/components/popup/new-user.vue'
import ButtonClose from '@/components/popup/button-close.vue'

export const useUserVisitPopup = () => {
  /**
   * 欢迎弹窗
   */
  const closeWelcomePopupHandle = () => {
    console.log('关闭欢迎弹窗')
    welcomePopupInstance.destroy()
  }

  const welcomePopupInstance = usePopup(
    h(
      CustomPopupContainer,
      {
        title: '欢迎',
        /** @close="() => {}" */
        onClose: closeWelcomePopupHandle,
        onOk: () => {
          console.log('欢迎弹窗 - 点击了确认')
        },
        onCancel: () => {
          console.log('欢迎弹窗 - 点击了取消')
        },
      },
      {
        default: () => h(WelcomePopup),
        close: () => h(ButtonClose),
      }
    )
  )

  const openWelcomePopup = () => {
    welcomePopupInstance.show()
  }


  /**
   * 新用户相关弹窗
   */
  const closeNewUserPopupHandle = () => {
    console.log('close')
    newUserPopup.destroy()
  }
  const okHandle1 = () => {
    console.log('ok')
    newUserPopup.destroy()
  }
  const newUserPopup = usePopup(
    h(
      CustomPopupContainer,
      {
        title: '新用户',
        /** @close="() => {}" */
        onClose: closeNewUserPopupHandle,
        onOk: okHandle1,
        onCancel: () => {
          console.log('新用户 - 点击了取消')
        },
      },
      {
        default: () =>
          h(NewUserPopup, {
            onOk: okHandle1,
            onClose: closeNewUserPopupHandle,
          }),
        // close: () => h(ButtonClose),
      }
    )
  )
  const openNewUserPopup = () => {
    newUserPopup.show()
  }

  return {
    openWelcomePopup,
    openNewUserPopup,
  }
}
