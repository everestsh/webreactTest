console.log("Test")
console.log("--------------------------")
'use strict'

// 1
// const p1 = new Promise(function(resolve, reject){
//     setTimeout(() => reject(new Error('fail')), 3000)
// })

// const p2 = new Promise(function(resolve, reject){
//     setTimeout(()=>resolve(p1), 1000)
// })

// p2.then(result => console.log(result))
//     .catch(error => console.log(error))

// 2
// function range(start, end) {
//     return Array.from({ length: end - start + 1 }, (_, i) => i)
//   }
// for (i of range(1, 5)) {
//     console.log(i);
// }
// for (var value of range(0, 3)) {
//     alert("Ding! at floor #" + value);
// }

// 3
function* range(start, stop) {
    for (var i = start; i < stop; i++)
      yield i;
  }

var iter = range(0,5)
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log("--------------------------")
console.log("Test End")