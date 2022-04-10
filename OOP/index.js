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
       this.name = name
       this.weapon = weapon
       // so on ..
       this.attack = function (){
           console.log(`${this.name} attack with ${this.weapon}`)
       }
 }

 // in order to use constructor functions we have to use `new` keyword
 // new keyword automatically return new object

 const superPekka = new SuperBarracks('Pekka' , 'Sumo')
 superPekka.attack()

 // we can additional method to Constructor using prototype
 SuperBarracks.prototype.sayHello = ()=>
     console.log('Hey Super Guyz !!')

 superPekka.sayHello()

 // this is lexically scoped where they written () =>


