import { defineNuxtRouteMiddleware, navigateTo, useCookie } from "nuxt/app";

export default defineNuxtRouteMiddleware(async (to) => {


    if (process.server) {
        let auth = false;



        const useridcookie = useCookie('userid').value;
        const randomkeycookie = useCookie('randomKey').value;

        console.log(useridcookie)

        const exist = await $fetch('/api/redis/redisExist', {
            method: 'POST',
            body: {
                key: `frontenddunyasi_${useridcookie}_${randomkeycookie}_session`
            }
        })

        auth = exist.exist;


        if (!auth && to.name !== 'login')
            return navigateTo('/login');

        if (auth && to.name == 'login')
            return navigateTo('/');

    }


})