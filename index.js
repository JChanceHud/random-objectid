module.exports = async () => new Promise((rs) => {
  crypto.randomBytes(25, (bytes) => {
    rs(bytes.toString('hex'))
  })
})
