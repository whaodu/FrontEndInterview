(function() {
  'use strict';

  function Sort() {
    // 起泡排序,
    this.bibbleSort = function(Arr) {
      for (var i = Arr.length - 1; i >= 0; i--) {
        for (var j = 0; j < i; j++) {
          if (Arr[j] > Arr[j + 1]) {
            swap(j, j + 1, Arr);
          }
        }
      }
      return Arr;
    };
    //选择排序 从待排序的数组中找出最小值放在最前面
    this.selectSort = function(Arr) {
      for (var i = 0; i < Arr.length; i++) {
        for (var j = i; j < Arr.length; j++) {
          if (Arr[i] > Arr[j]) {
            swap(Arr, i, j);
          }
        }
      }
      return Arr;
    }; //select结束
    // 一趟快速排序的算法是
    // 1.设置初始值x=0,y=n-1,令keyValuey=Arr[0],2.从Arr[y]开始向前遍历，如果keyValue>Arr[y],则将Arr[i]和Arr[y]交换，3.从Arr[x]向后遍历，当keyValue<Arr[x]时；进行Arr[i]和Arr[y]交换，4.结束条件为x==y;
    this.quickSort = function(Arr) {
      if (Arr.length <= 1) {
    return Arr;
  }
  var pivotIndex = Math.floor(Arr.length / 2);
  var pivot = Arr.splice(pivotIndex,1);
  var leftArr = [];
  var rightArr = [];
  for (var i = 0; i < Arr.length; i++) {
    if (Arr[i] < pivot) {
      leftArr.push(Arr[i]);
    } else {
      rightArr.push(Arr[i]);
    }
  }
  return quickSort(leftArr).concat(pivot, quickSort(rightArr));
      //quickSortOnce结束
    }; //quick结束
    this.shellSort = function(Arr) {
      var gap = Math.floor(Arr.length/2);
      while (gap > 0) {
        for (var i = 0; i < Arr.length; i++) {
          var temp = Arr[i];
          for (var j = i; j>=gap&&Arr[j-gap]>temp;j-=gap) {
            Arr[j]=Arr[j-gap];
          }
          Arr[j]=temp;
        }
        gap = Math.floor(gap/2);
      }
      return Arr;
    }; //shell结束
    //直接插入排序，更为高效的应该是折半插入排序¬≥
    this.insertSort = function(Arr) {
      if (Arr.length <= 1) {
        return Arr;
      }
      var temp;

      for (var i = 1; i < Arr.length; i++) { //从1开始，第一个不用排序
        temp = Arr[i];//用temp缓存待插入的元素
        for (var j = i; j >= 0; j--) {
          if (temp < Arr[j]) {
            Arr[j+1]=Arr[j];//当Arr[i]<Arr[j],则将Arr[j]往后移一位
          } else if (temp > Arr[j]) {
            break; //第一种：如果找到了一个比Arr[i]小的Arr[j],则退出循环，结束
          }
          //第二种，当j循环，结束
        }
        //结束j循环，将temp中缓存的待插入元素插入
        Arr[j+1] = temp;
      }

    }; //insert结束
    //swap函数
    function swap(Arr, firPos, secPos) {
      var temp = Arr[firPos];
      Arr[firPos] = Arr[secPos];
      Arr[secPos] = temp;
      return Arr; //返回生成的数组
    } //swap结束
  } //sort 构造函数
})();
