
 /*         Functional Programing                            */

  /*
      -->  Curry
      -->  Partial Application
      -->  Pure Functions
      -->  Referential Transparency
      -->  Compose
      -->  Pipe
  */


/// Exercise : Amazon Shopping

 const user = {
    name : 'anyName' ,
    active : true ,
    cart : [] ,
    purchases : []
 }

/// Pure Functions
 //  const (no side effect ) + input => output

 const arr = [1,2,3,4,5]

 function PopFromArray (arr){ // have side effect
    arr.pop()
 }

 PopFromArray(arr)
 PopFromArray(arr)
 PopFromArray(arr)

 console.log('Array : ' , arr)

 // using PF

 function RemoveLastIdx (arr){ // mutable , no side effects
    const newArray = [].concat(arr)
    newArray.pop()
    return newArray
 }

 console.log(RemoveLastIdx(arr))


/// Idempotence , always return what expected

function NotGood () {
     return Math.random()
}

function ABS (num){
     return Math.abs(num)
}

/// Idempotence VS Declarative

 // humans are Declarative

 [1,2,3,4,5].forEach(item => console.log(item))


/// Immutability , not changing state instead return a new copy of state

 const obj = {name: 'zain' }

 function GetCloneOf(obj) {
   return {...obj} // Object.create
 }

 const newObj = GetCloneOf(obj)

 /// HOF and Closure

 // hof , is function return a function or take function as argument

 const HOF = () => () => console.log('HOF')
 HOF()()

 const closure = function (){
     let count = 0; // js store ref of this in heap when func will popped out from stack
     return function increment(){
         return ++count
     }
 }

 const col = closure()
 console.log(col())
 console.log(col())
 console.log(col())


 /// Currying

 const sum = num1 => num2 => num1 + num2;

 console.log('sum : ',sum(2)(3))

 const multiply = num1 => num2 => num3 => num1 * num2 * num3; // (num1 , num2 , num2)
 const multiplyBy2 = multiply.bind(null , 2); // 1st param here

 console.log(multiplyBy2()(2)(3))


/// dynamic Programing , Caching ~~~~~ memoization

 // cashing is way of store value so we can use them later
 // like school bag have many things in it whenever these require we can take them from the bag

 // cashing is hold data in box that we can access easily


 function AddTo10 (num ){
     return num + 10
 }

 // no optimize solution

 AddTo10(20)
 AddTo10(20)
 AddTo10(20)
 AddTo10(20)

 // optimize solution


 function memoizedAddTo10 () {
     let cache = {} // dictionary
     return (num) => { // HOF ~~~ closure
         if (num in cache) // same as cache.num == num
             return cache[num]
         else {
             console.log('long time : ')
             cache[num] = num + 80;
             return cache[num]
         }
     }
 }

 const MemoizedAddTo10 = memoizedAddTo10()

 console.log(MemoizedAddTo10(3))
 console.log(MemoizedAddTo10(3)) // prevents long time due to caching
 console.log(MemoizedAddTo10(3)) // prevents long time due to caching

 // let cache = {} // hash Table
 // cache['a'] = 'name'
 // cache['b'] = 'anyName'
 //
 // for (c in cache)
 //     console.log(cache[c])

 /// Compose and pipe

 // data --> fn --> data --> fn --> data
 // compose is system design principle , start from left to right

 const Compose = (abs , multiply ) => (data) => {
     return abs(multiply(data))
 }

 function MultiplyBy3 (data){
     return data * 3;
 }

 function MakePositive (data){
     return Math.abs(data)
 }

 console.log(Compose(MakePositive , MultiplyBy3)(-30));

 // pipe , same thing start from right to left mul(abs(data))

 /// Arity , number of argus a function take

/// Final Exercise , Amazon

/*
  TODO:
   1 . Add items to cart
   3 . Add 3% tax to item in cart
   4 . buy items: cart => purchase
   4 . Make the Cart Empty
 */

 const compose = (f , g) => (...args) => f (g(...args))

console.log(
    PurchaseItem(
      EmptyCart ,
      BuyItem ,
      ApplyTax ,
      ItemToCart
    )(user , {name : 'nitro 5' , price : 50000})
)

 function PurchaseItem (...fns) {
   return fns.reduce(compose)
 }

 function ItemToCart (user , item) {
     const updatedCart = user.cart.concat(item)
     return Object.assign({} , user , {cart: updatedCart}) // return new user state
 }

 function ApplyTax (user) {
   const {cart} = user
   const taxRate = 1.3;
   const updatedCart = cart.map(item => {
       return {name : item.price , price: item.price*taxRate}
   })
   return Object.assign({} , user , {cart: updatedCart})
 }

 function BuyItem (user) {
     return Object.assign({} , user , {purchases: user.cart})
 }

 function EmptyCart (user) {
     return Object.assign({} , user , {cart: []})
 }










