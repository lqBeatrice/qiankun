import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { registerApplication, start } from "single-spa/src/single-spa";

const name = 'ass';
/* loading 是一个返回 promise 的函数，用于 加载/解析 应用代码。
 * 它的目的是为延迟加载提供便利 —— single-spa 只有在需要时才会下载应用程序的代码。
 * 在这个示例中，在 webpack 中支持 import ()并返回 Promise，但是 single-spa 可以使用任何返回 Promise 的加载函数。
 */
const app = () => import('./app/index.js');
/* Single-spa 配置顶级路由，以确定哪个应用程序对于指定 url 是活动的。
 * 您可以以任何您喜欢的方式实现此路由。
 * 一种有用的约定是在url前面加上活动应用程序的名称，以使顶层路由保持简单。
 */
const activeWhen = '/ass';
registerApplication({ name, app, activeWhen });



/**
* 渲染函数
* 两种情况：主应用生命周期钩子中运行 / 微应用单独启动时运行
*/
function render() {
  start();
  ReactDOM.render(<React.StrictMode>
    <App />
  </React.StrictMode>, document.querySelector('#root'));
}

// 独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
// export async function bootstrap() {
//   console.log("ReactMicroApp bootstraped");
// }

// /**
//  * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
//  */
// export async function mount(props) {
//   console.log("ReactMicroApp mount", props);
//   render(props);
// }

// /**
//  * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
//  */
// export async function unmount() {
//   console.log("ReactMicroApp unmount");
//   ReactDOM.unmountComponentAtNode(document.getElementById("root"));
// }

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// reportWebVitals();
