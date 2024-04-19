import { usePrefixClass } from '@/hooks/usePrefixClass'
import { cloneDeep } from 'lodash'
export default {
  /**
   * 确保选中的 tab 在可视区
   */
  scrollTab() {
    const { prefixCls } = usePrefixClass('tab')
    const selectedTab = document.getElementsByClassName(`${prefixCls}_main-${this.type}-is-active`)
    if (selectedTab[0])
      selectedTab[0].scrollIntoView({
        behavior: 'smooth', // 使用平滑滚动
        block: 'nearest', // 滚动到最近的边界
        inline: 'start' // 水平滚动到起始位置
      })
  },
  /**
   * 双向绑定
   * @param {*} tab 
   */
  handleCheck(tab) {
    this.$emit('update', tab[this.tabProps.name])
  },
  /**
   * tab 关闭
   * @param {*} tab 
   * @returns 
   */
  handleClose(tab) {
    if (this.tabs.length <= this.minLimit) return
    let tabs = cloneDeep(this.tabs)
    let { name } = this.tabProps
    let index = this.tabs.findIndex(item => item[name] === tab[name])
    let targetTab = null
    if (index < tabs.length - 1)
      targetTab = tabs[index + 1]
    else
      targetTab = tabs[index - 1]
    this.tabs.splice(index, 1)
    this.$emit('close', tab)
    this.handleCheck(targetTab)
    this.tabsChange()
  },
  /**
   * tab 拖动
   */
  tabsChange() {
    this.$emit('tabsChange', this.tabs)
  },
  // tab 区鼠标滚轮左右滚动
  handleWheel(event) {
    this.$refs.scrollbar.wrap.scrollLeft -= event.wheelDeltaY / 2
  },
  /**
   * 
   * @param {*} tab 新选中的 tab
   * @param {*} oldTab 旧选中的 tab
   */
  handleBeforeLeave(tab, oldTab) {
    if (this.beforeLeave && typeof this.beforeLeave === 'function') { 
      const callBack = new Promise((resolve) => {
        resolve(this.beforeLeave(tab, oldTab))
      })
      try {
        callBack().then(res => {
          if (res) {
            this.$nextTick(() => {
              this.scrollTab()
            })
          } else {
            let { name } = this.tabProps
            let index = this.tabs.findIndex(item => item[name] === oldTab)
            if (index !== -1) // 确保旧的 tab 存在
              this.$emit('update', oldTab)
          }
        })
      } catch (e) {
        console.warn('beofore-leave: ', e)
      }
    } else {
      this.$nextTick(() => {
        this.scrollTab()
      })
    }
  },
}