console.log("Test")
console.log("--------------------------")
'use strict'

// function timeout(ms){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(resolve, ms, 'I am done!!!')
//     })
// }
// timeout(1000).then( (value) =>{
//     console.log(value)
// })
function t(ms) {
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, ms, "test Done!!!")
    })
}
t(1000)
    .then( resolve => {
        console.log("t function run --> ", resolve)
    })
console.log("--------------------------")
console.log("Test End")