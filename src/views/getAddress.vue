<template>
    <baidu-map class="map"
               :center="userlocation"
               :zoom='13'
               :scroll-wheel-zoom='true'
    >
        <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-scale>
        <bm-marker :position="userlocation" :dragging="true" animation='BMAP_ANIMATION_BOUNCE'>
            <bm-label content='郑州大学出版社' :labelStyle="{color:'red',fontSize:'12px'}" :offset="{width:-35,height:30}" />
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
                mk: {},
                locationL:'',
                creditLongitude:'',

            }
        },
        mounted() {
            this.getlocation();
            this.getCity();
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
            getCity() {
                let _this = this
                var geolocation = new BMap.Geolocation();
                geolocation.getCurrentPosition(function (r) {
                    const myGeo = new BMap.Geocoder()
                    myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), data => {
                        if (data.addressComponents) {
                            const result = data.addressComponents
                            const location = {
                                creditLongitude: r.point.lat, // 经度
                                creditLatitude: r.point.lng, // 纬度
                                creditProvince: result.province || '', // 省
                                creditCity: result.city || '', // 市
                                creditArea: result.district || '', // 区
                                creditStreet: (result.street || '') + (result.streetNumber || '') // 街道
                            }
                            console.log(location)
                            _this.userlocation.lng =location.creditLatitude
                            _this.userlocation.lat =location.creditLongitude

                            _this.location = location;
                            _this.creditLongitude = location.creditLongitude;
                            _this.creditLatitude = location.creditLatitude;
                            _this.creditCity = location.creditCity;
                            // alert(this.getStatus());
                        }
                    })



                   /* if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                        if (r.accuracy == null) {
                            alert('您已拒绝地理位置授权');
                            //用户决绝地理位置授权
                            return;
                        } else {
                            const myGeo = new BMap.Geocoder()
                            myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), data => {
                                if (data.addressComponents) {
                                    const result = data.addressComponents
                                    const location = {
                                        creditLongitude: r.point.lat, // 经度
                                        creditLatitude: r.point.lng, // 纬度
                                        creditProvince: result.province || '', // 省
                                        creditCity: result.city || '', // 市
                                        creditArea: result.district || '', // 区
                                        creditStreet: (result.street || '') + (result.streetNumber || '') // 街道
                                    }
                                    console.log(location)
                                    _this.location = location;
                                    _this.creditLongitude = location.creditLongitude;
                                    _this.creditLatitude = location.creditLatitude;
                                    _this.creditCity = location.creditCity;
                                    // alert(this.getStatus());
                                }
                            })
                        }
                    }*/
                })
            }

        }
    }

</script>
<style>
    .map{
        height: 500px;
        width: 100%;
    }
</style>
