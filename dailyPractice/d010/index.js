console.log("Test")
console.log("--------------------------")
'use strict'

// way 1
function promise (){
    return new Promise(function(resolve, reject){
        console.log('Promise !!!')
        resolve()
    })
}
promise().then(function(){
    console.log('resolve.')
})
// way 2
// let promise = new Promise(function(resolve, reject){
//     console.log('Promise !!!')
//     resolve()
// })

// promise.then(function(){
//     console.log('resolve.')
// })

console.log("--------------------------")
console.log("Test End")