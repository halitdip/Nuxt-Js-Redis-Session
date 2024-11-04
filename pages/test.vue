<template>
    <div class="centerDiv">
        <button @click="gohomepage" class="button" >
            ana sayfaya git
        </button>
    </div>
</template>

<script>
export default {
    name: 'home',
    methods:{
        gohomepage(){
            navigateTo('/')
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