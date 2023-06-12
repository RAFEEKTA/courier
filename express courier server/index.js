//importing express
const express = require('express');

//import logic file
const logic = require('./logic')

//app creation
const app = express();

//port set
app.listen(3000, () => {
    console.log("app started at port 3000");
})

//fornt end integration with server
const corss = require('cors')
app.use(corss({ origin: 'http://localhost:4200' }))



//converting all incoming datas from json to js
app.use(express.json())

//requests starts here
app.post('/adminLogin', (req, res) => {
    logic.adminLogin(req.body.userid, req.body.psw)
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})

//employee register
app.post('/register', (req, res) => {
    logic.registerEmployee(req.body.branch,
        req.body.uname,
        req.body.userid,
        req.body.psw
    ).then(result => {
        res.status(result.statusCode).json(result)
    })

})


//login emolyee


app.post('/login', (req, res) => {
    logic.employeelogin(req.body.userid, req.body.password).then(
        result => {
            res.status(result.statusCode).json(result)
        })
})
//booking 

app.post('/booking',(req,res)=>{
    
})

