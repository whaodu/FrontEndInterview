
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
Array的各种方法
```
- concat()	连接两个或更多的数组，并返回结果。
- join()	把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
- pop()	删除并返回数组的最后一个元素
- push()	向数组的末尾添加一个或更多元素，并返回新的长度。
- reverse()	颠倒数组中元素的顺序。
- shift()	删除并返回数组的第一个元素
- slice()	从某个已有的数组返回选定的元素
- sort()	对数组的元素进行排序
- splice()	删除元素，并向数组添加新元素。
- toSource()	返回该对象的源代码。
- toString()	把数组转换为字符串，并返回结果。
- toLocaleString()	把数组转换为本地数组，并返回结果。
- unshift()	向数组的开头添加一个或更多元素，并返回新的长度。
- valueOf()	返回数组对象的原始值
```
String的各种方法：
```
anchor()	创建 HTML 锚。
big()	用大号字体显示字符串。
blink()	显示闪动字符串。
bold()	使用粗体显示字符串。
charAt()	返回在指定位置的字符。
charCodeAt()	返回在指定的位置的字符的 Unicode 编码。
concat()	连接字符串。
fixed()	以打字机文本显示字符串。
fontcolor()	使用指定的颜色来显示字符串。
fontsize()	使用指定的尺寸来显示字符串。
fromCharCode()	从字符编码创建一个字符串。
indexOf()	检索字符串。
italics()	使用斜体显示字符串。
lastIndexOf()	从后向前搜索字符串。
link()	将字符串显示为链接。
localeCompare()	用本地特定的顺序来比较两个字符串。
match()	找到一个或多个正则表达式的匹配。
replace()	替换与正则表达式匹配的子串。
search()	检索与正则表达式相匹配的值。
slice()	提取字符串的片断，并在新的字符串中返回被提取的部分。
small()	使用小字号来显示字符串。
split()	把字符串分割为字符串数组。
strike()	使用删除线来显示字符串。
sub()	把字符串显示为下标。
substr()	从起始索引号提取字符串中指定数目的字符。
substring()	提取字符串中两个指定的索引号之间的字符。
sup()	把字符串显示为上标。
toLocaleLowerCase()	把字符串转换为小写。
toLocaleUpperCase()	把字符串转换为大写。
toLowerCase()	把字符串转换为小写。
toUpperCase()	把字符串转换为大写。
toSource()	代表对象的源代码。
toString()	返回字符串。
valueOf()	返回某个字符串对象的原始值。
```
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
14. 跨越实现方法
15. 同步、异步、回调、promise实现
16. AMD CMD 模块化JS
17. 内存泄露的原因和场景。
18. 如何判断js类型
19. 按值传递和按引用传递
20. 重排和重绘
21. 严格模式
22. ajax的原生实现
23. 简述document.write和 innerHTML的区别。
document.write只能重绘整个页面,
innerHTML可以重绘页面的一部分。
24. js异步编程的方法
回调函数，这是异步编程最基本的方法。
事件监听，另一种思路是采用事件驱动模式。任务的执行不取决于代码的顺序，而取决于某个事件是否发生。
发布/订阅，上一节的"事件"，完全可以理解成"信号"。
Promises对象，Promises 对象是CommonJS 工作组提出的一种规范，目的是为异步编程提供统一接口。
