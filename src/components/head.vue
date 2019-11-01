<template>
    <div class="head">
        <p class="my-top-xj" ><span v-for="item in 2">☆</span></p>
        {{title.name}}{{title.age}}
        <el-row>
            <el-col class="logo" :span="8">logo</el-col>
            <el-col :span="16" class="topNav">
                <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="home">home</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">about</template>
                        <el-menu-item index="upload">upload</el-menu-item>
                        <el-menu-item index="about">about</el-menu-item>
                        <el-menu-item index="2-3">about</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">about</template>
                            <el-menu-item index="2-4-1">about</el-menu-item>
                            <el-menu-item index="2-4-2">about</el-menu-item>
                            <el-menu-item index="2-4-3">about</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="news">news</el-menu-item>
                    <el-menu-item index="4" @click="cc">about</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>

    </div>

</template>
<script>
    export default {
        name: 'head',
        props: ['title'],
        data() {
            return {
                pageType:'',
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                this.pageType = key;
                console.log(this.pageType)
                this.$router.push(`/${key}`)
                console.log(key, keyPath);
            },
            cc(){
               this.$emit('nun','子组件数据')
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "../common/reset.css";
    .logo{
        line-height: 60px;
    }
    .topNav{
        text-align: right;
        .el-menu{
            float: right;

        }
        .el-menu.el-menu--horizontal{
            border-bottom: none;
        }
    }
</style>
