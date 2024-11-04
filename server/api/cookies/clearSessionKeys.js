import {deleteCookie,sendError,createError} from 'h3'

export default defineEventHandler((event)=>{
    try {
        deleteCookie(event,'userid');
        deleteCookie(event,'randomKey');




        return {
            status : 200,
            message : 'Çerezler Başarıyla Silindi !'
        }
    } catch (error) {
        if(!error.statusCode){
            error = createError({statusCode : 500,statusMessage : 'Tanımlanamayan bir hata oluştu !'})
        }

        return sendError(event,error);
    }
})