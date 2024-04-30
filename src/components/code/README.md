# Vue-Codemirror
[Codemirror](http://codemirror.net/) component for Vue.

基于 [Codemirror](http://codemirror.net/)，适用于 Vue 的 Web 代码编辑器。

# Example

[Demo Page](https://surmon-china.github.io/vue-codemirror)

[CDN Example](https://jsfiddle.net/u1f16q85/)

[Nuxt.js/SSR example code](https://github.com/surmon-china/vue-codemirror/blob/master/examples/nuxt-ssr-example)

# Events

To make it easier to handle events, the component converts some codemirror built-in native events into a single vue component event, where you can listen for events from both the component itself and from codemirror. If you need to listen for more and more complex events, you can pass in the event names (Array) you need for the global `Vue.use(, { events: [] })` and the component parameters `:events`, respectively, or by the `this.codemirror.on(event, hanger)` method of the codemirror instance. Here's a list of events:

**codemirror events list:**
- scroll
- changes
- beforeChange
- cursorActivity
- keyHandled
- inputRead
- electricInput
- beforeSelectionChange
- viewportChange
- swapDoc
- gutterClick
- gutterContextMenu
- focus
- blur
- refresh
- optionChange
- scrollCursorIntoView
- update

**component events list:**
- ready
- input

### Codemirror language mode types
编辑器的模式（mode属性）分为 字符串、对象两种方式，Codemirror 官方文档有说明

`mode: 'string' || object`

``` javascript
// MIME types
mode: 'text/javascript'

// name
mode: {
  name: 'javascript',
  json: true
}

// ext
mode: {
  ext: 'js'
}

// mime
mode: {
  mime: 'text/javascript'
}

// filename
mode: {
  filename: 'index.js'
}
```

# CodeMirror

- [CodeMirror language modes](http://codemirror.net/mode/) (MIME types defined)
- [CodeMirror Autoresize](https://codemirror.net/demo/resize.html)
- [CodeMirror themes](http://codemirror.net/demo/theme.html)
- [CodeMirror events](https://codemirror.net/doc/manual.html#events)
- [CodeMirror APIs](http://codemirror.net/doc/manual.html#config)

