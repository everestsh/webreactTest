console.log("Test")
console.log("#####################################")
'use strict'
// step sTest 1

// console.log("--------------------------")

// // step sTest 1 ############################################
// arrowFunc = (hours, minutes) => {
// 	return hours*3600 + minutes*60
// }
// let hours, minutes
// hours = 1
// minutes = 3
// console.log( arrowFunc(hours, minutes) )
// ############################################################


// arrowFunc = (str) => {
// 	return (str)
// }
// let str
// str = "1"
// console.log( arrowFunc(str) )

// console.log(typeof(4/2))
// console.log(typeof(4/2))


// U5W2P1_Task1
// // // step sTest 1 ############################################
// function U5W2P1_Task1 (p, n, m) {
//     let returnString = '';
//     console.log(Array(n).fill("A").join(''))
//     console.log(Array(m).fill("B").join(''))
//     let as = Array(n).fill("A").join('')
//     let bs = Array(m).fill("B").join('')
//     let xs = Array(p).fill("X").join('')
//     console.log(p)
//     for(let copyNumber=0; copyNumber<p; copyNumber++){
//         console.log(copyNumber, copyNumber%3 === 0)
//         copyNumber%3 === 0 ? returnString += xs : returnString += as + bs 
//     }
//     // for(let i=0; i<p; i++){
//     //     console.log(i)
//     // }
//     return  returnString
// }
// let n, m, p
// p = 3
// n = 1
// m = 1
// console.log( U5W2P1_Task1(p, n, m) )
// // ############################################################
// console.log("------------Test start---------------")
// // U5W2P1_Task2 220321
// function U5W2P1_Task2 (s) {
//     let returnArray = [];
//     let inputArray = s.split('')
//     // console.log(inputArray)
//     if(!s) return ''
//     inputArray.map( item => {
//         returnArray.unshift(item)
//     })
//     return returnArray.join('')
// }
// let s
// s = "abcdef"
// console.log( U5W2P1_Task2(s) )
// console.log("------------Test   End---------------")

// console.log("------------Test start---------------")
// // U5W2P1_Task3 220321
// function U5W2P1_Task3 (s) {
//     let returnArray = [];
//     if(!s) return []
//     for(let i=0; i<s.length; i++){
//         returnArray.push(s[i])
//     }
//     return returnArray
// }
// let s
// s = "abcdef"
// console.log( U5W2P1_Task3(s) )
// console.log("------------Test   End---------------")


// console.log("------------Test start---------------")
// // U5W2P1_Task4 220321
// function U5W2P1_Task4 (a, v) {
//     let count = 0;
//     if(!a[0]) return 0
//     for(let i=0; i<a.length; i++){
//         if(a[i] === v) {
//             // console.log(i, count)
//             count =  count +1
//         }
//     }
//     return count
// }
// let a, v
// a = [5, 3, 6, 1, 5, 1, 1, 3, 5, 2]
// v = 1
// // a = [1, 7, 2, 10, 7]
// // v = 7
// console.log( U5W2P1_Task4(a, v) )
// console.log("------------Test   End---------------")

// console.log("------------Test start---------------")
// // U5W2P1_Task5 220321
// function U5W2P1_Task5 (a, b) {
//     let count = 0;
//     if(a.length !== b.length) return false
//     let as = a.join('')
//     let bs = b.join('')
//     // console.log(as, bs, as === bs)
//     if(as === bs) {
//         return true
//     }else {
//         return false
//     }
// }
// let a, b
// a = [1, 7, 2, 10, 7]
// b = [1, 7, 2, 10, 7]
// // a = [66, 79, 87, 73, 97]
// // b = [87, 78, 4, 22, 56]
// console.log( U5W2P1_Task5(a, b) )
// console.log("------------Test   End---------------")

// console.log("------------Test start---------------")
// // U5W2P1_Task6 220321
// function U5W2P1_Task6 (a, x) {
//     let output = []
//     for(let i=0; i< a.length; i++){
//         if(a[i]===x){
//             continue
//         }else{
//             output.push(a[i])
//         }
//     }
//     return output
// }
// let a, x
// a = [1, 7, 2, 10, 7]
// x = 7
// console.log( U5W2P1_Task6(a, x) )
// console.log("------------Test   End---------------")


// console.log("------------Test start---------------")
// // U5W2P1_Task7 220321
// function U5W2P1_Task7 (a, filter_list) {
//     let output = [...a], tmp = []
//     for(let i=0; i<filter_list.length; i++){
        
//         for(let j=0; j< output.length; j++){
//             if(output[j]===filter_list[i]){
//                 continue
//             }else{
//                 tmp.push(output[j])
//             }
//         }
//         output = []
//         output = [...tmp]
//         tmp = []
//         console.log(output)
//     }
//     return output
// }
// let a, filter_list
// a = [1, 7, 2, 10, 7]
// filter_list = [2,7]
// console.log( U5W2P1_Task7(a, filter_list) )
// console.log("------------Test   End---------------")

// console.log("------------Test start---------------")
// // U5W2P1_Task8 220321
// function U5W2P1_Task8 (n, m ){
//     let output = []
//     let ms = Array(m).fill('A').join('')
//     // console.log(ms)
//     for(let i=0; i<n; i++){
//         output.push(ms)
//     }
//     return output
// }
// let n, m
// n = 3
// m = 2
// console.log( U5W2P1_Task8(n, m ) )
// console.log("------------Test   End---------------")

