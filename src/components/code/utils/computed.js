export default {
  currentValue: {
    get() {
      return this.value
    },
    set(value) {
      this.$emit('update', value)
    }
  },
  cmOptions() {
    return {
      tabSize: 2, // tab四个空格
      lineNumbers: true, // 是否显示行数
      line: true,
      readOnly: this.disabled, // 只读
      mode: 'text/javascript',
      theme: 'dracula',
    }
  }
}