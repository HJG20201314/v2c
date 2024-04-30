import { usePrefixClass } from '@/hooks/usePrefixClass'
import demo1 from './demo/demo1'
import './index.scss'

export default {
  name: 'vcTabView',
  render() {
    const { prefixCls } = usePrefixClass('tabview')

    return (
      <div class={prefixCls}>
        <demo1></demo1>
      </div>
    )
  }
}