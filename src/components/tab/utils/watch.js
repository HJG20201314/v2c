export default {
  list: {
    handler(val) {
      this.tabs = val
    },
    immediate: true
  },
  value: {
    handler(tab, oldTab) {
      this.handleBeforeLeave(tab, oldTab)
    }
  }
}