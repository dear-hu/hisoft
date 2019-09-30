<template>
  <div class="about">
      <div class="block">
          <el-carousel trigger="click" height="240px">
              <el-carousel-item v-for="item in carouselList" :key="item">
                  <img :src="item.cover" class="carouselImg">
              </el-carousel-item>
          </el-carousel>
      </div>

      <div class="newsList">
          <el-row :gutter="50" v-for="item in newsList" class="news" >
              <el-col :span="6" :offset="1" class="newsImg">
                  <img :src="item.cover" @click="lookNews(item.id)">
              </el-col>
              <el-col :span="16">
                  <h3 class="newsTitle" @click="lookNews(item.id)">{{item.title}}</h3>
                  <p class="newsCon">{{item.summary}}</p>
              </el-col>

          </el-row>
      </div>
  </div>
</template>
<script>
    export default {
        name:"about",
        data(){
          return{
              newsList:[],
              carouselList:[]
          }
        },
        mounted() {
            console.log(this.$route.query.state)
        },
        mounted(){
            this.getList();
        },
        methods:{
            getList(){
                let param = {
                    pageCount :this.pageCount,
                    pageSize:10,
                    ...this.formInline
                }
                console.log(param)
                this.$get("/api/api/news",param).then((res) => {
                    console.log(res)
                    this.newsList = res
                    this.carouselList = res.slice(0,3)
                })
            },
            lookNews(id){
                console.log(id)
                this.$router.push(`/article/${id}`)

            }
        }
    }
</script>
<style lang="less">
    .carouselImg{
        display: block;
        width: 100%;
        height: 100%;
    }
    .news{
        height: 240px;
        overflow: hidden;
        margin-bottom: 30px;
        .newsImg{

            height: 240px;
            overflow: hidden;
            img{
                display: block;
                height: 100%;
                margin: 0 auto;
            }
        }
    }
</style>
