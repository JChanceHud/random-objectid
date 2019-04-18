#!/usr/bin/env node

(async () => {
  const randomObjectId = require('.')
  console.log(await randomObjectId())
})()
