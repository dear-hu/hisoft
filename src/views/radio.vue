<!-- 选择规格实现方法 --->
<template>
    <div class="radio">
        <div v-for="(value,i) in listData">
            <p align="left" style="font-weight: bold">{{value.title}}<span>*</span></p>
            <div class="form-select">
                <div class="little_box">
                        <span v-for="(subitem,j) in value.list"
                              :class="{on:indexes[i]===j}"
                              @click="tap($event,i,j) ">{{subitem.subTitle}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {},
        data() {
            return {
                listData:[],
                indexes: new Array(listData.length).fill(0),
                isSelect: false
            }
        },
        mounted() {
            this.getlistData();
        },
        methods: {
            tap(event, i, j) {
                console.log(event)
                console.log(this.indexes)
                this.indexes[i] = j;
                this.$forceUpdate() // 强制更新视图和数据
            },
            getlistData(){
                let that  = this
                setTimeout(function () {
                    that.listData = [
                        {
                            title: '学历',
                            list: [
                                {subTitle: '全日制本科'},
                                {subTitle: '函授本科'},
                                {subTitle: '自考本科'},
                                {subTitle: '成教本科'},
                                {subTitle: '电大本科'},
                                {subTitle: '研究生及以上'}
                            ]
                        },
                        {
                            title: '所学专业',
                            list: [
                                {subTitle: '计算机相关'},
                                {subTitle: '法学相关'},
                                {subTitle: '金融相关'}
                            ]
                        },
                        {
                            title: '目前从事工作',
                            list: [
                                {subTitle: '公、检、法、律师'},
                                {subTitle: '其他'}
                            ]
                        },
                    ]
                },2000)
            }
        }
    };
</script>
<style lang="less">
    .little_box {
        overflow: hidden;
        display: flex;
        flex-direction: row;
    }

    .little_box span {
        padding: 4px 10px;
        display: inline-block;
        text-align: center;
        border-radius: 6px;
        color: #333;
        cursor: pointer;
        margin-bottom: 10px;
        margin-right: 15px;
        background: #e5e5e5;
    }

    .little_box span.on {
        background: #6181ff;
        color: #ffffff;
    }
</style>
