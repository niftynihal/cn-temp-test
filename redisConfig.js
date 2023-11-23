// redisConfig.ts
const Redis = require('ioredis');

const redisClient = new Redis(
    {
        host : "cn-redis.etqmcw.ng.0001.aps1.cache.amazonaws.com",
        port : 6379
    }
);

console.log("redis-host --- " ,redisClient.options.host)

redisClient.ping((err, result) => {
    if (err) {
      console.error('Error connecting to Redis:', err);
    } else {
      console.log('Connected to Redis:', result);
    }
    redisClient.quit();
  });

  redisClient.keys('*', (err, keys) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Keys:', keys);
    }
  })

module.exports = {redisClient}



