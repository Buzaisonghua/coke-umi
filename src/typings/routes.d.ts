declare namespace RoutesConfig {
    interface Routes {
        // url
        path?: string
        // 组件components
        component?: string | (() => any)
        // 路由配置的高阶组件 可以用作登录拦截
        wrappers?: string[]
        // 重定向
        redirect?: string
        // 地址严格模式
        exact?: boolean
        // 嵌套路由
        routes?: Routes[]
        // 方便后续操作
        [k: string]: any
    }
}