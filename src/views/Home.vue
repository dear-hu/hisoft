<template>
    <div class="home">
        <el-button type="primary" @click="handle">主要按钮</el-button>
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
            }
        }
    };
</script>
