console.log("Test")
console.log("--------------------------")
'use strict'

const arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// for(var index in arr){
//     console.log("arr[", index, "] = ", arr[index], "typeof = ", typeof index)
// }
// arr.forEach( (curr,index, arr)=>{
//     console.log("arr[", index, "] = ", arr[index], "typeof = ", typeof index, ":")
// })
// for(var index of arr){
//     console.log("arr[", index, "] = ", arr[index], "typeof = ", typeof index)
// }
// for (var value of arr) {
//     // document.write(value + ", ");
//     console.log("# ", value + ", ")
// }


function* quips(name) {
    yield " 你好 " + name + "!";
    yield " 希望你能喜欢这篇介绍 ES6 的译文 ";
    if (name.startsWith("X")) {
      yield " 你的名字 " + name + "  首字母是 X，这很酷！";
    }
    yield " 我们下次再见！";
  }
  
var iter = quips("jorendorff");
console.log(iter.next())
console.log(iter.next())

const getJSON = function(url) {
    const promise = new Promise(function(resolve, reject){
      const handler = function() {
        if (this.readyState !== 4) {
          return;
        }
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };
      const client = new XMLHttpRequest();
      client.open("GET", url);
      client.onreadystatechange = handler;
      client.responseType = "json";
      client.setRequestHeader("Accept", "application/json");
      client.send();
  
    });
  
    return promise;
  };

getJSON("/posts.json").then(function(json) {
    console.log('Contents: ' + json);
  }, function(error) {
    console.error('出错了', error);
  });

console.log("--------------------------")
console.log("Test End")