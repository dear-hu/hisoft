<template>
    <div id="app">
        <el-container>
            <el-header>
                <Head></Head>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import Head from './components/head'
    export default {
        name: 'app',
        components: {
            HelloWorld,
            Head
        }
    }
</script>

<style>
    @import "common/reset.css";
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

    }
</style>
