 /*
            OOP in JavaScript
*/


// OOP (Object Oriented Programing ) is style of programing

// Two types of OOP in JS __ class base AND prototype base

// Exercise : COC clone

 // functional programing approach

 const player = {
     name : 'archer' ,
     weapon : 'bow' ,
     attack () {
         return `${this.name} attack with ${this.weapon}`
     }
 }

 // 1 _ call , bind , apply

 const wizard = {
     name : 'wizard' ,
     weapon : 'fireball'
 }

 wizard.__proto__ = player // using prototype inheritance

 console.log(wizard.attack())


 /// factory Functions , like factory design pattern

 // factory Functions Approach



 function  createPlayers (name , weapon){
     return {
         name , // if properties and keys are same just write name
         weapon,
         // attack () {
         //     return `${this.name} attack with ${this.weapon}`
         // }
     }
 }

 const attack = function (){
     return `${this.name} attacks with ${this.weapon}`
 }

 const healer = createPlayers('healer' , 'Magically heals')
 // ... so on many player but it's not memory efficient

 // console.log(healer.attack())
 console.log(attack.call(healer))

 // Object.create()

  const SuperTroops = function (name , weapon){
     let superTroop = Object.create({}) // clone object
     superTroop.attack = attack
     superTroop.name = name
     superTroop.weapon = weapon
     return superTroop
  }

  const superHealer = SuperTroops('superHealer' , 'healing spell')
  console.log(superHealer.name , superHealer.weapon , superHealer.attack())


 /// Constructor Function

 // constructor function approach , almost similar to Es6 classes

 function SuperBarracks (name , weapon){
       console.log ('Constructor Function this before : ' , this)

       this.name = name
       this.weapon = weapon
       // so on ..
       this.attack = function (){
           console.log(`${this.name} attack with ${this.weapon}`)
       }

       console.log ('Constructor Function this After : ' , this)
 }

 // in order to use constructor functions we have to use `new` keyword
 // new keyword automatically return new object

 const superPekka = new SuperBarracks('Pekka' , 'Sumo')
 superPekka.attack()

 // we can additional method to Constructor using prototype
 SuperBarracks.prototype.sayHello = ()=> // prototype is static method
     console.log('Hey Super Troops !!')

 // this is lexically scoped and function is dynamically scoped

 console.log(superPekka.__proto__) // print all functions on it  , Anonymous this case ..
 superPekka.sayHello()

 // this is lexically scoped where they written () =>

 // prototype inheritance

 // fun fact about JS

 const num = new Number(2) // using constructor
 console.log(typeof num)


 /// Better Approach , using OOP

 // Es6 classes
 class LegendTroops{
     // constructor
     constructor(name  , weapon) {
         this.name = name
         this.weapon = weapon
     }

     // methods
     attack () {
         return `${this.name} attacks with ${this.weapon}`
     }

 }

  const superBowler = new LegendTroops('SuperBowler' , 'Stones') // instance
  LegendTroops.prototype.sayHello = () => {return `Hello`}
  console.log(superBowler instanceof LegendTroops) // checking class
  console.log(superBowler.attack())

  // Two way Object.create and classes and constructor functions

  //// this keyword 4 way to use

  // new binding in constructor functions
  // implicit binding // auto binding
  //  :
  const Data = {
     name : 'zain' ,
     sayName (){ // implicit binding
         return `Name : ${this.name}`
     }
  }

  // explicit  -> // using binding  .. func.bind(this);
  // arrow functions // this is lexically scoped

 // const obj = {...superBowler} // clone

 /// Inheritance

 class defence {

     constructor(name , damage , weapon) {
         this.name = name
         this.damage = damage
         this.weapon = weapon
     }

     Stat () {console.log(`${this.name} have ${this.damage} damage`)}
     Attack () {console.log(`${this.name} attacks with ${this.weapon}`)}

     // #member name private name
 }

 class Cannon extends defence{
    constructor(name , damage , weapon ) {
        super(name , damage , weapon);
    }
 }


 class Inferno extends defence {
     #pName = 'dracula'
     constructor(name , damage , weapon , loading_cost) {
         super(name , damage , weapon );
         this.loading_cost = loading_cost
     }

     Stat () {
         super.Stat()
         console.log('Loading Cost : ' , this.loading_cost)
     }

 }

 const cannon = new Cannon('canon' , 100 , 'balls')
 cannon.Stat()
 cannon.Attack()


 const inferno = new Inferno('inferno' , 3000 , 'fire' , '2000 dark elixir')
 inferno.Stat()


 // 4 pillars of OOP => Polymorphism , abstraction , inheritance , encapsulation

 // In Encapsulation data is not accessed directly , data can accessed by getter and setter that's help to hide data
 // abstraction is hiding unnecessary from user and provide just relevant data to who is using apis
 // Polymorphism ploy means many faces , in polymorphism there ara multiple functions but with different signature
 // inheritance allows to create a class that extends , reuse and overrider the behaviour of another class

 // more static methods  , prototype is static method