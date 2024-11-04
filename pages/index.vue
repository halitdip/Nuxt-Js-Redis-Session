<template>
    <div class="centerDiv">
        <div>
            <button class="button" @click="quit">Çıkış Yap</button><br><br>
            <button class="button" @click="testPage">Test Sayfası</button>
        </div>
    </div>
</template>

<script>

import { useAuth } from '~/composables/useAuth'
export default {
    name: 'home',
    methods:{
        quit(){
            const {logout} = useAuth();
            logout();
        },
        testPage(){
            navigateTo('/test')
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