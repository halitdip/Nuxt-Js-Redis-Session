import {defineEventHandler, readBody, setCookie} from 'h3'
export default defineEventHandler(async (event)=>{

    const body = await readBody(event);

    if(!body.cookieName || !body.cookieValue){
        return {status : 500,message : 'Cookie adı ve değeri gereklidir !'}
    }


    setCookie(event,body.cookieName,JSON.stringify(body.cookieValue),{
        httpOnly : true,
        sameSite : 'Lax'
    })

    return {
        status : 200,
        message : `${body.cookieName} Başarıyla kaydedildi !`
    };
})