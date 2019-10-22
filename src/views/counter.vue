<template>
    <div class="home">


    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {},
        data() {
            return {

            }
        },
        mounted(){
            this.getList()
        },
        methods: {
            getList(){
                let param = {
                    pageCount :this.pageCount,
                    pageSize:10,
                    ...this.formInline
                }
                console.log(param)
                this.$get("/api/api/news",param).then((res) => {
                    console.log(res)
                })
            },

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
            },
            getZzjsj(data){
                console.log(data)
            },
            handleClick (row,type) {
                let dialogFormVisible = this.dialogFormVisible
                this.dialogFormVisible = !dialogFormVisible
                this.form = {
                    name: row.name,
                    date: row.date,
                    address: row.address
                }
                this.type = type

            },
            searchList(){
                console.log(1)
                this.getList();
            },
            getSTime(val) {
                this.sTime=val;//这个sTime是在data中声明的，也就是v-model绑定的值
            },
            handleCurrentChange(val) {
                console.log(val)
                this.pageCount = val;
                this.getList();
            },
            edit(){

            }

        }
    };
</script>
<style lang="less">
    .pagination{
        margin-top: 30px;
        text-align: center;
    }
</style>
