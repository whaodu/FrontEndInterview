
1. 什么是闭包？  
闭包是指有权访问另一个函数作用域重点变量的函数。创建闭包的常见方式，就是在一个函数内部创建另外一
个函数。因为内部匿名函数的作用域链(一个栈结构)指向2：全局变量对象，1：包含函数变量对象，0:自己
的变量对象。所以虽然随着包含函数的执行结束，包含函数的作用域链销毁了，但是因为任然有函数的作用域
链指向包含函数的变量对象，所以不会触发回收机制。
2. JS如何实现类，继承？  
通过prototype,Javascript 解析引擎在读取一个Object的属性的值时，会沿着prototype向上寻找，
如果最终没有找到，则该属性值为`Undefined`； 如果最终找到该属性的值，则返回结果。与这个过程不同的是，
当javascript解析引擎执行“给一个Object的某个属性赋值”的时候，如果当前Object存在该属性，则改写该属性的值，
如果当前的Object本身并不存在该属性，则赋值该属性的值。
3. 什么是冒泡和捕获？  
事件流描述的是从页面中接收事件的顺序。IE的事件流是事件冒泡流，Netscape的事件流是事件捕获流。
事件冒泡流：嵌套最深的结点最先接收事件。
事件捕获流：document对象最先接收事件。
4. JS有哪些数据类型？  
boolean,null，Number,string,Undefined这5个基本数据类型，另外有一个复杂数据类型object（本质上由一组无序的名值对组成）
5. Null和Undefined的区别？  
声明但未加初始化的则为Undefined,而null则表示一个空对象指针。但是两者用`==`返回为true
7. isNaN（）的作用？  
isNaN() 函数通常用于检测 parseFloat() 和 parseInt() 的结果，以判断它们表示的是否是合法的数字。当然也可以用 isNaN() 函数来检测算数错误，比如用 0 作除数的情况。
8. JS对象中的Array对象和String对象的各种方法

9. this关键字在不同环境下的指向  
[5种情况下的this指向](http://bonsaiden.github.io/JavaScript-Garden/zh/#function.this)
10. JS的作用域  
[作用域和命名空间](http://bonsaiden.github.io/JavaScript-Garden/zh/#function.scopes)
11. setTimeout和setInterval  
(setTimeout和setInterval的区别你真的了解吗?)[http://www.jb51.net/article/26679.htm]
12. js有哪些基本对象  
JavaScript对象：Array，Boolean，Date，Math，Number，String，RegExp，Functions，Events
browser对象：Window，Navigator，Screen，History，Location
html对象：Document，Element，Attribute，Event
13. call、apply、callee 孰知应用
[js apply详解](http://blog.csdn.net/myhahaxiao/article/details/6952321)
[javascript中callee与caller的用法和应用场景](http://www.jb51.net/article/25561.htm)
14. 跨越实现方法  
[详解js跨域问题](https://segmentfault.com/a/1190000000718840)
15. 事件监听、回调、发布订阅模式、promise实现
[javascript实现异步的四种方法](http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html)
[设计模式之观察者模式](http://www.cnblogs.com/TomXu/archive/2012/03/02/2355128.html)
16. AMD CMD 模块化JS
[javascript模块化编程](http://www.ruanyifeng.com/blog/2012/10/javascript_module.html)
17. 内存泄露的原因和场景。
[深入浅出JavaScript内存泄露](http://developer.51cto.com/art/201007/212040_all.htm)
[javascript内存泄露的几种情况](http://www.cnblogs.com/sprying/archive/2013/05/31/3109517.html)
18. 如何判断js类型
[JavaScript中判断对象类型的种种方法](http://www.cnblogs.com/flyjs/archive/2012/02/20/2360504.html)
19. 按值传递和按引用传递
[JavaScript中值的访问与参数传递问题](http://fehacker.com/2014/12/19/call-by-sharing/)
20. 重排和重绘
[浏览器渲染页面的过程，以及重绘和重排](http://blog.csdn.net/lihongxun945/article/details/37830667)
21. 严格模式
[是时候使用JavaScript严谨模式(Strict Mode)提升团队开发效率](http://www.alloyteam.com/2012/06/it-is-time-to-use-the-javascript-strict-mode-strict-mode-to-enhance-the-efficiency-of-team-development/)
22. 简述document.write和 innerHTML的区别。  
document.write只能重绘整个页面,
innerHTML可以重绘页面的一部分。
23. extend
[extend 方法在js框架中的设计](http://www.cnblogs.com/yupeng/archive/2012/03/11/2389997.html)
