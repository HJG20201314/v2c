import { usePrefixClass } from '@/hooks/usePrefixClass'
import './index.scss'

export default {
  name: 'vcContainerView',
  render() {
    const { prefixCls } = usePrefixClass('containerview')

    return (<div class={prefixCls}>
      <vcContainer title="123123"></vcContainer>
    </div>)
  }
}