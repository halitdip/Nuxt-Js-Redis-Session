import Redis from 'ioredis'

let redisClient;

export function getRedisClient(){
    if(redisClient){
        redisClient.removeAllListeners('error');
        redisClient.disconnect();
    }


    redisClient = new Redis({
        host :  'localhost',
        port : 6379
    })

    redisClient.on('error',(err) => {
        redisClient.disconnect();
    })


    return redisClient;

}