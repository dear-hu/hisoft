<template>
  <div class="about">
    <h1>{{ article }}</h1>
  </div>
</template>
<script>
    export default {
        name:"about",
        data(){
          return {
              id:'',
              article:string
          }
        },
        mounted() {
            this.id = this.$route.params.id
            console.log(this.$route.params.id)
        },
        methods:{
           getArticle(){
               let param = {
                   id:this.id
               }
               this.$post("/api/api/news",param).then((res) => {
                   this.article = res.article

               })
           }
        }
    }
</script>
