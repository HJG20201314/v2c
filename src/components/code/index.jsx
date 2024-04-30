import { codemirror } from "vue-codemirror"
import './setting.js'
import { usePrefixClass } from '@/hooks/usePrefixClass'
import utils from "./utils"
import './index.scss'

export default {
  name: 'vcCode',
  ...utils,
  mounted() {
    const codemirrorElement = this.$refs.codemirror.$el; // 获取 CodeMirror 组件的 DOM 元素
    codemirrorElement.addEventListener('touchstart', this.handleTouchstart, { passive: true })
    codemirrorElement.addEventListener('touchmove', this.handleTouchMove, { passive: true })
    codemirrorElement.addEventListener('mousewheel', this.handleMouseWheel, { passive: true })
  },

  beforeUnmount() {
    const codemirrorElement = this.$refs.codemirror.$el; // 获取 CodeMirror 组件的 DOM 元素
    codemirrorElement.removeEventListener('touchstart', this.handleTouchstart)
    codemirrorElement.removeEventListener('touchmove', this.handleTouchMove)
    codemirrorElement.removeEventListener('mousewheel', this.handleMouseWheel)
  },
  render() {
    const { prefixCls } = usePrefixClass('code')
    const { options, $attrs, $listeners } = this
    return (<codemirror
      ref="codemirror"
      v-model={this.currentValue}
      class={prefixCls}
      options={options}
      {...{ $attrs }}
      on={{
        ...$listeners
      }}></codemirror>)
  }
}
