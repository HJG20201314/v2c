export default {
  value: String,          // 选中的 tab 支持双向绑定 
  type: {
    type: String,
    default: 'default'
  },
  height: {               // 高度
    type: [Number, String],
    default: '28px'
  },
  list: {                 // tab list
    type: Array,
    default: () => {
      return []
    }
  },
  minLimit: {             // 最小容纳 tab 数，达到后不可关闭
    type: Number,
    default: 1
  },
  maxTabWidth: {          // tab 最大宽度
    type: [Number, String],
    default: '120px'
  },
  tabProps: {             // tab 属性别名
    type: Object,
    default: () => {
      return {
        label: 'label',
        name: 'name'
      }
    }
  },
  closeable: {            // 可关闭
    type: Boolean,
    default: true
  },
  dragable: {             // 可拖拽
    type: Boolean,
    default: true
  },
  beforeLeave: Function,  // tab 切换回调， 返回值为 tru 或 false
}