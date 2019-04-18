const crypto = require('crypto')

module.exports = async () => await new Promise((rs, rj) => {
  crypto.randomBytes(12, (err, bytes) => {
    if (err) return rj(err)
    rs(bytes.toString('hex'))
  })
})
