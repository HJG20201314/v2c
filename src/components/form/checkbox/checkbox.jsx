import { usePrefixClass } from '@/hooks/usePrefixClass'

export default {
  name: 'vcCheckbox',
  model: {
    prop: 'value',
    event: 'update'
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
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
    const { prefixCls } = usePrefixClass('checkbox')
    const { $attrs: attrs, $listeners: listeners } = this
    return (
      <el-checkbox class={prefixCls} ref="checkbox" v-model={this.currentValue} {...{ attrs }}
        on={{
          ...listeners
        }}></el-checkbox>
    )
  }
}