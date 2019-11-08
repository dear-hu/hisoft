<template>
    <div>
        <div class="home" style="margin-top: 200px">
            <div>您现在所在的城市为：{{this.city}}</div>

        </div>
    </div>
</template>



<script>
    //import BMap from 'BMap'  //我是一导入就报错了注释了就好了 看报错决定是否导入
    export default {
        data () {
            return {
                city:""
            }
        },
        mounted () {
            this.ready()

        },
        methods: {
            ready () {



                var geolocation = new BMap.Geolocation()
                geolocation.getCurrentPosition((r) => {
                    //console.log(r.address.city)
                    console.log(r)
                    let city = r.address.city;
                    let street = r.address.street;
                    let district = r.address.district;
                    this.city= city + district + street;


                }, { enableHighAccuracy: true })
            }
        }
    }
</script>
