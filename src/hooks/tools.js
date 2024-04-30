
import { h } from "vue"
/**
 * 渲染插槽工具方法(通过 h 函数实现)
 * @param {*} $slots 具名插槽
 * @param {*} $scopedSlots 具名插槽，允许传递数据
 * @returns 
 */
export const renderSlots = ($slots = {}, $scopedSlots = {}, scope = null) => {
  const slots = Object.keys($slots)
  const scopedSlots = Object.keys($scopedSlots)
  return slots.map(slotName => h('template', {
    slot: slotName,
  }, [
    !scopedSlots.includes(slotName) ? $slots[slotName] : $scopedSlots[slotName](scope)
  ]))
}

 /**
   * 文字是否超出判断, 追加 title
   * @param {*} e 
   */
export const handleTextOverTitle = (e) => {
  if (e.target.scrollWidth > e.target.offsetWidth) {
    e.target.title = e.target.innerText
  } else {
    e.target.title = ''
  }
}

/**
 * 判断是否 undefined
 * @param {*} val 
 * @returns 
 */
export const isUndefined = (val) => {
  return Object.prototype.toString.call(val) === '[object Undefined]'
}

/**
 * 判断是否 null
 * @param {*} val 
 * @returns 
 */
export const isNull = (val) => {
  return Object.prototype.toString.call(val) === '[object Null]'
}

/**
 * 判断是否 Number
 * @param {*} val 
 * @returns 
 */
export const isNumber = (val) => {
  return Object.prototype.toString.call(val) === '[object Number]'
}

/**
 * 判断是否 String
 * @param {*} val 
 * @returns 
 */
export const isString = (val) => {
  return Object.prototype.toString.call(val) === '[object String]'
}

/**
 * 判断是否 Boolean
 * @param {*} val 
 * @returns 
 */
export const isBoolean = (val) => {
  return Object.prototype.toString.call(val) === '[object Boolean]'
}

/**
 * 判断是否 Function
 * @param {*} val 
 * @returns 
 */
export const isFunction = (val) => {
  return Object.prototype.toString.call(val) === '[object Function]'
}

/**
 * 判断是否 Date
 * @param {*} val 
 * @returns 
 */
export const isDate = (val) => {
  return Object.prototype.toString.call(val) === '[object Date]'
}

/**
 * 判断是否 Array
 * @param {*} val 
 * @returns 
 */
export const isArray = (val) => {
  return Object.prototype.toString.call(val) === '[object Array]'
}

/**
 * 判断是否 RegExp
 * @param {*} val 
 * @returns 
 */
export const isRegExp = (val) => {
  return Object.prototype.toString.call(val) === '[object RegExp]'
}

