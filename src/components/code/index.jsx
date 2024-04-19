import { Codemirror } from "vue-codemirror"
import { usePrefixClass } from '@/hooks/usePrefixClass'
import utils from "./utils"
import './index.scss'

export default {
  name: 'vcCode',
  ...utils,
  render() {
    const { prefixCls } = usePrefixClass('code')
    const { cmOptions, $attrs, $listeners } = this
    return (<Codemirror
      v-model={this.currentValue}
      class={prefixCls}
      options={cmOptions}
      {...{ $attrs }}
      on={{ ...$listeners }}></Codemirror>)
  }
}
