console.log("Test")

let e = {
    greeting:'Hey1',
    sayHello() {
        console.log(this)
        this.greeting = 'Hello!'
    }
}
console.log("before f: ", e.greeting)
let f  = e.sayHello

// f()
console.log(f())
// e.greeting
console.log("after f: ", e.greeting)
console.log("after f: ", f.greeting)

console.log(Math.max())
console.log(Math.min())
console.log(Math.max() > Math.min())
console.log("Test End")