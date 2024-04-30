import { usePrefixClass } from '@/hooks/usePrefixClass'
import { renderSlots } from '@/hooks/tools'
import './index.scss'

export default {
  name: 'vcTooltip',
  render() {
    const { prefixCls } = usePrefixClass('tooltip')
    const { $slots = {}, $scopedSlots = {}, $attrs: attrs = {}, $listeners: listeners = {} } = this

    return (<el-tooltip
      class={prefixCls}
      {...{ attrs }}
      on={{ ...listeners }}>
      {renderSlots($slots, $scopedSlots)}
      </el-tooltip>)
  }
}