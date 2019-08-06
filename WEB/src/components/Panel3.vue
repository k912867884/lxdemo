<template>
   <div>
      <!-- 页头 -->
      <div class="yetou">
         <h2 style="text-align:center;color:#888;">搜索</h2>
         <!-- 搜索框 -->
         <div class="seek">
            <span class="sousuo"></span>
            <span style="color:#555;">搜索您想要的美食</span>
         </div>
         <hr style="margin-top:1rem;">
      </div>
      <!-- 内容区域 -->
      <table></table>
      <div class="content">
         <!-- 左侧内容 -->
         <div class="zuo">
            <ul class="sousuo_ul">
               
               <li class="sousuo_li" v-for="(elem,i) of sousuo" :key="i" @click="op(i)" :class="n==i?'li_jia':''">
                 {{elem}}
               </li>
            </ul>
         </div>
         <!-- 右侧内容 -->
         <div class="you">       
            <div>
               <div v-for="(elem,i) of sousuo" :key="i">
                  <h3>{{elem}}</h3>
                  <div>
                     <img class="my_img" src="../assets/imgs/lunbo/meishi04.jpg" v-for="(elem,i) of 9" :key="i">
                  </div>
               </div>
            </div>  
         </div>
      </div>
   </div>
</template>
<script>
"use strict"
export default {
   
   data(){
      return{
         sousuo:["家常菜","下午茶","小吃馆","面包蛋糕","日韩料理","蔬菜水果","甜点饮品","超市便利","宵夜","粥","烧烤","海鲜","美酒"],
         n:"",//用于判断v-for是否添加样式
        
      }
   },
   methods:{
      op(n){
         var j=300;
         for(let i=0;i<this.sousuo.length;i++){
            if(i==n){
               this.n=i;
            }
         }
         console.log(n);
      }
   }
}
</script>
<style scoped>
/* 内容样式 */
.content{
   margin-top:5.4rem;
   background:#fff;
  
}
/* 右侧内容样式 */
.you{
   margin-left:4.8rem;
   overflow:auto;
}
.my_img{
   width:6rem;
   height:6rem;
   margin-right:3px;
   }
/* 内容左侧样式 */
.zuo{
   position:fixed;
   height:37rem;
   overflow:auto;
}
.sousuo_ul{
   width:4.8rem;
   list-style:none;
}
.sousuo_li{
   width:100%;
   height:3.5rem;
   box-sizing:border-box;
   background:#bbb;
   text-align:center;
   line-height:3.5;
   border:3px solid #bbb;
}
/* li的额外样式 */
.li_jia{
   border-left:3px solid red;
}
/* 页头样式 */
.yetou{
  position:fixed;
  background:#fff;
  width:100%;
}
.seek{
   width:22rem;
   height:2.4rem;
   margin:0 auto;
   background:#ccc;
   text-align:center;
   line-height:2.4rem; 
   position:relative; 
   border-radius:10px;
}
.sousuo{
   position:absolute;
   top:0.4rem;
   left:5rem;
   display:inline-block;
   width:1.3rem;
   height:1.3rem;
   border-radius:50%;
   border:2px solid #eee;
}
.sousuo::after{
   display:block;
   content:"";
   position:absolute;
   top:17px;
   left:12px;
   transform:rotate(50deg);
   width:0.4rem;
   border:2px solid #eee;
}

</style>
