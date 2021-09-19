const Mark = require('./index')
const str = "![](https://files.mdnice.com/logo.svg)\n" +
    "\n" +
    "请使用 **Chrome** 浏览器。\n" +
    "\n" +
    "请阅读下方文本熟悉工具使用方法，本文可直接拷贝到微信中预览。\n" +
    "\n" +
    "## 1 Markdown Nice 简介\n" +
    "\n" +
    "- 支持自定义样式的 Markdown 编辑器\n" +
    "- 支持微信公众号、知乎和稀土掘金\n" +
    "- 欢迎扫码回复「排版」加入推文群\n"
const output = Mark(str)
// console.log(output)
