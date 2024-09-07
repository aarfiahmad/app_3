const registerUser = (req,res) =>
    {
       
    //  res.send('Register Route')
    //  res.jsonp({ user: 'tobi' })
    // res.redirect('http://example.com')
    // res.redirect('http://google.com')

    res.redirect('/admin')
}

const loginUser= (req,res) =>
{
res.send('Login  Route')
}

module.exports={

     registerUser,
     loginUser,
}