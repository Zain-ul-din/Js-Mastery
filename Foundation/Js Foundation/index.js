
/*                   JavaScript Foundation                 */

/*

  -> Execution Context
  -> Lexical Environment
  -> Hoisting
  -> Function Invocation
  -> Argument keyword
  -> Variable Environment
  -> Scope Chain
  -> Scope
  -> Function Scope vs Block Scope
  -> Global Variables
  -> IIFE (Avoid Naming conflicts)
  -> this keyword
  -> Lexical vs dynamic Scoping
  -> Call , apply , bind
 */


/// execution context

/**
   when ever function called , js create new execution context on `call stack`
   /// LIFO
      -- PrintName 3
      -- FindName  2
      -- SayName   1
      -- Global    -init
 **/

function PrintName () {
    return `my Name`
}

function FindName () {
    return PrintName()
}

function SayName () {
    return FindName()
}

console.log(SayName()) // creates a new execution context in call stack
// or
// window.SayName() // also work bcz SayName is part of global environment

/// Global Execution Context

/*
   when js program run global execution context created
   !! global execution context provide two main things
   1 _ global object.
   2 _ this keyword.

   browser code test :
   -> type this => (Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …})
   !!! In browser global object is `window ` but in node js it's `global`
   this === window
   TASK : we can assign value to variables and see them in window object
 */


/// Lexical Environment

/*
  !! fist lexical environment is `global`

  lexical environment means where you write some thing or some thing part specific environment or where is code written

  function GlobalFunc () { // lexical environment of this func is `global`
     function localFunc () { // `localFunc` is lexically inside `GlobalFunc` or part of `GlobalFunc`
        // do some thing
     }
  }
  localFunc will just available inside `GlobalFunc`

 */

/// Hoisting

/*
   Execution context creates
   1 _ this keyword  2 _ global object
   3 _ hoisting (allocating memory in heap)
 */

console.log(myName) // undefined
SayMyName() // will work due to hoisting

var myName = 'myName'

// in case of `let` keyword it will give error myName is not defined

// function declaration
function SayMyName () { // JS will assign memory for `SayMyName` in memory Heap
    console.log( 'My Name !!' )
}

// function expression
var sayMyName = function () {
    console.log('My Name !!')
}

/*
  JS initial step when code runs
  myName = undefined
  // !!! variables are partially hoisted but , functions are fully hoisted

  (function SayMyName () { // JS will assign memory for `SayMyName`
    console.log( 'My Name !!' )
  }) // in this case it's not work bcz function will not get hoisted by js compiler

 */

// Every time new execution context create it'll hoist

var mycar = 'bmw'

var PrintMyCarName =  () => {
    console.log( 'My Car is : ' + mycar) // output : undefined due to , new hoisting
    var mycar = 'audi'
    console.log('My New Car is : ' + mycar)
}

PrintMyCarName()

/// Function Invocation

// -> function expression

var func = function () {
    console.log('cold') // or ()=> { }
}

// -> Declaration
function  weather (){
    console.log('Warm')
}

// Invocation/call/Execution
weather()
func() // execution context => arguments

// !!! argument keyword takes cost , not recommended

function UserData(name , age) {
    console.log(arguments) // arguments keyword => params
    console.log(Array.from(arguments))
    console.log(`name : ${name} + age : ${age}`)
}

function UserData1(...args) { // unlimited params
    console.log(Array.from(arguments))
}

UserData('zain' , 19)

/// Variable Environment

// Every variable have it's own context

function two (){
    var isValid; // local env !new context
}

function one() {
    var isValid = false; // local evn !new context
    two()
}

var isValid = false
one()

// two () -- undefined
// one () -- true
// global -- false

/// Scope Chain

// each child links to it's parent

var someVar = 'var' // all function has access to this due to global scope

// In js out lexical scope (available data + variables where the functions
// was defined) determines our available variables.Not where the function
// is called dynamic scope

function DoSomething () { // has own environment
    var timeNow = '4PM'
    return function TellTime (){ // has own environment
        var date = '08/04/2022'
        return function ReturnTime() { // lexically scoped in functions
            var min = '21' // local scope parent can't access
            return `Time : ${timeNow} ''${min}, ${date}` // child can access parent data
        }
    }
}
// chain DoSomething --> TellTime --> ReturnTime !one side flow
console.log(DoSomething()()())

/// Scope

// !! in js every functions have it's own scope
// exercise : create func on dev tools and find it in window obj and
// have a look at [[scopes]] of func

// js is weird

// to prevent this
// 'use strict'
function weird() {
    height = 50 // leakage of global variable .. js find height in global exe
    // if not any var , let or const .. js automatically create new var instead of throwing err

    return height
}

console.log(weird())

var sayHey = function Hey() {
    return `Hey`
}

