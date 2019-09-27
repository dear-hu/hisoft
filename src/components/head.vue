<template>
    <div class="head">
        <el-row>
            <el-col class="logo" :span="8">logo</el-col>
            <el-col :span="16" class="topNav">
                <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="home">home</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">about</template>
                        <el-menu-item index="about">about</el-menu-item>
                        <el-menu-item index="2-2">about</el-menu-item>
                        <el-menu-item index="2-3">about</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">about</template>
                            <el-menu-item index="2-4-1">about</el-menu-item>
                            <el-menu-item index="2-4-2">about</el-menu-item>
                            <el-menu-item index="2-4-3">about</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="3" disabled>about</el-menu-item>
                    <el-menu-item index="4">about</el-menu-item>
                </el-menu>


            </el-col>
        </el-row>

    </div>

</template>
<script>
    export default {
        name: 'head',
        props: {},
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
