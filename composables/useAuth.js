import { navigateTo } from "nuxt/app";
import { useRoute } from "vue-router";

export function useAuth() {
    const login = async (username, password) => {
        const username_ = 'frontenddunyasi';
        const password_ = '1234567';


        if (username_ === username && password_ === password) {
            const session = {
                "name": "halit",
                "id": "12512851",
                "jwt": "jwt.jwt.jwt"
            };


            const randomKey = generateRandomKey();
            const id = session.id;

            const redisSet = await $fetch('/api/redis/redisSet', {
                method: 'POST',
                body: {
                    key: `frontenddunyasi_${id}_${randomKey}_session`,
                    value: JSON.stringify(session),
                    expTimeMinute: 120
                }
            });

            if (redisSet.status == 200) {
                await $fetch('/api/cookies/setCookie', {
                    method: 'POST',
                    body: {  cookieName: 'randomKey', cookieValue:randomKey  }
                });

                await $fetch('/api/cookies/setCookie', {
                    method: 'POST',
                    body: {  cookieName: 'userid', cookieValue:id  }
                });

            }
            navigateTo('/')
        }
    }
    const logout = async()=>{
        try {
            const router  = useRouter();

            const {userid,randomkey} = await $fetch('/api/cookies/getSessionKeys');

            console.log(userid);
            if(!userid || !randomkey){
                console.error('Eksik cookie !');
                return '';
            }


            await $fetch('/api/cookies/clearSessionKeys');

            await $fetch('/api/redis/redisClear',{
                method :'POST',
                body : {
                    key : `frontenddunyasi_${userid.replaceAll('"','')}_${randomkey.replaceAll('"','')}_session`
                }
            });
            router.push('/login')
        } catch (error) {
            
        }
    }
    const generateRandomKey = () => {
        const characters = '1234567890abcdfeklisyt';

        let result = '';

        for (let i = 0; i <= 8; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);

            result += characters[randomIndex];
        }


        return result
    }
    return { login,logout }
}

