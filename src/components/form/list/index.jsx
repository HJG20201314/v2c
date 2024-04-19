
import { usePrefixClass } from '@/hooks/usePrefixClass'
import utils from './utils'
import { debounce } from 'lodash'
import './index.scss'

export default {
  name: 'vcList',
  ...utils,
  creatd() {
    this.init()
  },
  render() {
    const { prefixCls } = usePrefixClass('list')

    const {
      headerable,
      checkList,
      filterable,
      footerable,
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

    const columnSlots =  {
      default: (posrt) => {
        let field = currentProps.value
        return (
          $scopedSlots[field] //先判断有没有具名插槽，有就渲染
            ? this.$scopedSlots[field]({
                row: posrt.row,
                rowIndex: posrt.$rowIndex,
                field,
                text: posrt.row[field],
              })
            : this.$scopedSlots['default'] //判断有没有默认插槽，有就渲染默认插槽
            ? this.$scopedSlots['default']({
                row: posrt.row,
                rowIndex: posrt.$rowIndex,
                field,
                text: posrt.row[field],
              })
            : posrt.row[field] //渲染正常的数据
        )
      }
    }
    return (
      <div class={prefixCls}>
        {headerable &&
          (<div class={`${prefixCls}_header`}>
            {$slots['list_header'] ? $slots['list_header'] :
              <vcCheckbox v-model={this.checkAll} indeterminate={this.indeterminate} label="全选"></vcCheckbox>}
          </div>)
        }
        {filterable &&
          (<div class={`${prefixCls}_filter`}>
            <vcInput v-model={this.filterText}
              ref="filter"
              size="mini"
              placeholder={placeholder}
              prefix-icon="el-icon-search"
              clearable
              autocomplete="on"
              onInput={ debounce((val) => this.handleFilter(val), 300) }></vcInput>
          </div>)
        }
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
            <vxe-column
              field={currentProps.value}
              showOverflow="tooltip"
              scopedSlots={columnSlots}>
            </vxe-column>
          </vxe-table>
        </div>
        {footerable &&
          (<div class={`${prefixCls}_footer`}>
            {$slots['list_footer'] ? $slots['list_footer'] : `已选 ${checkList.length} 条`}
          </div>)
        }
      </div>
    )
  }
}