console.log(sayHey())
// but , Hey() trow an err bcz `Hey()` is enclosed in it's own scope

/// Function Scope Vs Block Scope

// scope means what variable we have access to

// Block Scope
if (5 > 4){
    var password = 'qwerty'
    let realPassword = 'qwerty$' // or const realPassword
}

// we can access `password` in js
console.log(password) // but we can't access block scope variable in most language like c++
// console.log(realPassword) // throw an err

//  ES6 feature
/// But, if we want block scoping in JS we have to use `let` or `const` keyword
//

// function scope

function FuncScope() {
    var funcPassword = 'funcpass'
}
// funcPassword !! error

// exercise

function Loop () {
    for (var i = 0 ; i < 10 ; i += 1)
    {console.log(i)}
    console.log(`Final i val : ${i}`) // but let doesn't work
}

Loop()

/// Global Variables

// Disadvantages of global variables:-
// it's not a good practice to have too many global variable bcz we have limited space
// it can cause stack overflow bcz global is pushed to the stack at the end and that's why global also pushed at the end (LIFO)
// if we have too many files it can cause name conflicts due to same global variables . so good practice is to have variables in local space

// global var exercise
var z = 10 // file 1
var z = 20 // file 2
var z = 50 // file 3
// z will be over written when js see new `z` declaration
console.log(z)

// specially when all js files combined together in HTML <script> </script> so on ...

// solution :- JS modules


/// IIFE ( Immediately Invoked Function Expression )

// -> solution for global var conflicts

   // (()=> {console.log('Hey')})() // it will create new execution context on the top of global .. it's not accessible in global scope

   // Avoids naming conflicts using IIFE
   var script1 = (()=>{
      function someFunc() {
          return `z`
      }
      return {someFunc : someFunc}
   })() // like wise of script2 and so on ...

   console.log(script1.someFunc())

/// this keyword

// this is the object that the function is property of

//console.log(global) // this === global


// test in browser

// this give access members to their objects
const obj = {
    name : 'zain' ,
    Greeting :  function () {
        return this.name // no this binding available in anonymous function
    } , DoGreeting (){
        return `Hey , ${this.Greeting()}`
    }
}
console.log(obj.Greeting())
console.log(obj.DoGreeting())

// @ another use case , execute same code for multiple objects

function ImportantPerson() {
    console.log(this.name)
}

const  obj1 = {
    name : 'zain' ,
    importantPerson : ImportantPerson
}

const  obj2 = {
    name : 'AnyName' ,
    importantPerson : ImportantPerson
}

obj1.importantPerson()
obj2.importantPerson()

// this ref to execution context who called it

/// Lexical and dynamic scoping

const A =  function () {
    console.log ('a' , this)
    const b = function () {
        console.log ('b' , this)
        const c = {
            sayHey : function () { console.log('c' , this) }
        }
        c.sayHey()
    }
    b()
}

A()

const Object = {
    name : 'anyName' ,
    data (){
        console.log('1' , this)
        var func =  ()=>{//function () {
            console.log('2' , this) // this === window to lexical scope
        } // to fix use arrow func
        func() // another way to do this using func.bind(this)
    }
}

Object.data()

/// call , apply , bind

function foo() {
    console.log('Fooo!!')
}

foo.call() // another way to invoke

foo.apply() // same but more ..

// Game exercise

const Healer = {
    name : 'healer' ,
    health : 100 ,
    heal (amount){
        return this.health = amount
    }
}

const Queen = {
    name : 'Archer Queen' ,
    health : 30
}

console.log (Healer.health)
console.log(Queen.health , 'before')
Healer.heal.call(Queen , 90) // call on queen
Healer.heal.apply(Queen , [80]) // using apply takes [] of params
const heal = Healer.heal.bind(Queen , 40) // returns a func or append to queen obj
heal()
console.log(Queen.health , 'After')

// Function Currying

function multiply(a,b){
    return a*b
}

let res = multiply.bind(this , 2 ) // 1st params

console.log (res(3)) // 2nd param here

// this exercise

var Func1 = {
    name : 'anyName1' ,
    say () {console.log(this)} // print Func1
}

var Func2 = {
    name : 'anyName2' ,
    say () {return function (){console.log(this)}} // print window bcz called in global exe context
}

var Func3 = {
    name : 'anyName3' ,
    say () {return ()=>{console.log(this)}} // print window bcz called in global exe context
}

Func1.say()
Func2.say()() // window bcz running in global
Func3.say()() // ()=> is lexically scoped no matter where it's called

const character = {
    name: 'Simon',
    getCharacter() { // or function () { return this.name }
        return this.name;
    }
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

//How Would you fix this?
console.log('?', giveMeTheCharacterNOW()); //this should return

/// Context vs Scope

// Scope is variable environment
// context is current execution environment this keyword
