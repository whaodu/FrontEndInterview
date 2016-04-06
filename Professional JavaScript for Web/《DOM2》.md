## DOM2的模块划分
- DOM2级核心
- DOM2级视图
- DOM2级事件
- DOM2级样式
- DOM2级遍历和范围
- DOM2级HTML
## 样式
HTML中定义样式的方式有3种：`<link>`引入外部样式表文件，使用`<style>`元素定义嵌入式样式,以及使用`style`特性定义针对特定元素的样式。

### 访问元素的样式
1. `style`属性 任何支持`style`特性的HTML元素在JavaScript中都有一个对应的`style`属性。包含着通过HTML的`style`特性指定的所有样式信息，但不包含与外部样式表或嵌入样式表经层叠而来的样式。
2. 计算的样式 `getComputedStyle`
可以获取来自3者的所有计算后得到的样式,但是只读，不可写。
`getComputedStyle(div).color`
`document.defaultView.getComputedStyle(div).color`
`getComputedStyle`即是window的方法，也是`document.defaultView`的方法。接收2个参数，第一个为目标元素，第二个为伪类。
3. 操作样式表
`document.styleSheets`包含通过`<link>`与`<style>`定义的样式表。
### 元素大小
1. 偏移量`offset dimension`
包括元素在屏幕上占用的所有可见的空间，元素的可见大小由其高度和宽度决定，包括所有的内边距，滚动条和边框大小(不包括外边距)。
- `offsetHeight`
- `offsetWidth`
- `offsetLeft`
- `offsetTop`
其中，offsetTop与offsetLeft与包含元素有关，包含元素的引用保存在offsetParent属性中。
offsetParent属性不一定与parentNode的值相等。例如，<td>元素的offsetParent是作为其祖先元素的<table>元素，因为<table>是在DOM层次中距<td>最近的一个具有大小的元素。

```
//想要获取某个元素在页面上的偏移量，需要将这个元素的偏移量与其offsetParent的偏移量相加，循环到根元素
function getElementLeft(element){
	var actualLeft = element.offsetLeft;
	var current = element.offsetParent;
	while (current !== null) {
		actualLeft += current.offsetLeft;
		current = current.offsetParent;

	}
	return actualLeft;
}
```
2. 客户区大小 `client dimension`
元素的客户区大小指的是元素内容及其内边距所占据的空间大小。
- `clientWidth`
- `clientHeight`

3. 滚动大小 `scroll dimension`
- `scrollHeight` //在没有滚动调到情况下，元素内容的总高度
- `scrollWidth`
- `scrollLeft`
- `scrollTop`
4. 元素大小 `getBoundingClientRect`

## 遍历
1. `NodeIterator`
`document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT,filter,false)`
另外还有两个方法：
- `nextNode()`
- `previousNode()`

2. `TreeWalker`
`TreeWalker`是`NodeIterator`的高级版本。并额外提供了5种方法。
- `parentNode()`
- `firstChild()`
- `lastChild()`
- `nextSibling()`
- `previousSibling()`

## 范围 `document.createRange()`
在创建范围的时候，内部会为这个范围创建一个文档片段，范围所属的全部节点都被添加到了这个文档的片段之中。
