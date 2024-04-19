export default {
  /**
   * 计算组件宽度
   */
  calcPopoverWidth() {
    let { width = 180 } = this.$refs?.input?.$el?.getBoundingClientRect() || {}
    this.width = width - 10
  },
  /**
   * 重置目标样式
   * @param {*} targetCls 目标样式类
   * @returns 
   */
  resetDeVisible(targetCls) {
    if (!targetCls) return
    let delEls = document.getElementsByClassName(`${targetCls}`)
    Array.from(delEls).forEach(delEl => delEl.style.display = 'none')
  },
  /**
   * 处理 delete icon 展示
   * @param {*} e 节点
   * @param {*} parentCls 父级样式类
   * @param {*} brothCls  兄弟样式类
   * @param {*} targetCls 目标样式类
   * @param {*} display   样式
   */
  handleDelIconVisible(e, parentCls, brothCls, targetCls) {
    this.resetDeVisible(targetCls)
    let { fromElement } = e
    let titleEl = null
    if (fromElement?._prevClass === parentCls) 
      titleEl = fromElement.firstChild
    else if (fromElement?._prevClass === brothCls)
      titleEl = fromElement
    if (titleEl && titleEl?.nextSibling?._prevClass === targetCls) {
      titleEl.nextSibling.style.display = 'block'
    }
  },
  /**
   * 删除历史记录某一项
   * @param {*} text 
   */
  handleHistoryItemDel(text) {
    this.historyList = this.historyList.filter(item => item !== text)
  },
  /**
   * 清空历史记录
   */
  clearHistory() { 
    this.historyList = []
  },
  handleBlur(e) {
    this.$emit('blur:', e)
    if (this.currentValue && !this.historyList.includes(this.currentValue))
      setTimeout(() => {
        this.historyList.push(this.currentValue)
      }, 300)
  }
}