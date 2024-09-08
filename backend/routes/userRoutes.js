//Aarfi Ahmed welcome to this house ...
//Aarfi Ahmed welcome to this house ...

//Hai,i am beginner in devoops
const express =require('express')
const router = express.Router()

 const {registerUser,loginUser} =require('../controllers/userControlers')

// const app=express()




 router.post('/',registerUser)


 router.post('/',loginUser)





router.post('/',(req,res) =>
{
    res.send("Register login")
})


// router.post('/login',(req,res) =>
//     {
//         res.send('Login Route')
//     })


module.exports= router