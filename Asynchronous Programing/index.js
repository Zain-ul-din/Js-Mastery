
/*                Asynchronous Programing             */

/*
  --> Promise

 */

const promise = new Promise((resolve , reject)=>{
    if (true){
        resolve('Hey Promise')
    } else reject('😥')
})

promise
.then(res =>{
    throw new Date() // or Error
    return res += '!'
})
.then(res => console.log(res)) // promise chain , every then returns new promise
.catch(err => console.log(err)) // catch Block

// promise.all([p1,p2,p3])
//.fetch (url) .then(res => res.json()).then().catch()


/// Async await