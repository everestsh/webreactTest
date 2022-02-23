console.log("Test")
console.log("--------------------------")
'use strict'
const arr = ['apple', 'book', 'coffee']
const doubleWorks = []
const reg = /(\w)\1/g
for (let word of arr){
    if(reg.test(word)){
        doubleWorks.push(word)
    }
}
console.log(doubleWorks)
console.log("--------------------------")
console.log("Test End")