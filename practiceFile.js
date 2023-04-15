// Shadowing

// var a = 200;
// let x = 300;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }

// console.log(a);

// valid because nested scope

// let b = 100;

// {
//     let b = 20;
//     console.log(b)
// }
// console.log(b)

// Illegal shadowing, invalid because same name twice in 2 different scopes at the same level

// let a = 20;

// {
//     var a = 10; // cannot redeclare a block scoped variable
// }

// valid

// var a = 20;
// {
//     let a = 200;
// }

// The first code block is invalid because it attempts to redeclare a variable named "a" within a block using the var keyword. In JavaScript, var is function-scoped, which means that when a variable is declared using var within a function or a block, it is visible and accessible throughout the entire function or block. This also means that if a variable is declared with var inside a block, it will "leak" out of that block and potentially overwrite a variable with the same name in an outer scope.

// In contrast, the second code block is valid because it uses the let keyword to declare a new variable named "a" within the block. let is block-scoped, which means that when a variable is declared using let within a block, it is only visible and accessible within that block and its sub-blocks. This allows for the creation of variables with the same name in different scopes without causing conflicts or overwriting other variables.

// valid

// let a = 200;

// function x() {
//     var a = 20;
// }


// Prototypal inheritance

// let object1 = {
//     fname: 'Ghanashri',
//     lname: 'Mariyanna',
//     city: 'Tumkur',
//     getDetails() {
//         console.log("My name is " + this.fname + '' + this.lname + 'I am from ' + this.city);
//     }
// }

// let object2 = {
//     fname: 'Hitesh',
//     lname: 'Siddhartha'
// }

// object2.__proto__ = object1;

// object2.getDetails()

// Higher order function - DRY principle

// let radiusArr = [3, 1, 2, 4];

// const area = function (radius) {
//     return Math.PI * radius * radius;
// }

// calculate = function (arr, logic) {
//     let output = [];

//     for (let i = 0; i < arr.length; i++) {
//         output.push(logic(arr[i]));
//     }

//     return output;
// }

// console.log(calculate(radiusArr, area));


// Array.prototype.calculate = function (logic) {
//     let output = [];

//     for (let i = 0; i < this.length; i++) {
//         output.push(logic(this[i]));
//     }

//     return output;
// }

// console.log(radiusArr.calculate(area));

// trust issues with set time out - blocing the main thread for 10 seconds

// JS engine

// Human readable code -> (parsing + compilation + execution)
// code - tokens
//      - Syntax parser - generates abstract syntax tree
// compilation and execution go hand in hand, AST is passed to compilation phase

// AST - Interpreter - byte code - execution
//        compiler
//        too, keeps talking
//        to interpreter (to optimize the code as much as possible - on the run time, hence JIT)
//        AOT

// Memory heap, in sync with Call stack and GC (Mark and sweep algorithm)

// v8 - interpreter - ignition
//    - compiler - turbo fan
//    - GC - oilpan and orinoco

// closures - 3 examples, currying, issue with var, fix with let, fix with var
// uses

// call back hell

// const cart = ["shoes", "pant", "kurta"];

// api.createOrder(cart, function () {
//     api.proceedTopayment(function () {
//         api.showOrderSummary(function () {
//             api.updateWallet()
//         })
//     })
// })

// // consumer
// const promise = createOrder(cart);
// promise
// .then((response) => {
//     return proceedTopayment()
// })
// .then((response2) => {
//     return showOrderSummary()
// })
// .then((response3) => {
//     return updateWallet()
// })
// .catch((err) => {
//     // do something
// }) 

// // catch just after any then is to ensure, subsequent hten blocks are definitely called

// // producer

// function createOrder(cart) {
//     const pr = new Promise((resolve, reject) => {
//         //create order
//         // validate the cart

//         if (!valid) {
//             reject('err')
//         }
//         if(orderId) {
//             resolve(orderId)
//         }
//     })
//     return pr;
// }

// const user = fetch('url');
// user.then(function(response) {
//     console.log(data);
// })

// call apply bind

// const obj1 = {
//     fname: 'Ghanashri',
//     lname: 'Mariyanna',
//     getDetails: function (hometown) {
//         console.log(this.fname + '' + this.lname + '' + hometown);
//     }
// }

// const obj2 = {
//     fname: 'Sachin'
// }

// const fun = obj1.getDetails.bind(obj2, 'tumkur');

// fun();

// const obj1 = {
//     fname: 'Ghanashri',
//     lname: 'Mariyanna',
// }

// const obj2 = {
//     fname: 'Sachin',
//     lname: 'Tendulkar'
// }

// const obj3 = {
//     fname: 'Akshay',
//     lname: 'Saini'
// }

// function getDetails(hometown, state) {
//     console.log(this.fname + ' ' + this.lname + ' ' + hometown+ ' ' + state);
// }

// getDetails.call(obj1, 'Tumkur', 'Karnataka');
// getDetails.apply(obj1, ['Tumkur', 'Karnataka']);
// console.log('------------------------------------------')
// getDetails.bind(obj2, 'Mumbai')('Maharashtra');
// getDetails.bind(obj1, 'Tumkur')('Karnataka');

// Function.prototype.myBind = function (...args1) {
//     const obj = this;
//     const params = args1.slice(1);
//     return function(...args2) {
//         obj.apply(args1[0], [...params, ...args2])
//     }
// }

// getDetails.myBind(obj3, 'Dehradun')('Uttarakhand')

// Currying - Converting a function with n arguments to n number of functions with 1 argument each

// 1. with the help of bind

// const multiply = function (x, y) {
//     console.log(x * y)
// }

// const multiplyTwo = multiply.bind(this, 2);
// multiplyTwo(3)

// const multiplyThree = multiply.bind(this, 3);
// multiplyThree(5)

// 2. with the help of closures

// const multi = function (x) {
//     return function (y) {
//         return x*y;
//     }
// }
// console.log(multi(5)(5));

// const multi2 = multi(5);
// multi2(10);

// popular question
// const sum = function(a) {
//     return function(b) {
//         return typeof b !== undefined ? sum(a+b): a; // to handle 0 as argument
//     }
// }

// console.log(sum(1)(2)(3)(4)(5)());

// const handleSearch = function(event, value) {
//     console.log(event.target.value)
//     console.log(value)
// } 

// function betterFunction(fn, delay, args) {
//     let timer;
//     // console.log('this value inside better function: expected to be global', this)
//     return function () {
//         // console.log('this value inside return function: expected to be bound with better fuction', this)
//         const context = this;
//         const functionArguments = args || arguments;
//         clearTimeout(timer);
//         timer = setTimeout(function() {
//             fn.apply(context, functionArguments);
//         }, delay);
//     }
//  }

//  const debounce = betterFunction(handleSearch, 500);

// function add(a, b, a) {
//   return a + b + a;
// }
  
// console.log(add(1, 2, 7)); // Output: expected: 10

// const multiply = (x, y, x) => {
// return x * y * x;
// }

// console.log(multiply(2, 3, 4)); // Output: expected 24

  
  
  
  
  
  