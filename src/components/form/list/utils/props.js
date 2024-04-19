/*
 * @Author: hanjianguo 608403@ky-tech.com.cn
 * @Date: 2024-04-11 11:40:54
 * @LastEditors: hanjianguo 608403@ky-tech.com.cn
 * @LastEditTime: 2024-04-17 16:34:34
 * @FilePath: \v2c\src\components\form\list\utils\props.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  maxHeight: {
    // 最大高度
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
  headerable: {
    // 显示头部
    type: Boolean,
    default: false
  },
  filterable: {
    // 支持过滤
    type: Boolean,
    default: false
  },
  footerable: {
    // 显示底部
    type: Boolean,
    default: false
  },
}