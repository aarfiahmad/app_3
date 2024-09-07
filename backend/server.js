// const express = require('express')
// const dotenv= require('dotenv').config()
// const PORT=process.env.PORT || 5000
// const {registerUser,loginUser}=require('./controllers/userControlers')

// const app=express()

// app.use(express.json())
// app.use(express.urlencoded({extended:false}))

// app.all('/',registerUser)
// app.all('/login',loginUser)

// app.use('/users/:userId/books/:bookId',require('./routes/userRoutes'))


// app.get('./hai',(req,res) =>
// {
//     console.log("here...")
//     res.send("hai")
// })

// app.listen(3000)


// app.listen(PORT,() =>
//     console.log(`SERVER STARTED AT here  ${PORT}`)
// )



const express = require('express')
const router =express.Router()
const app=express()



router.get('/vit',(req, res) =>
{
    console.log("here...")
    // res.send(`get user with ${req.params.id}`)
    res.json({message: "Error "})
    // res.download("routes/userRoutes.js")
})

app.listen(3001)