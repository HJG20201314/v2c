export default function () {
  return {
    options: {
      line: true,
      theme: "rubyblue", // 主题
      tabSize: 4, // 制表符的宽度
      indentUnit: 2, // 一个块应该缩进多少个空格（无论这在编辑语言中意味着什么）。默认值为 2。
      firstLineNumber: 1, // 从哪个数字开始计算行数。默认值为 1。
      readOnly: false, // 只读
      autorefresh: true,
      smartIndent: true, // 上下文缩进
      lineNumbers: true, // 是否显示行号
      styleActiveLine: true, // 高亮选中行
      viewportMargin: Infinity, //处理高度自适应时搭配使用
      showCursorWhenSelecting: true, // 当选择处于活动状态时是否应绘制游标
      mode: 'javascript', // 
    }
  }
}