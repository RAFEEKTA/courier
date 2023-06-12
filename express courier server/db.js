//importing mongoos
const mongoose = require('mongoose');

//mongodb connection string

mongoose.connect('mongodb://127.0.0.1:27017/courierserver', { useNewUrlParser: true })

//creating model
const Admin = mongoose.model('Admin',
    {
        username: String,
        userid: Number,
        psw: String

    })


const Employee = mongoose.model('employee',
    {
        branch: String,
        username: String,
        userid: Number,
        password: String,



    })

const Branch = mongoose.model('branch',
    {
        branch:String,
        employees:{}
    }


)


module.exports = {
    Admin, Employee, Branch
}
