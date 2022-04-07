console.log("Test")
console.log("--------------------------")
'use strict'
// step sTest 1

// console.log("--------------------------")
// function nameString(name){
// 	var b = "Edabit"
// 	var result = name + b
//   	return result
// }
// console.log(nameString("lknknl"))

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
  let a = s , b =''
  const length = s.length
  console.log("len = ", length)
  // console.log("a = ", a)
  const output = []
  let  btmp , arr
  // console.log(a)
  if(length < 2) return  "result --- "
  for(let i=length; i>0; i--){
    
    console.log("1 ", i, a, b)
    // if(a.length===2 && a === a.split('').reverse().join('') ){
    //   return  "result --- "
    // }else{
    //   return "result --- " + a
    // }
    if(a === a.split('').reverse().join('')) {
      console.log("########  2", output)
      aLen = a.length
      if(a.length === 1) return  "result --- " + a
      if(a.length === 2) {
        i = i - 2
        continue
      }
      if(i === 0 ) return output.join('')
      i = output.length
      b = output.join('')
      a = b
      b = ''
      for(let j=0; i < output.length; j++){
        output.pop()
      }


      // i = length - a.length
      console.log("######## shenxia i = ", i, aLen)
      // if(i === length) {
      //   console.log("i= ", i, a)
      //   return "ok"
      // }
      
      // console.log("in a = ", a) 
      continue;
    }else{
      if(length < 2) return  "result --- ";
      if(length === 2) { return  "result - n-- " + a ; }

      arr = a.split('')
      btmp = arr.pop()
      output.unshift(btmp) 
      console.log("output = ",output.join(''), "i =",i)
      a = arr.join('')
      b = output.join('')
      // console.log("end a = ", a)
    }
  }
  return "result --- " +output.join('')
}
 
let s

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
// function Task1(a, b){
//     // w 1
//     let j = 8
//     console.log(a.charAt(5))
//     for(let i=5; i > 0; i--){
//        console.log( typeof (a.charAt(j--) - "0")  )
//     }
//     console.log("Test")
//     // return 5-'1'  // 4 number
//     // return 5+'1'  // 51  string
//     // return 1 % 3 // 1
//     return 3 % 4 // 3
// }
// let a , b ;
// a = "12345678";
// b = '11';

// console.log(Task1(a,b))
//  Task11
// function Task2(a, b){
//     // w 2
//     let i = a.length - 1
//     let j = b.length - 1

//     while(i >=0){
//         console.log("i = ", i, "a = ", a.charAt(i--))
//     }
//     console.log("###")
//     while(j>=0){
//         console.log("j = ", j, "a = ", b.charAt(j--))
//     }
//     return 5+'1'  // 51  string
// }
// let a , b ;
// a = "12345678";
// b = '11';
// console.log(Task2(a,b))

//  Task3
// function Task3(a, b){
//     // w 3
//     let i = a.length - 1
//     let j = b.length - 1

//     let digitA 
//     console.log("# ", digitA = i >= 0)
//     console.log("# ", "-1"-0)
//     console.log("# ", typeof(""-0) )
//     // while(i >=0){
//     //     console.log("i = ", i, "a = ", a.charAt(i--))
//     // }
//     // console.log("###")
//     // while(j>=0){
//     //     console.log("j = ", j, "a = ", b.charAt(j--))
//     // }
//     // return 5+'1'  // 51  string
//     // return 5-'1'  // 4  string
//     return '5'-'1'  // 4  string
// }
// let a , b ;
// a = "12345678";
// b = '11';
// console.log(Task3(a,b))



// U5 W2 P1 Task 11
// function U5W2P1_Task11(n){
//     let sum  = 0
//     for(let i =0; i<n; i++){
//         // console.log(n)
//         sum = sum  + i*4
//     }
//     return 1+sum
// }
// let n
// n = 1
// console.log(U5W2P1_Task11(n))
// console.log(U5W2P1_Task11(1))
// console.log(U5W2P1_Task11(2))
// console.log(U5W2P1_Task11(3))
// console.log(U5W2P1_Task11(4))
// console.log(U5W2P1_Task11(5))
// console.log(U5W2P1_Task11(6))

// function makesTen(a, b) {
// 	let arr = [a,b]
// 	for(let i=0; i<arr.length; i++){
// 		if(arr[i] == 10){
// 			return true
// 		}
// 	}
// 	if(10 ===a+b){
// 		return true
// 	} else{
// 		return false	
// 	}
// }
// console.log(makesTen(9, 10))



// for(let i=1; i<5; i++){
//     console.log(U5W2P1_Task11(i))
// }
// U5 W2 P1 Task 11
// function U5W2P1_Task11(a, b){
//     let result = ''
//     let i = a.length - 1
//     let j = b.length - 1
//     let carry = 0
    

//     while(i >=0 || j>=0){
//         // console.log("i = ", i, "a = ", a.charAt(i--))
//         // console.log("j = ", j, "a = ", b.charAt(j--))
//         let digitA = i >= 0? a.charAt(i--)- "0" : 0;
//         let digitB = j >= 0? b.charAt(j--)- "0" : 0;

//         let sum = digitA + digitB + carry
//         if(sum >= 2) {
//             carry = 1;
//             sum -= 2;
//         }else{
//             carry = 0;
//         }
//         result = sum + result
//     }
//     console.log(carry)
//     // while(j>=0){
//     if(carry==1){
//         result = '1' + result
//     }
//     // }
//     return result
//     // return 5+'1'  // 51  string
// }
// let a , b ;
// a = "1111";
// b = '11';

// console.log(U5W2P1_Task11(a,b))

//  U5W2P1_Task1112
function U5W2P1_Task12(arr){
    let  output = []
    for(let i=0; i<arr.length-2; i++){
            // console.log(i, arr[i], arr[i+1], arr[i+2])
            if(    ( arr[i]+arr[i+1] > arr[i+2] ) 
                && ( arr[i]+arr[i+2] > arr[i+1] )
                && ( arr[i+1]+arr[i+2] > arr[i] ) ){
                console.log("true")
                output.push(1)
            }else{
                output.push(0)
            }
    }
    return output
}
let arr = []
arr = [1, 2, 2, 4]

console.log(U5W2P1_Task12(arr))

console.log("--------------------------")
console.log("Test End")