import { usePrefixClass } from '@/hooks/usePrefixClass'
import { renderSlots } from '@/hooks/tools'
import utils from './utils'
import { debounce } from 'lodash'
import './index.scss'

export default {
  name: 'vcList',
  ...utils,
  creatd() {
    console.log('hhhh')
    this.init()
  },
  render() {
    const { prefixCls } = usePrefixClass('list')
    const {
      maxHeight,
      placeholder,
      multiple,
      currentProps,
      options,
      checkboxConfig,
      rowConfig,
      $slots = {},
      $scopedSlots = {}
    } = this
    console.log('slots: ', $slots)
    console.log('scopedSlots: ', $scopedSlots)
    return (
      <div class={prefixCls}>
        <div class={`${prefixCls}_filter`}>
          <vcInput v-model={this.filterText}
            size="mini"
            placeholder={placeholder}
            prefix-icon="el-icon-search"
            clearable
            onInput={ debounce((val) => this.handleFilter(val), 300) }></vcInput>
        </div>
        <div class={`${prefixCls}_table`}>
          <vxe-table
          ref="table"
            data={options}
            max-height={`${typeof maxHeight === 'string' && maxHeight.endsWith('px') ? maxHeight : maxHeight + 'px'}`}
            show-header={false}
            checkbox-config={checkboxConfig}
            row-config={rowConfig}
            border="none"
            align="left">
            {multiple && (<vxe-column type="checkbox" width="60"></vxe-column>)}
            <vxe-column field={currentProps.value} show-overflow="tooltip">
              {renderSlots($slots, $scopedSlots)}
            </vxe-column>
          </vxe-table>
        </div>
      </div>
    )
  }
}