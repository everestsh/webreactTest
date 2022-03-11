console.log("Test")
console.log("--------------------------")
'use strict'
// step sTest 1
// const a = [1,2,3,4,5]
// const obj ={
//   name: 'mj',
//   age : 35
// }
// let total = 0
// while(total<=2){
//   console.log(total)
//   if (total === 10) break;
//   total++
// }
// console.log(total)

// const result  = whatever()
// function whatever(){
//   while(true){
//     return 0
//   }
// }
// step sTest 2
// const a = [1,2,3,4,5]
// const obj ={
//   name: 'mj',
//   age : 35
// }
// console.log("--------------------------")
// for (let i = 0; i < a.length; i++) {
//   console.log( a[i])
// }
// console.log("--------------------------")
// for(let number of a ){
//   console.log(number)
// }
// console.log("--------------------------")
// let i = 0;
// while(i < a.length){
//   console.log(a[i])
//   i++
// }
// console.log("--------------------------")
// let j = 0;
// while(true){
//   console.log(a[j])
//   if(j>=a.length) break;
//   j++
// }
// console.log("--------------------------")
// step sTest 3

// adjacentElementsProduct
// function adjacentElementsProduct(inputArray){
//   let output =[]
//   let larger = Number.NEGATIVE_INFINITY
//   console.log(Number.MIN_VALUE > -12)
//   for(let i=1; i<inputArray.length; i++){
//     output.push(inputArray[i-1] * inputArray[i])
//   }
//   output.forEach( item => {
//     if(item > larger){
//       larger = item
//     }
//   })
//   return larger
// }

// let inputArray
// // inputArray = [3, 6, -2, -5, 7, 3]
// inputArray = [-23, 4, -3, 8, -12]
// console.log(adjacentElementsProduct(inputArray))

// step sTest 2 ############################################
// const a = [1,2,3,4,5,6,7,8]
// const returnValue = a.slice(1,4);
// console.log("a =",a)
// console.log("returnValue =",returnValue)

// Step 3 name_string
// function name_string(name){
//   const b = "Edabit"
//   result = name + b
//   return result
//   // return "OK"
// }
// const name = "MJ_G"
// console.log(name_string(name))

// step sTest 2 ############################################
//  diffMaxMin
// function diffMaxMin(arr) {
//   let largest = -Number.MAX_VALUE
//   let least = Number.MAX_VALUE
//   for(let i=0; i<arr.length; i++){
//     if(arr[i] > largest ){
//       largest = arr[i]
//     }
//     if(arr[i] < least){
//       least = arr[i]
//     }
//   }
// 	return largest - least
// }
// let arr
// arr = [10, 4, 1, 4, -10, -50, 32, 21]
// console.log( diffMaxMin(arr) )

// step sTest 2 ############################################
//  getFirstValue
// function getFirstValue(arr) {
// 	for(let i = 0; i < arr.length; i++){
//     // console.log(typeof(arr[i]))
//     if(typeof(arr[i]) !== 'number') return -1
//   }
//   return arr[0]
// }
// arr = [10, 4, 1, 4, -10, -50, 32, 21]
// console.log( getFirstValue(arr) )


// U5 W2 P1 Task 8
// function U5W2P1_Task8(n, m){
//   let arr = [], output = []
//   for (let i=0; i<n; i++){
//       for(let j=0; j<m; j++){
//           arr.push("A")
//       }
//       output.push(arr.join(''))
//       arr=[]
//   }
//   return output
// }

// let n, m
// n = 3
// m = 1
// console.log(U5W2P1_Task8(n, m ))

// U5 W2 P1 Task 9
// function U5W2P1_Task9(n, m){
//   // length = n.length
//   if(n.length !== m.length) return -1
//   for(let i=0; i <n.length; i++){
//       let count = 0
//       // console.log(n.push(n.shift()))
//       // console.log("t")
//       for(let j=0; j<m.length; j++ ){
//         // console.log("X")
//         // console.log("n, m =", n[j], m[j])
//         if(n[j] === m[j]){
//           count += 1;
//         }
//       }
//       console.log(n, count)
//       if(count === 4){
//         return i
//       }
//       // console.log(count)
      
//       // if(count)
//       n.push(n.shift())
      
//   }
//   return -1
// }
// function U5W2P1_Task9(elements){
//   length = elements.length
//   // if(n.length !== m.length) return -1
//   for(let i=0; i <length; i++){
//       let count = 0
//       // console.log(n.push(n.shift()))
//       // console.log("t")
//       for(let j=0; j<length; j++ ){
//         // console.log("X")
//         // console.log("n, m =", n[j], m[j])
//         if(elements[j] === j+1){
//           count += 1;
//         }
//       }
//       console.log(elements, count)
//       if(count === length){
//         return i
//       }
//       // console.log(count)
      
//       // if(count)
//       elements.push(elements.shift())
      
//   }
//   return -1
// }
// function solution(elements) {
//   length = elements.length
//   for(let i=0; i <length; i++){
//       let count = 0
//       for(let j=0; j<length; j++ ){
//         if(elements[j] === j+1){
//           count += 1;
//         }
//       }
//       if(count === length){
//         return i
//       }
//       elements.push(elements.shift())
//   }
//   return -1
// }

// let n,m , elements
// // n = [1, 4, 2, 3]
// // n = [4, 1, 2, 3, 5]
// // n = [4, 1, 2, 3]
// // elements = [2, 3, 4, 1]
// elements = [3, 4, 5, 1, 2]
// // m = [1, 2, 3, 4]
// console.log(U5W2P1_Task9(elements ))

// U5 W2 P1 Task 10
function U5W2P1_Task10(digits){
  // console.log(Number(digits.join('')))
  let num = ''
  for(let i=0; i<digits.length; i++){
    num = num + digits[i]
  }
  console.log(num)
  // console.log( Number(digits.join(''))+1 )

  // console.log(digits[0])
  
  if(digits[0] === undefined) return undefined
  for( let number of digits){
    // console.log(typeof(number) === "number")
    if((typeof(number) !== "number") || number%1 !== 0) return undefined
  }
  let arr = String(Number(num)+1).split('')
  // let arr = String(Number(digits.join(''))+1).split('')
  // console.log(arr)
  return arr.map( item => Number(item))
}

function solution(digits) {
  if(digits[0] === undefined) return undefined
  for( let number of digits){
      // console.log(typeof(number) === "number")
      if((typeof(number) !== "number") || number%1 !== 0) return undefined
  }
  let arr = String(Number(digits.join(''))+1).split('')
  return arr.map( item => Number(item))
}
let digits
// digits = [0,1,2,3]
// digits = [0,1,2,0]
digits = [9,9,9,9]
// digits = [9,9,9,9.1]
// digits = [9,9,9,undefined]
// digits = [undefined,9,9,undefined]
// digits = [0]
// digits = [0,0,0]
// digits = [0,0,1]
// digits = []
console.log( U5W2P1_Task10(digits) )

console.log("--------------------------")
console.log("Test End")