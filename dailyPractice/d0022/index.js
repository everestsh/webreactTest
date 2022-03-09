console.log("Test")
console.log("--------------------------")
'use strict'
// step 1
// const a  = [1,2,3,4,5,6]
// // const b = a
// const b = [...a]
// console.log("a =",a)
// console.log("b =",b)

// function changeIndexOne(array){
//   array[1] = 7
// }

// changeIndexOne(a)
// console.log("a =",a)
// console.log("b =",b)
// let one = 1;

// const objA = {
//   name: 'jaco',
//   age: 23
// }

// // const objB = objA
// const objB = {...objA}


// console.log("objA =",objA)
// console.log("objB =",objB)

// objA.name = 'MJ.G'

// console.log("objA =",objA)
// console.log("objB =",objB)

// step 2
// let v = null // false
// let v = ''   //false
// let v = undefined   //false
// let v = 'i'   //true
// let v = 1   //true
// let v = {}   //true
// let v = []   //true
// if (v){
//   console.log(true)
// }else{
//   console.log(false)
// }

// step 3
// const obj = undefined
// // const obj = {name:"ggg"}
// // if( obj.name =="jacob"){
// if(obj && obj.name =="jacob"){
//   console.log(obj.name)
// }else{
//   console.log("name is not jacob")
// }
// step 4
// const a = 1 + 2 +'7' + '9'
// console.log("a is 1 + 2 +'7' + '9' =", a)

// step 5
// function solution(s, n) {
//   if(n<0) return "none"
//   if(!s[n]) return "none"
//   return s[n]
// }
// return s.toLowerCase() === s ? true : false
// function solution(s, letter) {
//   let count = 0;
//   s.split("").map( item => {
//       if(item === letter) count = count + 1
//   })
// return count
// }
// function solution(s) {
//   return  s ? s.length-1 : -1
// }
// function solution(s) {
//   return s ? s[s.length-1] : "none"
// }
// function solution(s) {
//   return s[0]===s[1]
// }
// function solution(s) {
//   return s[0] === s[s.length-1]
// }

// function solution(s) {
//   return s[s.length-2] === s[s.length-1]
// }
// function solution(s) {
//   return s.toLowerCase()
// }
// function solution(s) {
//   return s.toUpperCase() === s 
// }
// function solution(s) {
//   const arr = []
//   s.split("").map( item => {
//       arr.push("*")
//       arr.push(item)
//       arr.push("*")
//   })
  
//   return arr.join("")
// }
// function solution(s) {
//   const arr = []
//   s.split("").map( item => {
//       arr.push("*")
//       arr.push(item)
//   })
//   arr.push("*")
  
//   return arr.join("")
// }

// function solution(s) {
//   let larger = ''
//   const arr = s.split("")
//   arr.forEach(element => {
//       if(element > larger) larger = element
//   })
//   return larger
// }
// function solution(n) {
//   return Array(n).fill('A').join("")
// }

// Task 6
function solution(x) {
  let output = 0 
  while(x){
      let i = 0, sum = 1
      sum = sum * (x +i) 
      if ( !(x%7) ){
          output = sum
          return output
      }
  }
}
console.log(  !(13%4))
console.log(7 % 7 === 0)
console.log(solution(7))


console.log("--------------------------")
console.log("Test End")