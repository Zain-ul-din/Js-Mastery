
/*                Asynchronous Programing             */

/*
  --> Promise
  --> Async Programing in js
  --> Es9 , spread operator => arr & obj
  --> making HTTP Req in js
  --> Using Axios package
 */

const promise = new Promise((resolve , reject)=>{
    if (true){
        resolve('Hey Promise')
    } else reject('😥')
})

promise
.then((res )=>{
    throw new Date() // or Error
    return res += '!'
})
.then(res => console.log(res)) // promise chain , every then returns new promise
.catch(err => console.log(err)) // catch Block

// promise.all([p1,p2,p3])
//.fetch (url) .then(res => res.json()).then().catch()


/// Async await , es8

// async function that return a promise

// fetch from local host

const axios = require('axios').default; // using 3rd party module

let data = {}

function fn (){
   console.log(axios.get('http://localhost:9000/Name')
   .then(res => {
      data = res.data
   } ))
}

fn()


setTimeout( () =>
console.log('End .. ' , data)
, 1000)

// fetch('http://localhost:9000/Name').then(res => res.json()).then(console.log)

// ES9

// spread operator

const Data = {
    name : 'zain ul din' , 
    age : '19' ,
    studyLevel : 'bscs'
}

const {name , ...info} = Data // grab name and , all rest of data in info

console.log(name ,' , ' , info)


const arr = [3,1,9,5,7]

const [firstIdx , secIdx] = arr

console.log(`[ First Idx : ${firstIdx}`  , ' , ' ,`sec Idx : ${secIdx} ]` )


function ThreeNumberSum (num1 , num2 , num3){
    return num1 + num2 + num3
}

// Three Number Sum
console.log(ThreeNumberSum(...arr))

/*   
 **              require vs import        **

 //          /// Modules .exports 
 //          const NAME = 'OWNER __ ZAIN UL DIN'
 //          module.exports = NAME

 //          // Es6 impors and exports

 //          export const name = NAME

 //          const data = 'metaData'

 //          export default data
*/






