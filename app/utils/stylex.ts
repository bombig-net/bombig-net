import * as stylex from '@stylexjs/stylex'
import type { StyleValue } from 'vue'

export function sx(...styles: Array<unknown>) {
  const result = (stylex.props as (...args: Array<unknown>) => { className?: string; style?: StyleValue })(...styles)

  return {
    class: result.className,
    style: result.style,
  }
}
