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

// // Sprint 2 GCA Test 2
// function U5Sprint2GCATest2 (s){
//   let a = s , b =''
//   const length = s.length
//   console.log("len = ", length)
//   // console.log("a = ", a)
//   const output = []
//   let  btmp , arr
//   // console.log(a)
//   if(length < 2) return  "result --- "
//   for(let i=length; i>0; i--){
    
//     console.log("1 ", i, a, b)
//     // if(a.length===2 && a === a.split('').reverse().join('') ){
//     //   return  "result --- "
//     // }else{
//     //   return "result --- " + a
//     // }
//     if(a === a.split('').reverse().join('')) {
//       console.log("########  2", output)
//       aLen = a.length
//       if(a.length === 1) return  "result --- " + a
//       if(a.length === 2) {
//         i = i - 2
//         continue
//       }
//       if(i === 0 ) return output.join('')
//       i = output.length
//       b = output.join('')
//       a = b
//       b = ''
//       for(let j=0; i < output.length; j++){
//         output.pop()
//       }


//       // i = length - a.length
//       console.log("######## shenxia i = ", i, aLen)
//       // if(i === length) {
//       //   console.log("i= ", i, a)
//       //   return "ok"
//       // }
      
//       // console.log("in a = ", a) 
//       continue;
//     }else{
//       if(length < 2) return  "result --- ";
//       if(length === 2) { return  "result - n-- " + a ; }

//       arr = a.split('')
//       btmp = arr.pop()
//       output.unshift(btmp) 
//       console.log("output = ",output.join(''), "i =",i)
//       a = arr.join('')
//       b = output.join('')
//       // console.log("end a = ", a)
//     }
//   }
//   return "result --- " +output.join('')
// }
 
// let s
// // s = "abbaabbaabba"
// // s = "abbaabbaabbac"
// // s = "abbaabbaabbacb"  // ok cb
// s = "abbaabbaabbacbb"
// // s = "abbaabbaabbacbbce"
// // s = "a"
// // s = "aa"
// //  s = "ab"
// //  s = "aab"
// //  s = "abab"
// //  s = "abbab"
// console.log( U5Sprint2GCATest2(s) )


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



// U5 W2 P1 Task 11
function U5W2P1_Task11(a, b){
    console.log()
}
let a , b ;
a = "1001";
b = '11';

console.log(U5W2P1_Task11(a,b))

console.log("--------------------------")
console.log("Test End")