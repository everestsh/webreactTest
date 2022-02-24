console.log("Test")
console.log("--------------------------")
'use strict'
var a1 = "123456"
var a2 = "123456"
console.log("a1=2 ", a1==a2)

var b1 = 123456
var b2 = "123456"
console.log("b1=b2 ", b1==b2)


setTimeout(() => {
    console.log('hello')
}, 5 );

const pp = new Promise( resolve=>{
    console.log("resolve")
    resolve();
})
pp.then()

let p = Promise.resolve(5)
f(p)
function f(p){
    p.then(value => console.log(value))
}
console.log("--------------------------")
console.log("Test End")