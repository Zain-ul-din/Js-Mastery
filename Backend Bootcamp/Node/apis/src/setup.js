/*
   add package.JSON && set type : module
*/

//// imports
import express from "express"
import cors from 'cors'
import bp from 'body-parser'

const { json , urlencoded } = bp

const app = express()

//// middle wares : list of funtions execute before controller

app
.use(cors())
.use(json())
.use(urlencoded({extended : true}))

// custom middle ware
app.use((req  , res , next)=>{
   console.log(req.body)
   next() // running next middle ware
})

// app.get('/' , [log , log] , (req , res) => {}) anoter way

// Router Sub Route

const route = express.Router()


// mounting | to mount this route to app
app.use('/api/' , route) // route will handle all req comes after /api/...

// route
// .get('/get' , (req , res)=>{
//    res.send('api/dat')
// })

// router verb methods

route.route('/')
.get((req , res)=>{
   res.send('hey')
})
// ..  so on

export default app;

/*
   Run Time Restful apisnpm init @eslint/config
*/