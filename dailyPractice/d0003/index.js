console.log("--------------------------")
const ar = [0,0,0]
console.log('before ar = ', ar)
const far =ar.filter(v=>!v)
console.log('after filter ar = ', ar)
console.log('far = ', far)

const ar1 = [5,6,7]
// ar1.fill(6, undefined)
const far0 =ar1.filter(_ => _)
const far1 =ar1.filter(v=>v===6)
const far2 =ar1.filter(v=>v!==6)
console.log('after fill ar1 = ', ar1)
console.log('far0 = ', far0)
console.log('far1 = ', far1)
console.log('far2 = ', far2)
delete ar1[0]
console.log('after delete ar1[0] ar1 = ', ar1)
const far1_0 =ar1.filter(v=>v===6)
console.log('far1_0 = ', far1_0)
ar.fill(undefined)
console.log('after fill ar = ', ar)
console.log('far = ', far)

const arr = [0,1,2]
console.log('arr = ', arr)
arr[5]=5

const farr =arr.filter(v=>!v)
console.log('arr = ', arr)
console.log('farr = ', farr)

const oarr =arr.filter(v=>v)
console.log('arr = ', arr)
console.log('oarr = ', oarr)

// const arr = [0,1,2]
// delete arr[1]
// arr.filter(_=>_)

// const arr1 =Array.fill(2, undefined)
// arr1.filter(v=>!v)


console.log("--------------------------")