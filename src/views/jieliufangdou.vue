<template>
    <div class="about">
        <el-input v-model="input" placeholder="节流"></el-input>
        <p>节流显示：{{inputValue}}</p>
        <el-input v-model="input1" placeholder="防抖"></el-input>
        <p>防抖显示：{{input1Value}}</p>

        <el-button @click="btn">连续点击</el-button>
        <el-button @click="btn1">连续点击</el-button>
    </div>
</template>
<script>
    import {_debounce, _throttle} from "../plugins/common";
    export default {
        name: "about",
        data() {
            return {
                input: '',
                input1: '',
                inputValue: '',
                input1Value: '',
            }
        },
        methods: {
            btn: _debounce(function (_type, index, item) { //节流
                console.log(11111)
            }, 1000),
            btn1: _throttle(function (_type, index, item) { //防抖
                console.log(2222)
            }, 1000),
        },
        watch: {
            input: _debounce(function (_type, index, item) { //节流
                console.log(_type);
                this.inputValue = this.input
            }, 1000),
            input1: _throttle(function (_type, index, item) { //防抖
                console.log(_type);
                this.input1Value = this.input1
            }, 1000),
        }
    }
</script>
