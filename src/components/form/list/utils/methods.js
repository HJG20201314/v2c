import { cloneDeep } from "lodash"

export default {
  /**
   * 
   * 数据过滤
   * @param {*} val 
   */
  handleFilter(val) {
    console.log('hhhh: ', val)
  },
  /**
   * 初始化
   */
  init() {
    console.log('init...')
    this.tableData = cloneDeep(this.list)
    this.options = this.tableData
    this.currentProps = {
      ...this.currentProps,
      ...this.defineProps
    }
    this.rowConfig = {
      ...this.rowConfig,
      keyField: this.currentProps.value
    }
    if (!this.multiple) this.checkboxConfig = {}
    else
      this.checkboxConfig = {
        checkField: 'isChecked',
        ...this.checkboxConfig,
        ...this.checkConfig
      }
  },
  /**
   * 过滤输入框聚焦
   */
  filterFocus() {
    this.$nextTick(() => {
      this.$refs?.filter?.$refs?.input?.focus()
    })
  }
}