import {defineEventHandler} from 'h3'
import { getRedisClient } from "./redisSettings"
export default defineEventHandler(async (event)=>{

    const redis = getRedisClient();
    try{
        const body = await readBody(event);
        const exist = await redis.exists(body.key);

        if(exist){
            return {status : 200,exist : true, message : `Key ${body.key} exist.`}
        }else{
            return {status : 200,exist : false,message :  `Key not ${body.key} exist.`}
        }
       
    }catch(error){
        return { status : 500 ,error : error.message}
    }finally{
        redis.disconnect(); //bağlantıyı kapat;
    }




})