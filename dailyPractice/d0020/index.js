console.log("Test")
console.log("--------------------------")
'use strict'
// step 1 - 1

// var xiaoming = {
//   name: '小明',
//   birth: 1990,
//   school: 'No.1 Middle School',
//   height: 1.70,
//   weight: 65,
//   score: null
// };
// console.log(xiaoming.name);
// console.log(xiaoming.birth);

// var xiaohong = {
//   name: '小红',
//   'middle-school': 'No.1 Middle School'
// };
// console.log(xiaohong['middle-school']);
// console.log(xiaohong['middle-school']);
// console.log(xiaohong['name']);
// JavaScript对象的所有属性都是字符串，不过属性对应的值可以是任意数据类型

// step 2
// var xiaoming = {
//   name: '小明'
// };
// console.log(xiaoming.age); // undefined
// xiaoming.age = 18; // 新增一个age属性
// console.log(xiaoming.age); // 18
// delete xiaoming.age; // 删除age属性
// console.log(xiaoming.age); // undefined
// delete xiaoming['name']; // 删除name属性
// console.log(xiaoming.name); // undefined
// delete xiaoming.school; // 删除一个不存在的school属性也不会报错
// console.log("xiaoming.schoo = ",xiaoming.schoo)

// step 3
var xiaoming = {
  name: '小明',
  birth: 1990,
  school: 'No.1 Middle School',
  height: 1.70,
  weight: 65,
  score: null
};
console.log("'name' in xiaoming =", 'name' in xiaoming); // true
console.log("'grade' in xiaoming = ", 'grade' in xiaoming ); // false
// 因为toString定义在object对象中，而所有对象最终都会在原型链上指向object，所以xiaoming也拥有toString属性。
console.log("'toString' in xiaoming =", 'toString' in xiaoming)

// step 4
// 要判断一个属性是否是xiaoming自身拥有的，而不是继承得到的，可以用hasOwnProperty()方法：
var xiaoming = {
  name: '小明'
};
console.log("xiaoming.hasOwnProperty('name') = ", xiaoming.hasOwnProperty('name')); // true
console.log("xiaoming.hasOwnProperty('toString') = ", xiaoming.hasOwnProperty('toString')); // false

// var age = 20;
// if (age >= 18) { // 如果age >= 18为true，则执行if语句块
//     alert('adult');
// } else { // 否则执行else语句块
//     alert('teenager');
// }

// for循环的一个变体是for ... in循环，它可以把一个对象的所有属性依次循环出来：
var o = {
  name: 'Jack',
  age: 20,
  city: 'Beijing'
};
for(var key in o) {
  if (o.hasOwnProperty(key)) {
    console.log(key); // 'name', 'age', 'city'
  }
}

var a = ['A', 'B', 'C'];
for (var i in a) {
    console.log(i); // '0', '1', '2'
    console.log(a[i]); // 'A', 'B', 'C'
}
var x = 0;
var n = 99;
while (n > 0) {
    x = x + n;
    n = n - 2;
}
console.log(x);
var n = 0;
do {
    n = n + 1;
} while (n < 100);
console.log(n); // 100

// Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
// const p = Promise.all([p1, p2, p3]);
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

// 生成一个Promise对象的数组
const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
  // return getJSON('/post/' + id + ".json");
  return console.log('/post/' + id + ".json")
});

Promise.all(promises).then(function (posts) {
  // ...
}).catch(function(reason){
  // ...
});


console.log("--------------------------")
console.log("Test End")