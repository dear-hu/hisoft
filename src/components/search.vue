<template>
    <div class="search">
        <el-form ref="form" label-width="80px">
            <el-form-item label="活动名称">
                <el-input v-model="name"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
                <el-input v-model="age"></el-input>
            </el-form-item>
        </el-form>
        <el-button @click="search">搜素</el-button>
    </div>

</template>
<script>
    export default {
        name: 'head',
        props: {},
        data() {
            return {
                name: '',
                age:1
            };
        },
        methods: {
            search() {
                this.$store.commit("changeValue", this.name);
                this.$store.dispatch("changeAge",this.age)
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "../common/reset.css";

    .logo {
        line-height: 60px;
    }

    .topNav {
        text-align: right;

        .el-menu {
            float: right;

        }

        .el-menu.el-menu--horizontal {
            border-bottom: none;
        }
    }
</style>
