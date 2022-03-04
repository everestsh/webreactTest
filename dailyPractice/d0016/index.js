console.log("Test")
console.log("--------------------------")
'use strict'
// step 1 - 1
// var arr = []
// function f(){
//     for(var i=0; i<5; i++){
//         arr.push(function(){
//             console.log(i)
//         })
//     }
//     console.log("test")
// }
// // f()
// console.log(f())
// // arr[2]()
// // arr[1]()
// // arr[0]()
// // arr[2]
// console.log("arr[1] =", arr[1])
// console.log("arr[1]() =",arr[1]())
// console.log(arr)

// step 1 - 2
var arr = []
function f(){
    for(var i=0; i<5; i++){
        arr.push((function(i){
            return function(){
                console.log(i)
            }
        })(i))
    }
    console.log("test")
}
f()
// console.log(f())
arr[2]()
arr[1]()
// arr[0]()
// arr[2]
// console.log("arr[1] =", arr[1])
// console.log("arr[1]() =",arr[1]())
// console.log(arr)

// step 1 - 3
// var arr = []
// function f(){
//     for(let i=0; i<5; i++){
//         arr.push(function(){
//             console.log(i)
//         })
//     }
// }
// f()
// arr[2]()
// arr[1]()
// arr[0]()
// for(var vi=0; vi< 5; vi++){
//     console.log("var",vi) 
// }
// console.log("var vi =",vi) 
// for(let li=0; li< 5; li++){
//     console.log("let", li) 
// }
// // console.log("let li =", li) //err


// step 2
// const 使用，对物理内存地址不可更改
const a = {
    name: 'leo'
}
a.name= 'Qing Qu'
a.email = 'sooof@me.com'
Object.freeze(a)
a.name = 'leo'
console.log(a)


const someAsyncThing = function() {
    return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    //   resolve(x + 2);
    // resolve(2)
    });
  };
  
  someAsyncThing().then(function() {
    console.log('everything is great');
  });
  
  setTimeout(() => { console.log(123) }, 2000);

console.log("--------------------------")
console.log("Test End")