console.log("Test")
console.log("--------------------------")
'use strict'
// step 1
// let text = "this is my text";
// let newText = text.slice(-1);
// console.log(text)
// console.log(newText)

// P4 Task 13
// function Task13(s) {
//   let arr = [], a = [], b = []
//   if(!s) return ''
//   arr = s.split('')
//   console.log(arr)
//   for(let i =0; i<= arr.length; i++){
//       if(i%2 === 0){
//           b.push(arr[i])
//           console.log(i)
//       }else  {
//         // a.push(arr[i])
//         // console.log(i)
//       }
//       // if(i%2)
//   }
//   return b.join("")
// }
// console.log(Task13("abcdefg"))

// // P4 Task 14
// function Task14(s) {
//   let arr = [], output = []
//   let vowels = ['a', 'e', 'i', 'o', 'u']
//   // console.log(s)
//   arr = s.split('')
//   for(let i=0; i<arr.length; i++){
//     if(i%2 === 0){
//       // console.log(vowels.indexOf(arr[i]))
//       if( vowels.indexOf(arr[i]) != -1 ){
//         // console.log("--- ",arr[i])
//         continue;
//       }else {
//         output.push(arr[i])
//       }
//     }
//   }
//   return output.join('')
// }
// let s
// // s = "abcd"
// s = "abcdefg"
// console.log(Task14(s))

// // P4 Task 15
// function Task15(s) {
//   let arr = [], output = []
//   let vowels = ['a', 'e', 'i', 'o', 'u']
//   // console.log(s)
//   arr = s.split('')
//   for(let i=0; i<arr.length; i++){
//     if(i%2 === 0){
//       // console.log(vowels.indexOf(arr[i]))
//       if( vowels.indexOf(arr[i]) != -1 ){
//         // console.log("--- ",arr[i])
//         continue;
//       }if(arr[i] === arr[i].toUpperCase()){
//         // continue;
//       }else {
//         output.push(arr[i])
//       }
//     }
//   }
//   return output.join('')
// }
// let s
// s = "abCdefg"
// s = "abCdefG"
// console.log(Task15(s))

// P4 Task 16
// function Task16(n, width) {
//   let arr = String(n).split('')
//   loopTime = width - String(n).length
//   console.log("loopTime =", loopTime)
//   console.log("arr =", arr)
//   if(String(n).length >= width){
//     return String(n)
//   }else{
//     for(let i=0; i < loopTime ; i++){
//       arr.unshift("0")
//     }
//     return arr.join('')
//   }

// }

// let n, width
// n =7
// width = 3
// console.log(Task16(n, width))

// P4 Task 17
function Task17(p, n, m) {
  let arr = []
  for(let i=0; i< p; i++){
    for(let i=0; i<n; i++){
      // console.log("A")
      arr.push("A")
    }
    for(let i=0; i<m; i++){
      // console.log("B")
      arr.push("B")
    }
  }
  return arr.join('')
}

let p, n, m
p = 2 
n = 1 
m = 2
console.log(Task17(p, n, m))


console.log("--------------------------")
console.log("Test End")