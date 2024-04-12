export default {
  maxHeight: {              // 最大高度
    type: [Number, String], 
    default: () => {
      return '280px'
    }
  },
  placeholder: {
    // 隐文提示
    type: String,
    default: '请输入查询内容'
  },
  multiple: {
    // 多选控制
    type: Boolean,
    default: false
  },
  list: {
    // options
    type: Array,
    default: () => {
      return []
    }
  },
  checkConfig: {
    // 复选框配置
    type: Object,
    default: () => {
      return {}
    }
  },
  defineProps: {
    // options  显示规则
    type: Object,
    default: () => {
      return {
        label: 'label',
        value: 'value',
        disabled: 'disabled'
      }
    }
  },
}