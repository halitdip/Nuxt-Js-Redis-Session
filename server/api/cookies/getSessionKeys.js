import {getCookie,sendError,createError} from 'h3'

export default defineEventHandler((event)=>{
     try {
        const useridcookie = getCookie(event,'userid');
        const rndkey = getCookie(event,'randomKey');

        //çerezler yoksa

        if(!useridcookie || !rndkey){
            throw createError({statusCode:400,statusMessage : 'Eksik çerez'});
        }

        return {
            status : 200,
            userid : useridcookie,
            randomkey : rndkey
        }


     }   catch (error) {
        if(!error.statusCode){
            error = createError({statusCode : 500,statusMessage : 'Tanımlanamayan bir hata oluştu !'})
        }

        return sendError(event,error);
    } 
})