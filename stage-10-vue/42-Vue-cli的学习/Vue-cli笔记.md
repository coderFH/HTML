#### 1.全局安装脚手架
npm install -g vue-cli
* 如果想升级版本 先移除 再安装
    * npm uninstall -g vue-cli

#### 2.现在脚手架的版本是3.0,如果想使用2.0版本的脚手架 执行这个命令
npm install -g @vue/cli-init

#### 3. 2.0版本初始化的方式
vue init webpack jh_demo(文件夹的名字)

#### 4. 3.0版本的初始化方式
vue create jh-demo (文件夹的名字)

#### 5. 2.0版本创建时选项的意思
    Project name (vuecli2test)              项目名字
    Project description (A Vue.js project)  描述
    Author                                  作者
    Vue build                               运行的方式
    Install vue-router                      是否安装路由
    Use ESLint to lint your code            检查代码规范 // 如果选了 以后想关闭 在config/index.js的useEslint改为false
    Set up unit tests                       单元测试
    Setup e2e tests with Nightwatch         端到端的测试
#### 6. 3.0版本创建时选项的意思
     Please pick a preset: (Use arrow keys)
     ❯ default (babel, eslint)  默认配置
       Manually select features 手动配置 √
       
     选择手动配置后,会有选择安装哪个,空格选中和取消
     ? Check the features needed for your project: 
       ◉ Babel
       ◯ TypeScript
      ❯◯ Progressive Web App (PWA) Support
       ◯ Router
       ◯ Vuex
       ◯ CSS Pre-processors
       ◯ Linter / Formatter
       ◯ Unit Testing
       ◯ E2E Testing
       
     Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow keys)
     ❯ In dedicated config files 配置文件独立存放 √
        In package.json 放在package.json
        
     Save this as a preset for future projects? 
     是否保存配置文件,选择后,第一步就会多一个选项,下次可以直接选  yes
     删除的话,找一个vuerc的文件,删除里边对应的东西就行
     
     Save preset as: 保存的名字 coderfh
  
#### 6. 3.0后 配置去哪里
* 安装完vue-cli后,其实有一个ui界面
* vue ui 启动
* 启动后,导入对应的脚手架的文件夹,就可以以图形界面的形式更改配置
* 如果我真的想改某些默认配置,我们需要创建一个vue.config.js的文件
* 在里边导出自己修改的配置,编译的时候,vue会自动合并你的配置
       
#### 5. 创建后的操作
    cd jh_demo
    npm install
    npm run dev

#### 6.runtime-compiler 和 runtime-only的区别
* 创建脚手架的时候,有一个Vue build  运行方式的选项 分别表示runtime-compiler 和 runtime-only
* 选择完不同的方式 我们可以看到只有main.js文件有区别
1. runtime-compiler:
```vue
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```
2. runtime-only:
```vue
new Vue({
  el: '#app',
  render : h=>h(App)
})
```

* 这两种写法在解析的过程是不一样的
1. runtime-comper
    * template -> ast -> render(渲染) -> virtual dom (虚拟dom) ->UI (视图)
2. runtime-only
    * render -> virtual dom -> UI
    * 那么相比runtime-comper 少了template -> ast的过程,那.vue的template是由谁处理?
        是由vue-template-compire这个组件处理的
* 由此可见,runtiem-only 1.性能更高 2.代码量更少  所以以后 用runtime-only





1. 打包
	npm run build
2. 发布上线
	本地服务器
		npm install -g serve
        serve dist
	    访问
		    http://localhost:


	线上(动态web)服务器
		1. 修改配置文件：webpack.base.conf.js
			output:{
                publicPath: '/xxx/'    // 最终要生成项目的名称
            }
		2. 重新打包
			npm run build
		3. 把dist文件夹名称修改为项目的名称，部署上线
			如果是Tomcat服务器，直接部署到webapps目录下
		4. 根据网址目录访问
