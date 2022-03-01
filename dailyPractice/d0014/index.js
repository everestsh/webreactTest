console.log("Test")
console.log("--------------------------")
'use strict'
// 1
// new Promise((resolve, reject)=>{
//   resolve(1);
//   console.log(2)
// }).then(r=>{
//   console.log(r)
// })


// 2
new Promise((resolve, reject) => {
  return resolve(1);
  // 后面的语句不会执行
  console.log(2);
})
.then(r=>{
  console.log(r)
})
console.log("--------------------------")
console.log("Test End")