import { usePrefixClass } from '@/hooks/usePrefixClass'
import './index.scss'

export default {
  name: 'vcCodeView',
  data() {
    return {
      code: ''
    }
  },
  render() {
    const { prefixCls } = usePrefixClass('codeview')

    return (<div class={prefixCls}>
      <vcCode v-model={this.code}></vcCode>
    </div>)
  }
}
