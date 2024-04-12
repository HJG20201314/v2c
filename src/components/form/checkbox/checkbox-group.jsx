import { usePrefixClass } from '@/hooks/usePrefixClass'

export default {
  name: 'vcCheckboxGroup',
  model: {
    prop: 'value',
    event: 'update'
  },
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
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
    const { prefixCls } = usePrefixClass('checkbox-group')
    const { $attrs: attrs, $listeners: listeners } = this
    return (
      <el-checkbox-group class={prefixCls} ref="checkboxGroup" v-model={this.currentValue} {...{ attrs }}
        on={{
          ...listeners
        }}></el-checkbox-group >
    )
  }
}