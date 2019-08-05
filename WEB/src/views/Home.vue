<template>
   <div>
      <!-- 头部 -->
      <myheader></myheader>
      <!-- 底部导航栏 -->
      <mt-tabbar v-model="select" fixed>
         <mt-tab-item id="tab1"  @click.native="open(0)">
            <imgs 
            :tu1="require('../assets/imgs/tubiao/bl1.png')"
            :tu2='require("../assets/imgs/tubiao/bl0.png")'
            :panduan="panduan[0].s"
            ></imgs>
            主页
         </mt-tab-item>
         <mt-tab-item id="tab2" @click.native="open(1)">
            <imgs
            :tu1="require('../assets/imgs/tubiao/cm1.png')"
            :tu2='require("../assets/imgs/tubiao/cm0.png")'
            :panduan="panduan[1].s"
            ></imgs>
            分类
         </mt-tab-item>
         <mt-tab-item id="tab3" @click.native="open(2)"> 
            <imgs
            :tu1="require('../assets/imgs/tubiao/cz1.png')"
            :tu2='require("../assets/imgs/tubiao/cz0.png")'
            :panduan="panduan[2].s"
            ></imgs>
            搜索
         </mt-tab-item>
          <mt-tab-item id="tab4" @click.native="open(3)"> 
            <imgs
            :tu1="require('../assets/imgs/tubiao/hlg1.png')"
            :tu2='require("../assets/imgs/tubiao/hlg0.png")'
            :panduan="panduan[3].s"
            ></imgs>
            购物车
         </mt-tab-item>
         <mt-tab-item id="tab5" @click.native="open(4)"> 
             <imgs
            :tu1="require('../assets/imgs/tubiao/hmg1.png')"
            :tu2='require("../assets/imgs/tubiao/hmg0.png")'
            :panduan="panduan[4].s"
            ></imgs>           
            个人中心
         </mt-tab-item>
      </mt-tabbar>
      <!-- 面板 -->
      <mt-tab-container v-model="select">
         <mt-tab-container-item id="tab1">
            
         </mt-tab-container-item>
         <mt-tab-container-item id="tab2">
            面板2
         </mt-tab-container-item>
         <mt-tab-container-item id="tab3">
            面板3
         </mt-tab-container-item>
         <mt-tab-container-item id="tab4">
            面板4
         </mt-tab-container-item>
         <mt-tab-container-item id="tab5">
            面板5
         </mt-tab-container-item>
      </mt-tab-container>
   </div>
</template>
<script>
"use strict"
import MyHeader from "../components/MyHeader"
import Imgs from "./Imgs"
export default {
   data(){
      return{
         select:"select",
         panduan:[{s:true},{s:false},{s:false},{s:false},{s:false}]
      }
   },
   created(){
      this.select=this.$route.name;
      //console.log(this.$route.name);
   },
   methods:{
      open(n){
         for(let i=0;i<this.panduan.length;i++){
            if(i==n){
               this.panduan[i].s=true;
            }else{
               this.panduan[i].s=false;
            }
         }
      }
   },
  components:{
     "imgs":Imgs,
     "myheader":MyHeader
   }
}
</script>
<style scoped>

</style>
