const request = require('request')

const invalidate = (id) => {
    return new Promise((resolve, reject) => {
        url = 'http://192.168.56.1:5000/invalidate/' + id
        request({ url, JSON: true, method: "DELETE" }, (error, res) => {
            if (error) {
                return reject(error)
            }
            if (res.statusCode != 200) {
                return reject(res.body)
            }
            return resolve(res.body)
        })
    })
}
module.exports = invalidate