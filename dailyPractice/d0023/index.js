console.log("Test")
console.log("--------------------------")
'use strict'
// step 1
function test1(arr, x) {
  for(let i=0; i<arr.length; i++){
    if(arr[i] === x) return i
  }
}

let arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170]
x = 100
console.log(test1(arr, x))

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

// // P4 Task 17
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

// let p, n, m
// p = 2 
// n = 1 
// m = 2
// console.log(Task17(p, n, m))

// // U5 W2 P1 Task 1
// function U5W2P1_Task1(p, n, m){
//   let arr = []
//   for(let i=0; i< p; i++){
//     if(i%3 === 0){
//       // console.log("X")
//       for(let i=0; i< p; i++) {
//         // console.log("X")
//         arr.push("X")
//       }
//     }else{
//       for(let i=0; i<n; i++){
//         // console.log("A")
//         arr.push("A")
//       }
//       for(let i=0; i<m; i++){
//         // console.log("B")
//         arr.push("B")
//       }
//     }
//   }
//   return arr.join('')
// }
// let p, n, m
// p = 5 
// n = 1 
// m = 0
// console.log(U5W2P1_Task1(p, n, m))

// U5 W2 P1 Task 2
// function U5W2P1_Task2(s){
//   // if(!s) return ''
//   // return s.split('').reverse().join('')
//   let arr = s.split(''), output =[]
//   if(!s) return ''
//   arr.map(item=>{
//       output.unshift(item)
//   })
//   return output.join('')
// }
// let s
// // s = ''
// s = "abcdef"
// console.log(U5W2P1_Task2(s))

// U5 W2 P1 Task 3
// function U5W2P1_Task3(s){
//     let arr = []
//     if(!s) return []
//     for(let i =0; i < s.length; i++){
//         arr.push(s[i])
//     }
//     return arr
// }
// s = "abcdef"
// console.log(U5W2P1_Task3(s))

// U5 W2 P1 Task 4
// function U5W2P1_Task4(a, v){
//   let count = 0
//   // console.log("a =", a)
//   // console.log("a =", a[0])
//   if(!a[0]) return 0
//   for(let i=0; i < a.length; i++){
//     if(a[i] === v){
//       count = count + 1
//     }
//   }
//   return count
// }
// let a, v
// // a = []
// a = [1, 7, 2, 10, 7]
// v = 7
// console.log(U5W2P1_Task4(a, v))

// U5 W2 P1 Task 5
// function U5W2P1_Task5(a, b){
//   // console.log("a.length", a.length," b.length", b.length)
//   if(a.length != b.length) return false
//   for(let i=0; i < a.length; i++){
//     if(a[i] != b[i]){
//       return false
//     }
//   }
//   return true
// }
// let a, b 
// a = [1, 7, 2, 10, 7]
// b = [1, 7, 2, 10, 7]
// // a = [7, 2, 10, 7]
// // b = [1, 7, 2, 10, 7]
// console.log(U5W2P1_Task5(a, b))

// // U5 W2 P1 Task 6
// function U5W2P1_Task6(a, x){
//   let arr = []
//   for(let i=0; i<a.length; i++){
//     if(a[i] === x){
//       continue
//     }else{
//       arr.push(a[i])
//     }
//   }
//   return arr
// }

// let a, x 
// a = [1, 7, 2, 10, 7]
// x = 7
// console.log(U5W2P1_Task6(a, x))

// U5 W2 P1 Task 7
// function U5W2P1_Task7(a, filter_list){
//   let arr = []
//   if(!filter_list[0]) return a
//   for(let j=0; j < filter_list.length; j++){
//     for(let i=0; i<a.length; i++){

//         // console.log("a[",i, "] =", a[i], "filter_list[j] =", filter_list[j])
//         if(a[i] === filter_list[j]){
//           // i++
//           // j++
//           // continue
//           a.splice(i,1,"")
//         }else{
//           // console.log("#### a[",i, "] =filter_list[",j,"] =", a[i], filter_list[j])
//           // arr.push(a[i])
//         }
//         // console.log(a, a[i], filter_list[j])
//         // console.log("i =", i, "j =", j)
//     }
//     arr =  a.filter(item => { 
//       return item !== ''
//     })
//   }
//   return arr
// }
// let a, filter_list
// a = [1, 7, 2, 10, 7]
// filter_list =  [2, 7]
// console.log(U5W2P1_Task7(a, filter_list ))




console.log("--------------------------")
console.log("Test End")