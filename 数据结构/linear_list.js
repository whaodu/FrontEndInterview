function logLinear(){//构造链表并输出
  // 构造链表 并输出链表的数据
  function linearNode(value,next){ //构造函数 构造线性表的节点结构
    this.value = value;
    this.next = next; //指向下一个节点的指针
  }
  var linearHeadNode = new linearNode(null), //标识链表
      node = linearHeadNode; //node 用来作为存储临时结点
  for (var i = 0; i < 20; i++) {
    node.next = new linearNode(i);
    node = node.next;
  }
  node = linearHeadNode;
  while (node.next) {
  console.log(node.next);
  node = node.next;
  }
}


function mathlinear(){ //进行一元多项式的计算
  // 构造链表 并输出链表的数据
  function linearNode(qa,qb,next){ //构造函数 构造线性表的节点结构
    this.qa = qa;
    this.qb = qb;
    this.next = next; //指向下一个节点的指针
  }
  var linearListA = new linearNode(), //标识链表
      linearListB = new linearNode(),
      linearListC = new linearNode(),
      nodeC = linearListC,
      nodeB = linearListB,
      nodeA = linearListA; //node 用来作为存储临时结点
  for (var i = 0; i < 4; i++) {
    nodeA.next = new linearNode(i, i+3);
    nodeB.next = new linearNode(i+2, i+2);
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }
  nodeA = linearListA;
  nodeB = linearListB;
  while (nodeA.next&&nodeB.next) {
    if (nodeA.next.qb<nodeB.next.qb) {
      nodeC.next = nodeA.next;
      nodeC = nodeC.next;
      nodeA = nodeA.next;
    }else if (nodeA.next.qb===nodeB.next.qb) {
      nodeC.next = nodeA.next;
      nodeC.next.qa = nodeA.next.qa+nodeB.next.qa;
      nodeC = nodeC.next;
      nodeB = nodeB.next;
      nodeA = nodeA.next;
    }else {
      nodeC.next = nodeB.next;
      nodeC = nodeC.next;
      nodeB = nodeB.next;
    }
  }
  nodeC = linearListC;
  while (nodeC.next) {
    console.log("系数："+nodeC.next.qa +"指数："+nodeC.next.qb);
    nodeC = nodeC.next;
  }
}
