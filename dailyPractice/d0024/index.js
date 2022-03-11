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
function diffMaxMin(arr) {
  let largest = -Number.MAX_VALUE
  let least = Number.MAX_VALUE
  for(let i=0; i<arr.length; i++){
    if(arr[i] > largest ){
      largest = arr[i]
    }
    if(arr[i] < least){
      least = arr[i]
    }
  }
	return largest - least
}
let arr
arr = [10, 4, 1, 4, -10, -50, 32, 21]
console.log( diffMaxMin(arr) )
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


console.log("--------------------------")
console.log("Test End")