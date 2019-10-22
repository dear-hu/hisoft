<template>
    <baidu-map class="map"
               :center="{lng:114.065537,lat:22.553321}"
               :zoom='13'
               :scroll-wheel-zoom='true'
    >
        <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-scale>
        <bm-marker :position="{lng:114.065537,lat:22.553321}" :dragging="true" animation='BMAP_ANIMATION_BOUNCE'>
            <bm-label content='深圳市市民之家' :labelStyle="{color:'red',fontSize:'12px'}" :offset="{width:-35,height:30}" />
        </bm-marker>
    </baidu-map>
</template>
<script>
    import BMap from 'BMap'
    export default {
        name:"about",
        data(){
            return {
                userlocation: { lng: "", lat: "" },
                getMarker:'',
                mk: {}

            }
        },
        mounted() {
            this.getlocation()
        },
        methods:{

            getlocation () {
                //获取当前位置
                var geolocation = new BMap.Geolocation();

                console.log(geolocation)
                geolocation.getCurrentPosition((r) =>{
                    if(geolocation.getStatus() == BMAP_STATUS_SUCCESS){
                       // this.getMarker(r.point);
                        this.userlocation = r.point;
                        console.log(r.point)

                    }else {
                        alert('failed'+this.getStatus());
                    }
                });
            },
        }
    }

</script>
<style>
    .map{
        height: 500px;
        width: 100%;
    }
</style>
