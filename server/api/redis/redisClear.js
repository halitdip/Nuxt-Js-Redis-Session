import {defineEventHandler} from 'h3'
import { getRedisClient } from "./redisSettings"
export default defineEventHandler(async (event)=>{

    const redis = getRedisClient();
    try{
        const body = await readBody(event);
        const exist = await redis.del(body.key);

      return {status : 200};
      
    }catch(error){
        return { status : 500 ,error : error.message}
    }finally{
        redis.disconnect(); //bağlantıyı kapat;
    }




})