import { usePrefixClass } from '@/hooks/usePrefixClass'
import { renderSlots } from '@/hooks/tools'

export default {
  name: 'vcInput',
  model: {
    prop: 'value',
    event: 'update'
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('update', value)
      }
    }
  },
  render() {
    const { prefixCls } = usePrefixClass('input')
    const { type, $slots = {}, $scopedSlots = {}, $attrs: attrs, $listeners: listeners } = this
    
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
        { !['autocomplete', 'number'].includes(type) && (
          <el-input ref="input" v-model={this.currentValue} {...{ attrs }}
            on={{
              ...listeners
            }}
          >
            {renderSlots($slots, $scopedSlots)}
          </el-input>
        )}
      </div>
    )
  }
}