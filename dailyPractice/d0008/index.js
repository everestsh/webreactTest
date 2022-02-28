console.log("Test")
console.log("--------------------------")
'use strict'

let l =  [5,3, 7, 6, 2, 4, 8, 1, 9, 89]
setTimeout(() => l.sort(), 3000)
l.sort()
console.log(l)

// way 1
// function after3Secs(f){
//     setTimeout(f, 3000);
// }
// // after3Secs(() => console.log('Hello'))
// // after3Secs(() => console.log('Hello'))

// after3Secs(() => {
//     console.log('Hello 1')
//     after3Secs(() => {
//         console.log('Hello 2')
//         after3Secs(() => {
//             console.log('Hello 3' )
//             after3Secs(() => {
//                 console.log('Hello 4')
//             })
//         })
//     })
// })

// way 2
// function after3Secs() {
//     return new Promise(resolve => {
//         setTimeout(resolve, 3000)
//     })
// }
// after3Secs()
//     .then( () =>{console.log('Hello 1')})
//     .then( () => after3Secs())
//     .then( () =>{console.log('Hello 2')})
//     .then( () => after3Secs())
//     .then( () =>{console.log('Hello 3')})
//     .then( () => after3Secs())
//     .then( () =>{console.log('Hello 4')})
//     .then( () => after3Secs())
//     //.catch()

// way 3
 function after3Secs() {
    return new Promise((resolve, reject ) => {
        setTimeout(resolve, 3000)
    })
}
async function f (){
    // try {
    await after3Secs()
    console.log('Hello 1')
    await after3Secs()
    console.log('Hello 2')
    await after3Secs()
    console.log('Hello 3')
    await after3Secs()
    console.log('Hello 4')
    // }catch(err){ console.log(err)}
}
f()

function after3Secs() {
    return new Promise((resolve, reject ) => {
        setTimeout(resolve, 3000)
    })
}

console.log("--------------------------")
console.log("Test End")