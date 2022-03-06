console.log("Test")
console.log("--------------------------")
'use strict'
// step 1 - 1
var arr = [1, 2, 3.14, 'Hello', null, true];
console.log(arr.length); // 6

var arr = [1, 2, 3];
console.log(arr.length); // 3
arr.length = 6;
console.log(arr); // arr变为[1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
console.log(arr); // arr变为[1, 2]

var arr = ['A', 'B', 'C'];
arr[1] = 99;
console.log(arr); // arr现在变为['A', 99, 'C']

var arr = [1, 2, 3];
arr[5] = 'x';
console.log(arr); // arr变为[1, 2, 3, undefined, undefined, 'x']
console.log("--------------------------")

var arr = [10, 20, '30', 'xyz'];  
console.log(arr.indexOf(10)); // 元素10的索引为0
console.log(arr.indexOf(20)); // 元素20的索引为1
console.log(arr.indexOf(30)); // 元素30没有找到，返回-1
console.log(arr.indexOf('30')); // 元素'30'的索引为2

var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(arr.slice(0, 3)); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
console.log(arr.slice(3)); // 从索引3开始到结束: ['D', 'E', 'F', 'G']

var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var aCopy = arr.slice();
console.log(aCopy); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
console.log(aCopy === arr); // false

var arr = [1, 2];
console.log(arr.push('A', 'B')); // 返回Array新的长度: 4
console.log(arr)
console.log(arr.pop())
console.log(arr)
console.log(arr.pop(), arr.pop(), arr.pop())
console.log(arr)
console.log(arr.pop()) // 空数组继续shift不会报错，而是返回undefined
console.log(arr)

var arr = [1, 2];
arr.unshift('A', 'B'); // 返回Array新的长度: 4
arr; // ['A', 'B', 1, 2]
arr.shift(); // 'A'
arr; // ['B', 1, 2]
arr.shift(); arr.shift(); arr.shift(); // 连续shift 3次
arr; // []
arr.shift(); // 空数组继续shift不会报错，而是返回undefined
arr; // []

var arr = ['B', 'C', 'A']
console.log(arr.sort())
console.log(arr) // ['A', 'B', 'C']

// reverse()把整个Array的元素给调个个，也就是反转：
var arr = ['one', 'two', 'three'];
arr.reverse();
console.log(arr) // ['three', 'two', 'one']

// splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Orale'];
// 从索引2开始删除3个元素,然后再添加两个元素:
// arr.splice(2, 3, 'Google', 'Facebook')
console.log(arr.splice(2, 3, 'Google', 'Facebook')); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
console.log(arr) // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// 只删除,不添加:
console.log(arr.splice(2,2)) // ['Google', 'Facebook']
console.log(arr) // ['Microsoft', 'Apple', 'Oracle']
console.log(arr.splice(2, 0, 'Google', 'Facebook'));  // 返回[],因为没有删除任何元素
console.log(arr); // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']

// concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array：
var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);
console.log(added); // ['A', 'B', 'C', 1, 2, 3]
console.log(arr); // ['A', 'B', 'C']

var arr = ['A', 'B', 'C'];
console.log(arr.concat(1, 2, [3, 4])); // ['A', 'B', 'C', 1, 2, 3, 4]

// join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串：

var arr = ['A', 'B', 'C', 1, 2, 3];
console.log(arr.join('-')); // 'A-B-C-1-2-3'

Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
      value  => P.resolve(callback()).then(() => value),
      reason => P.resolve(callback()).then(() => { throw reason })
    );
};

// resolve 的值是 undefined
Promise.resolve(2).then(() => {}, () => {})
Promise.resolve(2).then((saved) => { console.log(saved)}, () => {})

// resolve 的值是 2
Promise.resolve(2).finally(() => {})

// reject 的值是 undefined
Promise.reject(3).then(() => {}, () => {})

// // reject 的值是 3
// Promise.reject(3).finally(() => {})












console.log("--------------------------")
console.log("Test End")