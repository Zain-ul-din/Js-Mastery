
/* Two Pillars of JavaScript */

/*
   --> Closures
   --> prototypal inheritance

   prerequisite's:-

   --> High Order Functions
   --> Functions Vs Objects
   --> Scheme + Java // programing languages name
 */

/// Functions are Objects

function one () {
    return 1
}

console.log('Func Type : ' , typeof one)
console.log(one())
console.log(one.call()) // many other ways

const number = new Function('num' ,'return num') // function constructor
console.log(number(3))

function foo (){ console.log('Hey there!!') }

foo.sayBye = (()=>{console.log('bye bye')}) // we can append properties to func

foo()
foo.sayBye.call() // call

// But, func have call , bind and apply

// Functions are first class citizen in js
// bcz :-)
// 1 _ we can `assign` function to variable in JS
// 2 _ function can pass as a `argument` OR `callback`
// 3 _ we can `return` functions as a value

// FUNCTIONS are objects in JS

// Exercise :-

function SomeFunc (param) { // fix param = {} good to have
    return param
}

SomeFunc()

/// High Order Functions (HOF)

// A function that takes function as a argument or return a function is a HOF

// Exercise : Company System
function AdminLogin () {
    let arr = []
    for (let i = 0 ; i < 10000000 ; i ++) // to add some delay , not good practice
        arr.push(i)
    return `Admin Has been logged in`
}

console.log(AdminLogin())

// not good practice
function SomeEmployeeLogin () {
    let arr = []
    for (let i = 0 ; i < 10000000 ; i ++) // to add some delay, not good practice
        arr.push(i)
    return `Employee Has been Logged in`
}

// using functions params __ Almost Good Practice

const GiveAccessTo = (name) => `${name} has been logged in`

function UserLogin (callBack){
    let arr = []
    for (let i = 0 ; i < 10000000 ; i ++) // to add some delay , not good practice
        arr.push(i)
    return callBack()
}

// bind => a callable func
console.log(UserLogin(GiveAccessTo.bind(UserLogin , 'UserName')))
// console.log(UserLogin(GiveAccessTo('me'))) err

// Flexible Login , follows dry principles
function SuperLogin (userName , timeDelay) {
    setTimeout(()=>{
        console.log(GiveAccessTo(userName))
    } , timeDelay)
}

const ADMIN_DELAY = 2 // ms
const EMPLOYEE_DELAY = 1 // ms


SuperLogin('zain' , ADMIN_DELAY) ,
SuperLogin('Another Name' , EMPLOYEE_DELAY)

// Another use case

// HOF
const MultiplyBy = (num1) => (num2) => num1 * num2

const MultiplyBy2 = MultiplyBy(2)
// multiply
console.log(MultiplyBy2(2))
console.log(MultiplyBy2(4))
console.log(MultiplyBy2(6))


const MultiplyBy5 = MultiplyBy(5)

console.log(MultiplyBy5(5))
console.log(MultiplyBy5(3))
console.log(MultiplyBy5(2))


/// Closures ... 1st pillar

// !! functions + lexical Scope

/*
   A closure is the combination of a function bundled together (enclosed)
   with references to its surrounding state (the lexical environment).
   In other words,*** a closure gives you access to an outer function's
   scope from an inner function***. In JavaScript, closures are created
    every time a function is created, at function creation time.
 */

function Family () {
    let grandpa = 'grandpa' // we func popped from the stack this var will move to the heap or to closure
    return function (){
        let father = 'father' // we func popped from the stack this var will move to the heap or to closure
        return function (){
            let son = 'son' // we func popped from the stack this var will move to the heap or to closure
            return `${grandpa} -> ${father} -> ${son}`
        }
    }
}

console.log(Family()()())

// Demo : https://pythontutor.com/javascript.html#mode=edit

// Advantages :-
// Memory Efficient && Encapsulation

function HeavyDuty () {
    const bigArray = new Array(100).fill('a')
    return bigArray
}

console.log(HeavyDuty())

// but if we wana to create array once

function BetterHeavyDuty () {
    const bigArray = new Array(100).fill('a')
    return {
       get : (idx) => bigArray[idx] ,
       set : (idx , newVal) => bigArray[idx] = newVal
    } // Or [ get = func , set = func ] and destructure it like so [a , b]
}

const { get ,  set } = BetterHeavyDuty()

console.log( 'before' ,get(0))
set(0 , 'b')
console.log( 'After' ,get(0))


// Encapsulation .. hiding private data from user OR not to provide confidential API's

const makeNuclearBtn = () => {
    let timeOut = 0
    const  passTime = () => timeOut +=1
    const launch  = () => {
        timeOut = -1
        return '🎇'
    }

    const totalPeaceTime = () => timeOut
    setInterval(passTime , 1000) // run after every 1000 ms

    return {
        launch : launch ,
         totalPeaceTime : totalPeaceTime
    }
}

const ohNo = makeNuclearBtn()
console.log(ohNo.launch())
console.log(ohNo.totalPeaceTime())

// Exercise

// init method should be called once

function init () {
    let isCalled = false

    return ()=>{
        if (isCalled) return
        isCalled = true
        console.log('init')
    }
}

const Init = init()
Init() // # pragma once
Init()
Init()
Init()


// Exercise 2

const array = [1,2,3,4]

// var i =  0 fix  : IIFE (function (idx) { setTimeout() } )(i)
for (let i = 0 ; i < array.length ; i += 1)
    setTimeout(function () {console.log('idx : ' , i)} , 3000)

// setTime out is async


/// ProtoTypes Inheritance .. classical inheritance

// Inheritance is object getting properties of another object

const newArr = []

// console.log(newArr.__proto__)

// array.__proto__.__proto__ // Base Object

//
// OBJECT -> ARRAY AND FUNCTIONS
//

let dragon = {
    name : 'dragon' ,
    fire : true ,
    fight (){
        console.log('Attacking !!!')
    },
    Greeting (){
        console.log(`Hey i am ${this.name}`)
    }
}


let electronDragon = {
    name : 'Electron Dragon ',
}

dragon.Greeting()

// one way to do this using bind
const ElectronGreeting = dragon.Greeting.bind(electronDragon)
ElectronGreeting()

// Using prototypes inheritance
electronDragon.__proto__ = dragon;
electronDragon.fight() // base properties
electronDragon.Greeting()

console.log('electronDragon is prototype of dragon' , dragon.isPrototypeOf(
    electronDragon
))

// working :-)

for (let prop in  electronDragon)
    if (electronDragon.hasOwnProperty(prop)) // check properties
          console.log('Electron' , prop)

// can't check base properties using `hasOwnProperty`

// Exercise :- function a () { } a.__proto__ => declare as global var and see props..

// __proto__ is not efficient

let human = { mortal : true }

let socrates = Object.create(human)
console.log('Property of human : ' , human.isPrototypeOf(socrates))
console.log(socrates)

// socrates.mortal work

// Exercise

// Add constructor to date object

// Solution

// don't use () => function bcz they don't have this binding

Date.prototype.lastYear = function () { return this.getFullYear() - 1 }
console.log('Date : ' ,new Date().lastYear())

// modify .map method on array and print it

Array.prototype.map = function (){ // overriding actual
        let arr =[]
        for (let i = 0 ; i < this.length ; i+=1)
            arr.push(this[i])
        return arr
}

console.log([1,2,3].map())

Function.prototype.bind = function(whoIsCallingMe){
    const self = this;
    return function(){
        return self.apply(whoIsCallingMe, arguments);
    };
}

//////