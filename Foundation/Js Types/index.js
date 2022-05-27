         /*                 Types in JavaScript          */

         /*

            --> Static vs Dynamically Typed
            --> Primitive Types
            --> Pass By Ref vs Pass By Val
            --> Type Coercion
            --> Arrays , Functions , Objects

          */

/// Basic Types

    // number , true , strings , undefined , null Symbol , {} => typeof

    // primitive type , pass by val
    console.log(typeof 1)
    console.log(typeof 'string')
    console.log(typeof true)
    console.log(typeof Symbol('*'))
    console.log(typeof undefined)
    console.log(typeof null)

    // Non primitive type , pass by ref
    console.log(typeof {})
    console.log(typeof [])
    console.log(typeof function (){})

    // most of the types in js are objects

    // Arrays are objects
    var array = [1,2,3,4,5,6,7]
    console.log(Array.isArray([3,4,5,]))

/// Pass by REF Vs Pass by VAL

// objects are pass by ref and primitive types are pass by val

   var a = 5;

   function ChangeVal (a) {
       a += 1
   }

   ChangeVal(a)
   console.log(a)

   // by ref

   const obj = {name : 'anyName'}

   function AddName (obj , newName){
       obj.name = newName
   }

   AddName(obj , 'zain')
   console.log(obj.name)

  // exercise

  let objR = {a : 'a' , b : 'b' , c : 'c'}
  let cloneByRef = objR

  // change in any reflect in both
  objR.a = 'aa'
  cloneByRef.b = 'bb'

  console.log('cloneByRef' , cloneByRef)
  console.log('Real Object', objR)

  // inorder to make copy of object

  // shallow cloning clone only first layer not obj inside obj
  let cloneByVal = Object.assign(cloneByRef , objR) // or {...objR}
  cloneByVal.c = 'cc'
  console.log('cloneByVal' , cloneByVal)

  // Deap Cloning
  let superClone = JSON.parse(JSON.stringify(objR))


/// Type Coercion

    // l == R
    console.log(1 == '1') // true , not checks type
    console.log(1 === '1') // false , checks type also
    // NAN === NAN false
    // Object.is(-0 , +0) false

/// Dynamic Vs Static

     // c family vs Python or Js

    // static typed in js using TypeScript