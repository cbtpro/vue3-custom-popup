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

import {
  App,
  Component,
  ComputedOptions,
  MethodOptions,
  VNode,
  VNodeArrayChildren,
  createApp,
  h,
  onBeforeUnmount,
} from 'vue'
import { randomString } from '@/utils'

type Data = Record<string, unknown>

type RawSlots = {
  [name: string]: unknown
  $stable?: boolean
}

type RawChildren =
  | string
  | number
  | boolean
  | VNode
  | VNodeArrayChildren
  | (() => any)

/**
 * 弹窗配置
 */
export interface IPopupOptions {
  rootComponent: Component<any, any, any, ComputedOptions, MethodOptions>
  rootProps?: Record<string, unknown> | null | undefined
  children?: RawChildren | RawSlots | undefined
}
export const usePopup = (
  container: Component<any, any, any, ComputedOptions, MethodOptions>
) => {
  const el = document.createElement('div')
  const randomStr = randomString()
  el.setAttribute('id', randomStr)
  el.setAttribute('name', randomStr)
  el.setAttribute('style', 'position: absolute; width: 100%; height: 100%;')

  const createMyApp = () => createApp(h(container))
  let app: App<Element>;

  const show = () => {
    app = createMyApp()
    app.mount(el)
    document.body.appendChild(el)
  }
  const destroy = () => {
    if (app) {
      app.unmount()
    }
    document.body.removeChild(el);
  }
  const close = () => {
    destroy();
  }

  onBeforeUnmount(() => {
    destroy();
  })

  return {
    show,
    destroy,
    close,
  }
}
