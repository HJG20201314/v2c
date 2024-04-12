const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    /** 解决 worker 路径问题 */
    config.module
      .rule('worker')
      .exclude.add(/node_modules/)
      .end()
      .test(/\.worker\.js$/)
      .use('worker-loader')
      .loader('worker-loader')
      .end()
    config.module
      .rule('js').exclude.add(/\.worker\.js$/)
  }
})
