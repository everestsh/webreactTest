console.log("Test")
console.log("--------------------------")
'use strict'
// step sTest 1

// console.log("--------------------------")

// // step sTest 1 ############################################
// function sTest(a, b, c) {
//     const arr = [a, b, c]
//     // let larger = -Number.MAX_VALUE
//     let larger = -Number.MAX_SAFE_INTEGER
//     console.log(larger)
//     for(let i=0; i<arr.length; i++){
//         console.log(arr[i])
//         if(larger < arr[i]){
//             larger = arr[i]
//             console.log("#",larger)
//         }
//     }
//     return larger
// }
// let a, b, c
// a = 33
// b = 71
// c =5426
// console.log(sTest(a,b,c))

// step sTest 1 ############################################
// function sTest1(a, b, c) {
//     return (a > b) && (b <= c) && (a*3 > c || c<=a) ? "OK" : "NOK"
// }
// let a, b, c
// // a = 728
// // b = 627
// // c = 4
// a = 130
// b = -91
// c = 215
// console.log(sTest1(a,b,c))
// step sTest 2 ############################################
// function sTest2(n) {
//     let sum = 1
//     while(n>1){
//         sum = sum * n
//         console.log(n)
//         n--
//     }
//     return sum
// }
// let n
// n  = 3
// console.log("# ", sTest2(n))

// step sTest 2 ############################################
// function sTest2(n,m) {
//     let sum = 1
//     while(m>=n){
//         sum = sum * m
//         console.log(m)
//         m--
//     }
//     return sum
// }
// let n, m
// n = 2
// m = 7
// console.log("# ", sTest2(n, m))

// step sTest 3 ############################################
// function sTest3(s,n) {
//     return s[n]
// }
// let s, n
// s = "abcdef"
// n = 2
// console.log("# ", sTest3(s, n))

// step sTest 3 ############################################
function sTest3(s,n) {

}
let s, n
s = "abcdef"
n = 2
console.log("# ", sTest3(s, n))


// U5 W2 P1 Task 1
// function U5W1D5_Test1(visits, threshold) {
// console.log(U5W1D5_Test1(visits, threshold))



// step sTest 1
// function checkEquality(a, b) {
//     console.log(a, b)
//     // if( a !== NaN || b !== NaN) return false
//     // console.log("TEST!!!")

//     if( (typeof(a) === "number" && typeof(b)=== "number") 
//     || ( typeof(a) === "undefined" && typeof(b)=== "undefined" )
//     ){
//         console.log("TEST")
//         if(a === b){
//             return true
//         }else{
//             return false
//         }
//     }else{
//         return false
//     }
//   }
// console.log( checkEquality(1, 1))
// console.log( checkEquality(undefined, undefined))
// console.log( checkEquality(null, undefined))
// console.log( checkEquality(NaN, NaN))
// console.log( checkEquality(1, 1))

// Make Array Consecutive 2  SelectionSort
// function MAC_SelectionSort_Test1(statues){
//     var min_idx;
//     for(let i=0; i<statues.length; i++){
//         min_idx = 0;
//         for(let j=i+1; j<statues.length; j++){
//             if(statues[j]< statues[i]){
//                 min_idx = j
//                 var temp = statues[j]
//                 statues[j] = statues[i]
//                 statues[i] = temp
//             }
//         }
//     }
//     return statues
// }
// let statues
// statues = [6, 2, 3, 8]

// console.log( MAC_SelectionSort_Test1(statues) )

// Make Array Consecutive 2  
// function MAC_Test1(statues){
//     let min_idx, start, end;
//     let output = []
//     for(let i=0; i<statues.length; i++){
//         min_idx = 0;
//         for(let j=i+1; j<statues.length; j++){
//             if(statues[j]< statues[i]){
//                 min_idx = j
//                 var temp = statues[j]
//                 statues[j] = statues[i]
//                 statues[i] = temp
//             }
//         }
//     }
//     // console.log(statues[statues.length-1] -statues[0])
//     start = statues[0]
//     end =statues[statues.length-1]
//     // console.log("start =",start, " end =", end)
//     for(let i=start; i<=end; i++){
//         output.push(i)
//     }
//     // console.log("output =", output)
//     for(let i=0; i<statues.length ; i++){
//         for(let j=0; j<=output.length; j++){
//             // output.push(i)
//             if(statues[i] === output[j]){
//                 output.splice(j,1)
//             }
//         } 
//     }
//     // return output
//     return output.length
// }
// let statues
// statues = [6, 2, 3, 8]
// console.log( MAC_Test1(statues) )

// Make Array almostIncreasingSequence 
function MAC_Test2(sequence){
    // Way 1
    // let length = sequence.length
    // const output = []

    // // console.log(sequence.sort())
    // if(length === 2) return true 
    // for(let i=0; i<length; i++){
    //     const temp = [...sequence]
    //     temp.splice(i,1)
    //     // console.log(temp)
    //     // console.log(i)
    //     for(let j=1; j<length-1; j++ ){
    //         // console.log(sequence[j])
    //         if(temp[j-1]>=temp[j]) {
    //             // console.log(i)
    //             // console.log(i, temp[j])
    //             // output.push(false)
    //             output.splice(i,1, false)
    //             j = length-1
    //             break
    //         }else{
    //             output.splice(i,1, true) 
    //         }
    //     }
    //     // output.push(true)
    // }
    // for(let i=0; i< output.length; i++){
    //     if(output[i]===true) return true
    // }
    // return false

    // Way 2
    let invalidItemsCount = 0;
    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i-1]) {
        invalidItemsCount++;
        if (invalidItemsCount > 1) return false;
        if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) return false;
        }
    }
  
    return true;
}
let sequence
// sequence = [1, 1]
// sequence = [1,2,3,4]
// sequence = [1,2,3,4,5,6,7,8,9]
sequence = [1, 3, 2, 1]
// sequence = [1, 2, 1, 2]
// sequence = [1, 3, 2]
// sequence = [1, 1, 2, 3, 4, 4]
// sequence = [1, 1, 2, 3, 4, 1]
// sequence = [1, 3, 2]
// sequence = [30, 60, 50, 80, 100, 200, 150]
console.log( MAC_Test2(sequence) )


console.log("--------------------------")
console.log("Test End")