console.log("Test")
console.log("--------------------------")
'use strict'
// step 1 - 1
// function User(name, age){
//     this.name = name
//     this.age = age
// }
// User.getClassName = function(){
//     return "User"
// }
// User.prototype.changeName = function(name){
//     this.name = name
// }
// User.prototype.changeAge = function(age){
//     this.age = age
// }
// Object.defineProperty(User.prototype, 'info',{
//     get(){
//         return 'name:' + this.name + ' | age:' + this.age;
//     }
// })
// var user = new User('leo', 22)
// console.log(user)
// console.log(user.info)
// // 子类
// function Manager(name, age, password){
//     User.call(this,name,age);
//     this.password = password
// }
// // 继承静态方法
// Manager.__proto__ = User;
// // 继承 prototype 方法
// Manager.prototype = User.prototype
// // add new 方法
// Manager.prototype.changePassword = function(pwd){
//     this.password = this.password;
// }
// var manager = new Manager('Gen', 22, '123')
// console.log(manager.name)
// manager.changeName('Qing Qu');
// console.log(manager.name)
// step 1 - 2
class User{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    static getClassName(){
        return  'User';
    }
    changeName(name){
        this.name = name
    }
    changeAge(age){
        this.age = age;
    }
    get info(){
        return 'name:' + this.name + ' | age:' + this.age;
    }
}
class Manager extends User{
    constructor(name, age, password){
        super(name, age);
        this.password = password;
    }
    changePassword (password){
        this.password = password;
    }
}
console.log(typeof User, typeof Manager)
var manager = new Manager('Gen', 22, '123')
console.log(manager.name)
manager.changeName('Qing Qu');
console.log(manager.name)
// step 2
// 如果 Promise 状态已经变成resolved，再抛出错误是无效的。
const promise = new Promise(function(resolve, reject) {
    resolve('ok');
    throw new Error('test');
  });
  promise
    .then(function(value) { console.log(value) })
    .catch(function(error) { console.log(error) });
console.log("--------------------------")
console.log("Test End")