<template>
    <div id="app">
        <el-container>
            <el-header>
                <Head :title="people"></Head>

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
        data(){
          return{
              people:{
                  name:"张三",
                  age:20
              }
          }
        },
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
        color: #2c3e50;
    }
</style>
