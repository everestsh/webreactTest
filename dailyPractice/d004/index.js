console.log("Test")
console.log("--------------------------")
const arr = ['apple', 'book', 'cpffee']
const arr1 = [...arr, 'app']
console.log(arr1)
const iter = arr[Symbol.iterator]()
iter.next()
iter.next()
console.log([...iter])
console.log("--------------------------")
console.log("Test End")