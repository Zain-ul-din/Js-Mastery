
// API's Design in node JS

console.log(`API's in Node-JS`)



import app from "./setup.js"



const PORT = 8000

// callback : req , res , next
app.get ('/' , (req , res) => {
   res.json('Hello')
}) 

// : URL/Data/

app
.get('/data/' , (req , res) => {
   res
   .send({messages : 'hello world'})
})
.post('/data' , (req , res) => { // res.body
    res
    .send(req.body)
})
.delete('/data/' , (req , res)=>{
    console.log(req.body)
    res.send('oki')
})


// best practices node



// listen
app.listen(8000 , ()=>{
   console.log(`Server is running on port:${PORT}`)
})

