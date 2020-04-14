const crypto = require('crypto')

module.exports = () => {
  const bytes = crypto.randomBytes(12)
  return bytes.toString('hex')
}

