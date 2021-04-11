const User = require('../../model/user')

module.exports = {
    register(req) {
        return new Promise((resolve, reject) => {
            let params = req.body
            return User.create(params).then((result) => {
                if (result) {
                    return resolve(result)
                } else {
                    return reject(500).send("Error while adding")
                }
            })
        })
    }
}