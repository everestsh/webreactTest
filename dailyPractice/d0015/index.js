console.log("Test")
console.log("--------------------------")
'use strict'
// step 1
// const getJSON = function(url) {
//   const promise = new Promise(function(resolve, reject){
//     const handler = function() {
//       if (this.readyState !== 4) {
//         return;
//       }
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//     const client = new XMLHttpRequest();
//     client.open("GET", url);
//     client.onreadystatechange = handler;
//     client.responseType = "json";
//     client.setRequestHeader("Accept", "application/json");
//     client.send();

//   });

//   return promise;
// };

// getJSON("/posts.json").then(function(json) {
//   return json.post;
// }).then(function(post) {
//   console.log("Test")
// });

// step 2
// {
//   var a =12
//   let b = 15
//   {
//     console.log(b)
//   }
// }
// console.log(a)

// step 4
// for(let i=0; i<5; i++){
// }
// console.log(i)

// step 5
// var a = 12
// function f() {
//   console.log(a)
//   // let a ;
// }
// f()

// step 6 - 1
// var config = (function(){
//   var config = [];
//   config.push(1);
//   config.push(2);
//   config.push(5);
//   return config;
// })();
// console.log(config)
// step 6 - 2
// var config = (function(){
//   var config = [];
//   config.push(1);
//   config.push(2);
//   config.push(5);
//   return config;
// });
// console.log(config)
// console.log(config())

// step 7
// // 代替立即执行函数
// // var config = (function(){
// //   var config = [];
// //   config.push(1);
// //   config.push(2);
// //   config.push(5);
// //   return config;
// // })();
// // console.log(config)
// let  config;
// {
//   config = [];
//   config.push(1);
//   config.push(2);
//   config.push(5);
  
// };
// console.log(config)
// step 7
// function aa(){console.log(1);}
// // a();
// function f(){
//   aa();
//   function aa(){console.log(2);}
// }
// f()
// step 8

// 写法一
const promise = new Promise(function(resolve, reject) {
  try {
    throw new Error('test');
  } catch(e) {
    reject(e);
  }
});
promise.catch(function(error) {
  console.log(error);
});

// 写法二
//   const promise = new Promise(function(resolve, reject) {
//     reject(new Error('test'));
//   });
//   promise.catch(function(error) {
//     console.log(error);
//   });

console.log("--------------------------")
console.log("Test End")