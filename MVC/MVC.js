// MVC模式js实现
// 测试环境：https://runjs.cn/code

/**三大组件 Model, View, Controller */
var M = {}, V = {}, C = {};

/** Model 负责处理数据 */
M.data = "hello world";

/** View 负责将资料输出到屏幕 */
V.render = (M) => { alert(M.data); }

/** Controller 作为M和V的一个桥梁 */
C.handleOnload = () => { V.render(M); }

/** 在网页读取的时候呼叫Controller */
window.onload = C.handleOnload;