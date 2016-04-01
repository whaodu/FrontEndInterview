//行编辑器
function lineEdit(str) {
  var stack = [];
  for (var i = 0; i < str.length; i++) {
    switch (str.charAt(i)) {
      case "#": //#代表退一个
        console.log("出栈" + stack.pop());
        break;
      case "@": //清空
        console.log("清空" + stack);
        stack = [];
        break;
      default: //压入
        stack.push(str.charAt(i));
    }
  }
  console.log(stack.join(""));
}
lineEdit("nihaoyaa#wohenhao");


//表达式求值
/*
四则运算的法则
1.先乘除，后加减
2. 从左算到右
3. 先括号内，再括号外
*/
function evaluateExpression(str) {
  var num = {
    "+": 0,
    "-": 1,
    "*": 2,
    "/": 3,
    "(": 4,
    ")": 5,
    "#": 6
  };
  var pri = [  //各个运算符的优先级
    [1, 1, -1, -1, -1, 1, 1],
    [1, 1, -1, -1, -1, 1, 1],
    [1, 1, 1, 1, -1, 1, 1],
    [1, 1, 1, 1, -1, 1, 1],
    [-1, -1, -1, -1, -1, 0, null],
    [1, 1, 1, 1,null, 1, 1],
    [-1,-1,-1,-1,-1,null,0]
  ];

  function precede(firChar, secChar) { //比较输入的两个字符的优先级
    var firNum = num[firChar],
      secNum = num[secChar];
    return pri[firNum][secNum];
  }
  var opNum = [], //操作数
    opChar = ["#"], //操作符
    i = 0;
  while (str.charAt(i)!="#" || opChar[opChar.length-1]!="#") {  //查询到最后的#则表示运算表达式结束
    var numPush=""; //要压入的数字 可能是任何位数的数字
    while (!(str.charAt(i) in num)) {
      numPush+=str.charAt(i++); //拼接数字
    }
    if (numPush!=="") {
      opNum.push(numPush); //如果numPush不为空，则压入
    }
    if ((str.charAt(i) in num)){ //如果当前位为运算符
      var tmp = opChar[opChar.length - 1];
      switch (precede(opChar[opChar.length - 1],str.charAt(i))) { //调用precede方法比较运算符优先级
        case -1: //小于，则将运算符压入
          opChar.push(str.charAt(i++));
          break;
        case 0:
          opChar.pop(); //将运算符推出
          i++;
          break;
        case 1:
        var firstNum = opNum.pop(),
            secondeNum =  opNum.pop(),
            optionChar = opChar.pop();
          var result = eval(secondeNum+optionChar+firstNum); //拼接运算表达式
          opNum.push(result);
          break;
      }
    }
  }
  return opNum[opNum.length-1];
}
console.log(evaluateExpression("1+2+2*(2+6/2)#"));
