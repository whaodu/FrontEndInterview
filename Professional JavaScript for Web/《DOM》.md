## 10.1 结点层次
### 10.1.1 Node类型
文档结点document是每个文档的根节点，document只有唯一子节点<html>元素。
每个结点都有一个nodeType属性，用于表明节点的类型。
>例：`document.getElementsByTagName('html')[0].nodeType`

节点的有12个类型，分别由1-12这12个数字表示。
例：`Node.ELEMENT_NODE`这个值为1。(IE中无效，因为IE没有公开Node类型的构造函数，所以为了跨浏览器兼容，还是将nodeType于相应的数值进行比较)
#### childNodes
每个结点都有一个`childNodes`属性，其中保存着一个Nodelist对象，Nodelist是一个类数组对象，用于保存一组有序的结点，可以通过位置来访问这些结点。(并非Array实例，他是基于DOM结构动态执行查询的结果)

**注意**
在DOM中childNodes共5个节点类型：Element，Text，Attr，Comment，CDATASection。可用childNodes[i].nodeType == ELEMENT 对childNodes进行过滤.
```
document.getElementsByTagName('html')[0].childNodes;  //类数组对象，保存一组有序的节点
document.getElementsByTagName('html')[0].childNodes[0]; //  
document.getElementsByTagName('html')[0].childNodes.item(0);
document.getElementsByTagName('html')[0].childNodes.length;
document.getElementsByTagName('html')[0].childNodes[0].nextSibling;  //查找第一个子节点的下一个兄弟结点
document.getElementsByTagName('html')[0].childNodes[1].previousSibling;
//查找第二个子节点的上一个兄弟结点
```

```
function convertToArray(nodes){  //将childNodes转化为数组
	var array = null;
	try {
		array = Array.prototype.slice.call(nodes,0);
	}catch(ex){
		array = new Array();
		for (var i = 0,len = nodes.length; i < len; i++) {
		    array.push(nodes[i]);
		}
	}
	return array;
}
```
#### 操作结点
1. `someNode.appendChild(newNode)`     
注意：如果传入的结点已经是该文档的一部分，那结果就是将该结点从原来的位置转移到新的位置，DOM树可以看成是由一系列指针连接起来的，但任何DOM结点也不能同时出现在文档的多个位置
2. `someNode.insertBefore(newNode,someNodeChildNode)`
3. `someNode.replaceChild(newNode,someNodeChildNode)`
4. `someNode.removeChild(someNodeChildNode)`  
在使用`replaceChild`的时候，该结点的所有关系指针都会从被他替换的结点复制过来，尽管从技术上讲，被替换的结点还在文档中，但是他在文档中已经没有自己的位置(`removeChild`也如此)
5. `someNode.cloneNode(true/false)`
6. `normalize()`

1-4操作的都是某个结点的子节点(使用parentNode属性).但是并不是所有结点都有子节点，如果在不支持子节点的节点上调用上述方法会报错。

### 10.1.2 Document类型
在浏览器中document对象是HTMLDocument(继承自Document类型)的一个实例，表示整个html页面
- `document.getElementById('id')`
- `document.getElementsByTagName("tag")`
- `document.getElementsByName('name')`

后两个返回的是`HMTLCollection`对象和childNodes一样会跟随当前文档内容的更新而更新.

- `document.write()` 在页面加载过程中则与writeln一致，如果加载完成后使用则会重写页面
- `document.writeln()`
### 10.1.3 Element类型
- `getAttribute`
- `setAttribute`
- `removeAttribute`

前2个多在自定义属性中使用。
`element.attributes`
包含一个`NamedNodeMap`,与`childNodes`一样，也是一个动态的集合。
`element.attributes`往往在遍历元素的特性时使用，如下，遍历元素特性，并将其构造成
`name="value",name="value"`的形式.
```
function outputAttributes(element){
	var pairs = new Array(),
		attrName,
		attrValue,
		i,
		len;
    for (i = 0,len=element.attributes.length; i < len; i++) {
    	attrName = element.attributes[i].nodeName;
		attrValue = element.attributes[i].nodeValue;
		pairs.push(attrName + "=\"" + attrValue + "\"");
    }
	return pairs.join(",");
}
```
### 10.1.4 Text类型
`document.createTextNode()`
### 10.1.8 DocumentFragment 类型
DOM规定文档片段 documentfragment是一种“轻量级”的文档，虽然不能把它直接添加到文档中，但是可以把它当成仓库使用。

## 10.2 DOM操作技术
```
var divs = document.getElementsByTagName('div');,
    i,
	div;
for (var i = 0; i < divs.length; i++) {
	div = document.createElement("div");
	document.body.appendChild(div);
}
```
以上代码，i永远也不会等于`divs.length`,因为每次比较时，都将会对现有的div元素进行查询，因此每次`div.length`会随着i一起递增，永不相等。
因此要想迭代`Nodelist`及其近亲`NamedNodeMap`和`HTMLCollection`,则必须考虑到这三者都是动态的集合，会实时更新。所以，我们因该尽量减少对这三者的访问，而是将其值用变量缓存起来。
## 结语
本章主要是JavaScript对DOM1级的实现。
几个常用的选择器注释：
```
document.getElementById('id'); //只可以通过document调用
document.getElementsByTagName('tag');//只可以通过document调用
getElementsByName('name')  //可以通过document与所有的html元素调用
getElementsByClassName('class');//可以通过document与所有的html元素调用
```
