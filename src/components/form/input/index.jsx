import { usePrefixClass } from '@/hooks/usePrefixClass'
import { renderSlots, handleTextOverTitle } from '@/hooks/tools'
import utils from './utils'
import './index.scss'

export default {
  name: 'vcInput',
  model: {
    prop: 'value',
    event: 'update'
  },
  ...utils,
  mounted() {
    this.$nextTick(() => {
      this.calcPopoverWidth()
    })
  },
  render() {
    const { prefixCls } = usePrefixClass('input')
    const { type, historyable, historyList = [], width, $slots = {}, $scopedSlots = {}, $attrs: attrs = {}, $listeners: listeners = {} } = this
    
    return (
      <div class={prefixCls}>
        { type === 'autocomplete' && (
          <el-autocomplete ref="input" v-model={this.currentValue} {...{ attrs }}
            on={{
              ...listeners
            }}
          >
            {renderSlots($slots, $scopedSlots)}
          </el-autocomplete>
        )}
        { type === 'number' && (
          <el-input-number ref="input" v-model={this.currentValue} {...{ attrs }}
            on={{
              ...listeners
            }}
          >
            {renderSlots($slots, $scopedSlots)}
          </el-input-number>
        )}
        {!['autocomplete', 'number'].includes(type)
        ? historyable ? (<el-popover
            width={width}
            placement="bottom"
            trigger="focus"
            popper-class={`${prefixCls}_popover`}>
              <div class={`${prefixCls}_popover-history`}>
                <div class={`${prefixCls}_popover-history_prefix`}>
                  历史输入 <i class="el-icon-delete" onClick={this.clearHistory}></i>
              </div>
              <div class={`${prefixCls}_popover-history_list`} onMouseout={() => this.resetDeVisible(`el-icon-delete ${prefixCls}_popover-history_list-item-delete`)}>
                {historyList.map(item => (<div class={`${prefixCls}_popover-history_list-item`}
                  onMouseover={e => this.handleDelIconVisible(e, `${prefixCls}_popover-history_list-item`, `${prefixCls}_popover-history_list-item-title`, `el-icon-delete ${prefixCls}_popover-history_list-item-delete`)}>
                  <div class={`${prefixCls}_popover-history_list-item-title`}
                    onMouseover={handleTextOverTitle}>{item}</div>
                  <i class={`el-icon-delete ${prefixCls}_popover-history_list-item-delete`} onClick={() => this.handleHistoryItemDel(item)}></i>
                </div>))}
              </div>
              </div>
              <el-input slot="reference" ref="input" v-model={this.currentValue} {...{ attrs }}
                on={{
                  ...listeners,
                  blur: this.handleBlur
              }}
              >
              {renderSlots($slots, $scopedSlots)}
              </el-input>
            </el-popover>) : (<el-input ref="input" v-model={this.currentValue} {...{ attrs }}
              on={{
                ...listeners
              }}
            >
              {renderSlots($slots, $scopedSlots)}
            </el-input>) : ""
        }
      </div>
    )
  }
}