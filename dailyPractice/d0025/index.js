console.log("Test")
console.log("--------------------------")
'use strict'
// step sTest 1

// console.log("--------------------------")

// step sTest 1 ############################################
// function solution(numbers, left, right) {
// }
// Input:
// numbers: [8, 5, 6, 16, 5]
// left: 1
// right: 3
// Expected Output:
// [false, false, true, false, true]
// numbers: [100]
// left: 1
// right: 1000
// Expected Output:
// [true]

// Sprint 2 GCA Test 1
// function U5Sprint2GCATest1 (numbers, left, right){
//   const output = []
//   for(let i=0, factor = 0; i< numbers.length; i++){
//     // console.log(numbers[i])
//     factor = numbers[i] / (i+1);
//     surplus =  numbers[i]%(i+1)
//     // console.log(surplus)
//     // factor = 3
//     if(surplus)  {
//       output.push(false)
//       continue;
//     }
//     if(factor >= left && factor<=right) {
//       output.push(true);
//       continue;
//     }
//     output.push(false)
//     console.log("factor =", factor, typeof(factor));
//   }
//   return  output
// }
// let numbers, left, right
// // numbers = [8, 5, 6, 16, 5]
// numbers = [1, 2, 3, 4, 5]
// left = 1 
// right = 1
// console.log( U5Sprint2GCATest1 (numbers, left, right) )

// Sprint 2 GCA Test 2
function U5Sprint2GCATest2 (s){
  let a = s
  const output = []
  let  newarr , arr
  console.log(a)
  for(let i=0; i< s.length; i++){
    if(s === a.split('').reverse().join('')) {
      output.unshift()
    }
    arr = a.split('')
    newarr = arr.pop()
    a = arr.join('')
    console.log("a = ", a)
    console.log(newarr)
  }
  return output.join('')
}

let s
s = "abbaabbaabbac"
console.log( U5Sprint2GCATest2(s) )


// step sTest 2 ############################################
// function solution(s) {
// }
// Input:
// s: "aaacodedoc"
// Expected Output:
// ""
// Input:
// s: "codesignal"
// Expected Output:
// "codesignal"
// Input:
// s: ""
// Expected Output:
// ""
// Input:
// s: "a"
// Expected Output:
// "a"
// Click the "Run Tests" button to see output and console logs.
// Input:
// s: "abbab"
// Expected Output:
// "b"
// Click the "Run Tests" button to see output and console logs.
// step sTest 2 ############################################



//  diffMaxMin



// U5 W2 P1 Task 10
// function U5W2P1_Task10(digits){
 
console.log("--------------------------")
console.log("Test End")