//Aarfi Ahmed

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