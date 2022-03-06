console.log("Test")
console.log("--------------------------")
'use strict'
// step 1 - 1

var xiaoming = {
  name: '小明',
  birth: 1990,
  school: 'No.1 Middle School',
  height: 1.70,
  weight: 65,
  score: null
};
console.log(xiaoming.name);
console.log(xiaoming.birth);

// Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
// const p = Promise.all([p1, p2, p3]);
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

// 生成一个Promise对象的数组
const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
  // return getJSON('/post/' + id + ".json");
  return console.log('/post/' + id + ".json")
});

Promise.all(promises).then(function (posts) {
  // ...
}).catch(function(reason){
  // ...
});


console.log("--------------------------")
console.log("Test End")