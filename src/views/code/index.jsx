import { usePrefixClass } from '@/hooks/usePrefixClass'

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
