<template>
  <div class="about">
      <el-button type="primary" @click="add">add</el-button>
      <el-button type="primary" @click="cut">cut</el-button>
      <p>{{this.$store.state.num}}</p>
  </div>
</template>
<script>
    export default {
        name:"about",
        mounted() {

            console.log(this.$store.state.name)
        },
        methods:{
            add(){
                this.$store.dispatch('add1')
            },
            cut(){
                this.$store.dispatch('cut1')
            }
        }
    }
</script>
