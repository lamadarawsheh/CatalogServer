const request = require('request')
const catalogRep = ["3000", "3005"]
const notify = (id, changes) => {
    return new Promise((resolve, reject) => {
        // const replicas = process.env.REP_IP.split(', ')
        catalogRep.forEach(ip => {
            const url = 'http://192.168.56.101:' + ip + '/notify/books/' + id
            console.log(url)
            request({ url, json: true, method: "PATCH", body: changes }, (error, res) => {
                if (error) {
                    return reject(error)
                } if (res.statusCode == 404 || res.statusCode == 400) {
                    return reject(res.body)
                }
                return resolve(res.body)
            })
        });
    })
}
module.exports = notify