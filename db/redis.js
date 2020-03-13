const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')

//创建客户端
const opts = {auth_pass: '123456'}
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host, opts)
redisClient.on('error', err => {
    console.error(err)
})

module.exports = redisClient