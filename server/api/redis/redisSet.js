import {defineEventHandler} from 'h3'
import { getRedisClient } from "./redisSettings"
export default defineEventHandler(async (event)=>{

    const redis = getRedisClient();


    try{

        const body = await readBody(event);
        const expMinute = body.expTimeMinute * 60;
        const value = await redis.set(body.key,body.value,'EX',expMinute);

        return { data : value,status : 200}
    }catch(error){
        return { status : 500 ,error : error.message}
    }finally{
        redis.disconnect(); //bağlantıyı kapat;
    }




})