console.log("Test")
console.log("--------------------------")
'use strict'
// step sTest 1

// console.log("--------------------------")

// // step sTest 1 ############################################
// function sTest(a, b, c) {
//     return larger
// }
// let a, b, c
// a = 33
// b = 71
// c =5426
// console.log(sTest(a,b,c))

// ############################################################


// for循环最常用的地方是利用索引来遍历数组：
// for循环的3个条件都是可以省略的，如果没有退出循环的判断条件，就必须使用break语句退出循环，否则就是死循环：
var x = 0;
for (;;) { // 将无限循环下去
    if (x > 100) {
        break; // 通过if判断来退出循环
    }
    x ++;
}

// for ... in
// for循环的一个变体是for ... in循环，它可以把一个对象的所有属性依次循环出来：
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    console.log(key); // 'name', 'age', 'city'
}
// 要过滤掉对象继承的属性，用hasOwnProperty()来实现：
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(key); // 'name', 'age', 'city'
    }
}
// 由于Array也是对象，而它的每个元素的索引被视为对象的属性，因此，for ... in循环可以直接循环出Array的索引：
var a = ['A', 'B', 'C'];
for (var i in a) {
    console.log(i); // '0', '1', '2'
    console.log(a[i]); // 'A', 'B', 'C'
}
// 请注意，for ... in对Array的循环得到的是String而不是Number。




console.log("--------------------------")
console.log("Test End")