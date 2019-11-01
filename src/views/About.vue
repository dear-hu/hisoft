<template>
  <div class="about">
     <!-- <el-button type="primary" @click="add">add</el-button>
      <el-button type="primary" @click="cut">cut</el-button>
      <p>{{this.$store.state.num}}</p>-->

      <el-input v-model="input"  placeholder="节流" @change="handlerInput"></el-input>
      <p>节流显示：{{inputValue}}</p>
      <el-input v-model="input1" placeholder="防抖" @change="handlerInput1"></el-input>
      <p>防抖显示：{{input1Value}}</p>
  </div>
</template>
<script>
    import { _debounce } from "../plugins/common";
    import { _throttle } from "../plugins/common";
    export default {
        name:"about",
        data(){
          return {
              input:'',
              input1:'',
              inputValue:'',
              input1Value:'',
          }
        },
        mounted() {
           /* console.log(this.$route.query)

            console.log(this.$store.state.num)*/
        },
        methods:{
            // 改变场数
          /*  handlerInput(){
              console.log(1)
            },*/
           /* handlerInput: _debounce(function(_type, index, item) {
                console.log(index);
                console.log(item);
                console.log(_type);
                this.inputValue = this.input
            }, 50),*/
           /* handlerInput1: _throttle(function(_type, index, item) {
                console.log(index);
                console.log(item);
                console.log(_type);
                this.input1Value = this.input1
            }, 50),*/

           /* add(){
                this.$store.dispatch('add1')
            },
            cut(){
                this.$store.dispatch('cut1')
            }*/
        },
        watch:{
            input: _debounce(function(_type, index, item) {
                console.log(_type);
                this.inputValue = this.input
            }, 1000),
            input1: _throttle(function(_type, index, item) {
                console.log(_type);
                this.input1Value = this.input1
            }, 1000),
        }
    }
</script>
