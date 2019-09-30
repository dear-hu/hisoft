<template>
    <div class="home">


        <el-dialog :title="this.type==0?'查看':'编辑'" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="日期" :label-width="formLabelWidth">
                    <el-date-picker type="date" placeholder="日期" :disabled="!this.type" v-model="form.date"  style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" :disabled="!this.type" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                    <el-input v-model="form.address" :disabled="!this.type" auto-complete="off"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>

        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="姓名">
                <el-input v-model="formInline.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="日期">
                <el-date-picker type="date" placeholder="日期" v-model="formInline.date" value-format="yyyy-MM-dd"  style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="searchList">查询</el-button>
            </el-form-item>
        </el-form>

        <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="handleClick(scope.row,0)">查看</el-button>
                    <el-button type="text" size="small" @click="handleClick(scope.row,1)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
            background
            class="pagination"
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :total="this.total">
        </el-pagination>

        <!--
                <el-button type="primary" @click="handle">主要按钮</el-button>
                <el-button type="primary" @click="jumpPage('about')">about</el-button>
                <router-link :to="{path:'about',query:{state:3}}">about</router-link>
                <el-button type="primary" @nun="getZzjsj">主要按钮</el-button>-->
    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {},
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                dialogFormVisible: false,
                form: {
                    name: '',
                    date: '',
                    address: ''
                },
                formInline:{
                    name: '',
                    date: ''
                },
                formLabelWidth: '120px',
                total:100,
                pageCount:0,
                type:''
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
