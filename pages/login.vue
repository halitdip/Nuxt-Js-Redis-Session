<template>
    <div class="centerDiv">
        <form @submit.prevent="loginUser">
            <input v-model="email" placeholder="Email">
            <input v-model="password" placeholder="Password">
            <button type="submit">Giriş Yap</button>
        </form>
    </div>
</template>

<script>
import { useAuth } from '~/composables/useAuth'



export default {
    name: 'home',
    data(){
        return {
            email : 'frontenddunyasi',
            password : '1234567'
        }
    },
    methods:{
        async loginUser(){
            const {login} = useAuth();

            try {
                await login(this.email,this.password);

            } catch (error) {
                alert(error);
            }
        }
    }
}
</script>

<style>
.centerDiv {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: beige;
}

.button {
    color: #fff;
    background-color: aquamarine;
    border-radius: 12px;
    width: 120px;
    height: 30px;
    cursor: pointer;
}
</style>