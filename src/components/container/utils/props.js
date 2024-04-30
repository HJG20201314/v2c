export default {
  headerVisible: { // 控制头部显示
    type: Boolean,
    default: true
  },
  title: {         // 标题
    type: String,
    default: ''
  },
  titleHeight: {    // 标题高
    type: [Number, String],
    default: 32
  },
  height: {         // 容器高
    type: [String, Number],
    default: 280
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  helpTip: {        // 提示
    type: Object,
    default: () => {
      return {
        enable: false,
        placement: 'top',
        effect: 'dark',
        content: '帮助提示'
      }
    }
  }
}