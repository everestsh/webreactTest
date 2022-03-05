console.log("Test")
console.log("--------------------------")
'use strict'
// step 1 - 1
var s = 'Hello, world!';
console.log(s[0])
console.log(s[6])
console.log(s[7])
console.log(s[12])
console.log(s[13])
// 需要特别注意的是，字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果：
var s = 'Hello';
console.log(s.toUpperCase()) //toUpperCase()把一个字符串全部变为大写：
console.log(s.toLowerCase()) //toLowerCase()把一个字符串全部变为小写：

// indexOf()会搜索指定字符串出现的位置：
var s = 'hello, world';
console.log(s.indexOf('world')); // 返回7
console.log(s.indexOf('World')); // 没有找到指定的子串，返回-1

// substring()返回指定索引区间的子串：
var s = 'hello, world'
console.log(s.substring(0, 5)); // 从索引0开始到5（不包括5），返回'hello'
console.log(s.substring(7)); // 从索引7开始到结束，返回'world'




console.log("--------------------------")
console.log("Test End")