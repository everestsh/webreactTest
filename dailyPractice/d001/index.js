console.log("Test")

console.log("--------------------------")
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

console.log("--------------------------")
console.log(Math.max())
console.log(Math.min())
console.log(Math.max() > Math.min())
console.log("--------------------------")
console.log("Number.MIN_VALUE :", Number.MIN_VALUE)
console.log("Number.MIN_VALUE - Number.MIN_VALUE/2  :", Number.MIN_VALUE-Number.MIN_VALUE/2)
console.log("Number.MIN_VALUE > 0 :", Number.MIN_VALUE>0)
console.log("Number.MIN_VALUE/2 == 0 :", Number.MIN_VALUE/2==0)
console.log("Number.MIN_VALUE/2 === 0 :", Number.MIN_VALUE/2===0)
console.log("Number.EPSILON :", Number.EPSILON)
console.log("Number.EPSILON > 0 :", Number.EPSILON>0)
console.log("Number.EPSILON = 0 :", Number.EPSILON==0)
console.log("Number.MIN_VALUE > Number.EPSILON :", Number.MIN_VALUE>Number.EPSILON )
console.log("Number.MIN_VALUE < Number.EPSILON :", Number.MIN_VALUE<Number.EPSILON )
console.log("Number.MIN_VALUE - Number.EPSILON :", Number.MIN_VALUE-Number.EPSILON )
console.log("0.3-0.2-0.1 === 0 :", 0.3-0.2-0.1 === 0 )
console.log("0.3-0.2-0.1 === Number.EPSILON :", 0.3-0.2-0.1 === Number.EPSILON )
console.log("0.3-0.2-0.1 <  Number.EPSILON :", 0.3-0.2-0.1 < Number.EPSILON )
console.log(" ")
console.log(
    Number.MIN_VALUE > 0,
    Number.MIN_VALUE > Number.EPSILON,
)
console.log("--------------------------")
function getData(){
    return 'hello'
}
let {proxy, revoke} = Proxy.revocable(getData, {})
console.log(proxy())
console.log(revoke())
console.log(proxy())
console.log("--------------------------")
console.log("Test End")