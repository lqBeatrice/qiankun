import {
    registerMicroApps,
    addGlobalUncaughtErrorHandler,
    start,
} from "qiankun";

registerMicroApps([
    {
        name: "ReactMicroApp",
        entry: "//localhost:10100",
        container: "#frame",
        activeRule: "/react",
    }
],
    // qiankun 生命周期钩子 - 微应用加载前
    {
        beforeLoad: (app: any) => {
            console.log("before load", app.name);
            return Promise.resolve();
        },
        // qiankun 生命周期钩子 - 微应用挂载后
        afterMount: (app: any) => {
            console.log("after mount", app.name);
            return Promise.resolve();
        }
    });
/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event: Event | string) => {
    console.error(event);
    const { message: msg } = event as any;
    // 加载失败时提示
    if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
        console.log("微应用加载失败，请检查应用是否可运行");
    }
});

// 导出 qiankun 的启动函数
export default start;