<template>
    <div class="home">
        <el-button type="primary" @click="handle">主要按钮</el-button>
        <el-button type="primary" @click="jumpPage('about')">about</el-button>
        <router-link :to="{path:'about',query:{state:3}}">about</router-link>
    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {},
        methods: {
            handle() {
                this.$get("/api/api/news").then((res) => {
                    console.log(res)
                })
            },
            jumpPage(pageType){
                this.$router.push({
                    path:`/${pageType}`,
                    query:{
                        state:2
                    }
                })
            }
        }
    };
</script>
