
#### 动态路由原理非常简单：
[API地址](http://elk.api.banyuge.com/swagger-ui.html)
[原型地址](https://org.modao.cc/app/29xdelksprh6ep1xpaoe6zo6a3htnbmz?simulator_type=device&sticky)
密码：ELK123
#### auto-iconfont
在 `webpackPlugins` 中有一个 webpack-auto-iconfont-plugin，主要作用是根据传入的less路径和iconfont路径自动写入
我们可以看到在 vue.config.configureWebpack.plugins中new了这个插件的实例。我hook了webpack的entryOption钩子，在插件构造之前request了iconfont的内容，并将返回body插入到iconfont.less中。
> 这地方有一个小坑，不过不影响结果。request是异步的，不过好在webpack打包需要时间，在处理less时，less的内容刚好已被写入，有兴趣的朋友可以尝试修改这个plugin为同步
