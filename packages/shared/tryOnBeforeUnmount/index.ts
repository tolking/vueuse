import { getCurrentInstance, onBeforeUnmount } from 'vue-demi'
import type { Fn } from '../utils'

/**
 * Call onBeforeUnmount() if it's inside a component lifecycle, if not, do nothing
 *
 * @param fn
 */
export function tryOnBeforeUnmount(fn: Fn) {
  const instance = getCurrentInstance()
  if (instance)
    onBeforeUnmount(fn, instance)
}
