import Vue from 'vue'

const requireComponent = require.context(
  './',
  true,
  /\.jsx/
)
/**
 * 注册全局组件
 */
export default function () {
  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    const component = componentConfig.default || componentConfig

    if (component.name)
    Vue.component(component.name, component)
  })
}