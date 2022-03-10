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
// function solution(x) {
//   let output = 1 
//   let i = 0
//   if (x%7 === 0) return x
//   while(x){
//     console.log("i =", i, "x =", x, "output = ", output)
//     output = output * (x +i) 
//       if ( !(output%7) ){
//           console.log("test")
//           return output
//       }
//       // i += 1
//       i++
//   }
// }
// // setTimeout("test()","5000");
// // console.log(  !(13%4))
// // console.log(7 % 7 === 0)
// console.log(solution(7))

// Task 7
// a = [1, 2, 3, 4, 5]
// // console.log(a.shift())
// let b = [], output = []
// b.push(a.shift())
// // console.log(a)
// // console.log(b)
// b.push(a.pop())
// // console.log(a)
// // console.log(b)
// output.push(a)
// output.push(b)
// console.log(output)

// P4 Task 8
// a = [1, 2, 3, 4]
// a = [1, 2, 3]
// x = 99
// // console.log(Math.floor(a.length/2))
// // a.splice(2, 0, x)
// a.splice(Math.floor(a.length/2), 0, x)
// console.log(a)

// function solution(a, x) {
//   a.splice(Math.floor(a.length/2), 0, x)
//   return a
// }

// P4 Task 9

// a = [1, 2, 3]
// console.log(a.indexOf(20))
// function solution(a, v) {
//   return a.indexOf(v) === -1 ?   false : true
// }
// P4 Task 10

// a = [1, 2, 3]

// console.log(
//   a.map( item => {
//     return item * 2
//   })
// )

// function solution(a) {
//   return a.map( item => {
//       return item * 2
//   })
// }

// P4 Task 11

// a = [0,1,2,3,4,5,6]

// // let sum = a.reduce((p, c)=> p+c, 0)
// let sum = a.reduce((p, c)=> {
//   console.log("p =", p, " c =", c)
//   return p+c
// }, 0)
// console.log("sum =", sum)

// P4 Task 12

// console.log(Array(5).fill('A').map((v, k)=>k+1))
// console.log(Array(5).fill('A'))

// function Task11(n, m) {
//   arr = []
//   // arr.push()
//   // arr.push()
//   arr = Array(n).fill('A').concat(Array(m).fill('B'))
//   return arr.join("")
// }
// console.log(Task11(3,5))

// P4 Task 13
function Task13(s) {
  let arr = [], a = [], b = []
  if(!s) return ''
  arr = s.split('')
  console.log(arr)
  for(let i =0; i<= arr.length; i++){
      if(i%2 === 0){
          b.push(arr[i])
          console.log(i)
      }else  {
        // a.push(arr[i])
        // console.log(i)
      }
      // if(i%2)
  }
  return b.join("")
}
console.log(Task13("abcdefg"))


console.log("--------------------------")
console.log("Test End")