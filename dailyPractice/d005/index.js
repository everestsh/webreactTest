console.log("Test")
console.log("--------------------------")
'use strict'

function foo(){
    var x = 1
    function bar(){
        var x= 'A'
        console.log('x in bar() = ' + x)
    }
    console.log('x in foo() = ' + x)
    bar()
}
foo()
console.log("--------------------------")
console.log("Test End")