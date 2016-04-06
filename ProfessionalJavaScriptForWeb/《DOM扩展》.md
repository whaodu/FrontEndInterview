## 11.1 选择符
- `querySelector()`
- `querySelectorAll()`

## 11.2 元素遍历
对于元素间的空格，IE9及之前的版本不会返回文本节点，而其他所有浏览器都会返回文本节点。这样就导致了使用`childNodes`与`firstChild`等属性时的行为不一致。为了弥补这一差异，而同时又保证DOM规范不变，Element Traversal 规范新定义了一组属性。
```
	childElementCount //返回子元素(不包括文本节点和注释)的个数
	firstElementChild //指向第一个子元素
	lastElementChild  //指向最后一个元素
	previousElementChild //指向前一个同辈元素
	nextElementSibling  //指向后一个同辈元素
```
## 11.3 HTML5

### 与类相关的扩充
1. 新增`getElementsByClassName('class')`  
接收一个参数，即一个包含一或多个类名的字符串，
返回带有指定类的所以样元素的`NodeList`。传入多个类名时，类名的先后顺序不重要。
2. 新增`classList`
```
var div = document.getElementById('div'); //获取元素
var classNames = div.className.split(/\s+/);  //将元素的class属性划分为数组
for (var i=0, var len=classNames.length; i < len; i++) {
	if (classNames[i] == "user") {  //遍历比对，找到位置
		break;
	}
}
classNames.splice(i,1);  //删除类名
div.className = classNames.join(" "); 将剩下的类名拼接成字符串并重新设置
```

以往删除一个类名需要如上述代码所示。
`classList`还定义了4种方法
- add(value)
- containers(value)
- remove(value)
- toggle(value)

### 焦点管理
元素获得焦点的方式有页面加载，用户输入和在代码中使用`focus()`方法。
1. `document.activeElement`  
这个属性会始终引用DOM中当前获得了焦点的元素。默认情况下，文档刚刚加载完成，指向的是body元素，加载期间为null。
2. `document.hasFocus()`  
用于确定文档是否获得了焦点。

### 插入标记
1. `innerHTML`属性
2. `outerHTML`属性
3. `insertAdjacentHTML`方法

## 11.4 专有扩展
### children属性
由于IE9之前的版本与其他浏览器在处理文本节点中的空白符时有差异，因此出现了children属性。这个属性是HTMLCollection的实例，只包含元素中同样还是元素的子节点。除此之外与childNodes没有什么区别。
### contains()方法
出发点：在实际开发中，经常需要知道某个节点是不是另外一个节点的后代。
调用contains()方法的应该是祖先节点，这个方法接收一个参数，也就是要检测的后代节点。返回布尔值。
### 插入文本
1. `innerText` 属性
2. `textContent`属性
3. `outerText`属性
