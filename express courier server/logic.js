const db = require('./db')

adminLogin = (userid, psw) => {

    return db.Admin.findOne({ userid, psw }).then(user => {

        if (user) {
            return {
                message: "Login Successfull",
                status: true,
                statusCode: 200,
                currentuser: user.username,
                currentacno: user.userid
            }
        }
        else {
            return {
                message: "incorrect id or password",
                status: false,
                statusCode: 404
            }

        }

    })
}

registerEmployee = (branch, username, userid, password) => {





    return db.Branch.findOne({ branch }).then(result => {
        if (result) {
            return db.Employee.findOne({ userid }).then(user => {
                if (user) {
                    return {
                        message: "user alrdery exist",
                        status: false,
                        statusCode: 404
                    }
                } else {
                    result.employees.username = []
                    result.save()
                    newuser = new db.Employee({
                        branch,
                        username,
                        userid,
                        password

                    })
                    // save new object to reflect the change in db
                    newuser.save()
                    return {
                        message: " Registration successfull",
                        status: true,
                        statusCode: 200,

                    }
                }

            })

        } else {
            return {
                message: " Branch does not found",
                status: false,
                statusCode: 404
            }
        }
    })

}
employeelogin = (userid, password) => {

    return db.Employee.findOne({ userid, password }).then(user => {

        if (user) {
            return {
                message: "Login Successfull",
                status: true,
                statusCode: 200,
                currentuser: user.username,
                currentacno: user.userid
            }
        }
        else {
            return {
                message: "incorrect id or password",
                status: false,
                statusCode: 404
            }

        }

    })
}



bookitem =(frombranch,tobranch,fromparty,topary,item,quantity,invoice,fright,bookedby) =>{
    
}

module.exports = {
    adminLogin, registerEmployee, employeelogin
}