// console.log("------------Test start---------------")
// // U5W2P1_Task9 220321
// function U5W2P1_Task9 ( elements ){
//     if(isInOrder(elements)) return 0
//     console.log(elements)
//     // console.log(elements.push(elements.shift()))
//     // console.log(elements)
//     for(let i=0; i<elements.length-1; i++){
//         shiftNumber(elements);
//         // console.log(elements)
//         if(isInOrder(elements)) return i+1
//     }
//     return -1
// }
// function shiftNumber(array){
//     array.push(array.shift())
// }
// function isInOrder(array){
//     for(let i=0; i<array.length-1; i++){
//         const current = array[i]
//         const next = array[i+1]
//         if(current+1 !== next) return false;
//     }
//     return true
// }
// let elements
// elements = [1, 4, 2, 3] 
// console.log( U5W2P1_Task9 ( elements ) )
// console.log("------------Test   End---------------")


// // U5 W2 P1 Task 10
// function U5W2P1_Task10(digits){
//     // console.log(Number(digits.join('')))
//     let num = ''
//     for(let i=0; i<digits.length; i++){
//       num = num + digits[i]
//     }
//     console.log(num)
//     // console.log( Number(digits.join(''))+1 )
  
//     // console.log(digits[0])
    
//     if(digits[0] === undefined) return -1
//     for( let number of digits){
//       // console.log(typeof(number) === "number")
//       if((typeof(number) !== "number") || number%1 !== 0) return undefined
//     }
//     let arr = String(Number(num)+1).split('')
//     // let arr = String(Number(digits.join(''))+1).split('')
//     // console.log(arr)
//     return arr.map( item => Number(item))
//   }
  
//   function solution(digits) {
//     if(digits[0] === undefined) return undefined
//     for( let number of digits){
//         // console.log(typeof(number) === "number")
//         if((typeof(number) !== "number") || number%1 !== 0) return undefined
//     }
//     let arr = String(Number(digits.join(''))+1).split('')
//     return arr.map( item => Number(item))
//   }
//   let digits
//   // digits = [0,1,2,3]
//   // digits = [0,1,2,0]
//   digits = [9,9,9,9]
//   // digits = [9,9,9,9.1]
//   // digits = [9,9,9,undefined]
//   // digits = [undefined,9,9,undefined]
//   // digits = [0]
//   // digits = [0,0,0]
//   // digits = [0,0,1]
//   // digits = []
//   console.log( U5W2P1_Task10(digits) )

// console.log("------------Test start---------------")
// // U5W2P1_Task10 220321
// function U5W2P1_Task10 ( digits ){
//     // way 1 ???
//     // console.log(Number(digits.join('')))
//     // console.log(Number(digits.join('')) +1)
//     // console.log( (Number(digits.join('')) +1) +'' )
//     // console.log( ( (Number(digits.join('')) +1) +'' ).split('') )
//     // console.log(  ( (Number(digits.join('')) +1) +'' ).split('').map(item => Number(item)) )
//     // return ( (Number(digits.join('')) +1) +'' ).split('').map(item => Number(item))

//     // way 2
//     addOne(digits)
//     return digits
// }

// function addOne(digits){
//     let index = digits.length - 1;
//     while(index>=0 && digits[index]==9){
//         digits[index--] = 0;
//     }
//     digits[index]++
//     console.log(index)
//     if(index < 0){
//         digits.unshift(1);
//     }else{
//         digits[index++]
//     }
// }

// let digits
// // digits = [1, 4, 2, 9] 
// digits = [0, 1, 5] 
// // digits = [9, 9, 9] 
// console.log( U5W2P1_Task10 ( digits ) )
// console.log("------------Test   End---------------")

function U5W2P1_Task11 ( a, b ){
    // way 1
    let result = ''
    let i = a.length-1
    let j = b.length-1
    let carry = 0

    while(i>=0 || j>=0){
        // console.log("i = ", i, "a = ", a.charAt(i--)-"0")
        // console.log("j = ", j, "b = ", b.charAt(j--))
        let digitsA = i >=0 ? a.charAt(i--)-'0' : 0;
        let digitsB = j >=0 ? b.charAt(j--)-'0' : 0;

        let sum = digitsA + digitsB + carry;
        if(sum>=2){
            carry = 1;
            sum -= 2
        }else(
            carry = 0
        )
        result = sum + result
    }
    console.log(carry)
    if(carry == 1){
        result = '1' + result
    }
    return result
}



// //  U5W2P1_Task1112
// function U5W2P1_Task12(arr){
//     let  output = []
//     for(let i=0; i<arr.length-2; i++){
//             // console.log(i, arr[i], arr[i+1], arr[i+2])
//             if(    ( arr[i]+arr[i+1] > arr[i+2] ) 
//                 && ( arr[i]+arr[i+2] > arr[i+1] )
//                 && ( arr[i+1]+arr[i+2] > arr[i] ) ){
//                 console.log("true")
//                 output.push(1)
//             }else{
//                 output.push(0)
//             }
//     }
//     return output
// }
// let arr = []
// arr = [1, 2, 2, 4]

// console.log(U5W2P1_Task12(arr))

console.log("#####################################")
console.log("Test End")