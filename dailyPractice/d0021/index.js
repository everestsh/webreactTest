console.log("Test")
console.log("--------------------------")
'use strict'
// step 1 - 1

// sum = 0
// for (let i=0; i<=5; i++){
//   sum = sum +i
// }
// console.log("sum =", sum)
// let n =5
// console.log(n*(n+1)/2)
// let b = 2000
// let c = 2021
// console.log(b-(c-b))

// let n =4
// let m = 9
// console.log(n*(n+1)/2)
// console.log(m*(m+1)/2)

// step 2 - 1
// function solution(i) {
//   return parseFloat(i)
// }
// console.log(solution('12.13'))
// step 2 - 2
// function solution(f, places) {
//   return f.toFixed(places)
// }
// console.log(solution(12.123456789, 3))
// step 2 - 3 
// function solution(x) {
//   return Math.abs(x)
// }
// console.log(solution(-2))
let n =4
console.log(n>=2 && n<=7)

console.log(parseInt(12.34))

numerator = 1
denominator = 0
console.log(numerator/denominator)

let larger = 0
arr = [6,5,9,10,7]
// arr.forEach(element => {
//   if(element > larger) larger = element
// });

a = arr.map(element => {
  if(element > larger) larger = element
  return larger
});

console.log(larger)
console.log(a)
console.log(a.length)
console.log(a[a.length-1])

var max = arr.reduce(function (prev, cur) {
  return Math.max(prev,cur);
});
console.log(max)
// function solution(inputString) {
//   return inputString.split("").reverse().join("")
// }
// console.log(solution("abc"))

// function solution(inputString) {
//   return inputString === inputString.split("").reverse().join("")
// }

// console.log(solution("aabaa"))


// console.log( Array.from(new Array(6).keys()) )

// let total = 1
// Array.from(new Array(3).keys()).forEach( item => {
//   total = total * (item+1)
//   // console.log(item)
// })
// console.log(total)

// function solution(n) {
//   // let total = 1
//   // Array.from(new Array(n).keys()).forEach(item => {
//   //     total = total * (item + 1)
//   // })
//   // return total
//   let total = 1
//   Array.from(new Array(n).keys()).map(item => {
//       total = total * (item + 1)
//   })
//   return total
  
// }
// console.log(solution(4))

// console.log(Array(10).map((v,k) => k+1 ))
console.log("--------------------------")

function solution(a, b) {
  // Array(b).fill(a-1).map((v,k)=>k+1).map(item => {
  //     total = total * (item)
  //     console.log(item)
  // })
  // return total 
  // return Array(b-a+1).fill(a).map((v,k)=>k+a)
  let total = 1
  let arr = Array(b-a+1).fill(a).map((v,k)=>k+a) 
  arr.map( item => {
    total = total * item
    // console.log(item)
  }) 
  return total  
}
console.log(solution(2,7))


// let s = "abcgdefg"
// console.log(s[2])
let s = "abcdef"
console.log("length =",  s ? s.length-1 : -1)

// function solution(s) {
//   return  s ? s.length-1 : -1
// }

function c (s, l){
  let count = 0;
  s.split("").map( item => {
    if(item === l) count = count + 1
  })
  return count
}
console.log("count = ", c(s, 'g') )
console.log(s.indexOf('g'))

console.log("--------------------------")
let str = "abcd"
const srrrr =[]
//str.split("").reverse().join("")
// console.log(str.split("").join('**'))
str.split("").map( item => {
  srrrr.push("*")
  srrrr.push(item)
  srrrr.push("*")
  // console.log(item)
})
// srrrr.push("*")
console.log(srrrr)
console.log(srrrr.join(""))
// console.log(arr)


// let str = "abc"
// const srrrr =[]
// str.split("")


function so(s) {
  const arr = []
  s.split("").map( item => {
      arr.push("*")
      arr.push(item)
  })
  arr.push("*")
  
  return arr.join("")
}
console.log(so("ab"))

console.log("--------------------------")
console.log("Test End")