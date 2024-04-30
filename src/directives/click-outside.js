import _ from 'lodash'

import Vue from 'vue'

export default Vue.directive('click-outside', {
  bind(el, binding) {
    function documentHandler(e) {
      if (el.contains(e.target)) {
        return false
      } else if (binding.expression && _.isFunction(binding.value)) {
        binding.value(el, e)
      }
    }

    el.__vueClickOutside__ = documentHandler
    document.addEventListener('click', documentHandler, true)
  },
  unbind(el) {
    document.removeEventListener('click', el.__vueClickOutside__, true)
    delete el.__vueClickOutside__
  }
})
