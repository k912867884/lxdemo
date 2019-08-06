<template>
   <div>
      <!-- 轮播图 -->
      <mt-swipe :auto="4000" class="myswipe">
         <mt-swipe-item><img class="mylunbo_img" src="../assets/imgs/lunbo/meishi01.jpg"></mt-swipe-item>
         <mt-swipe-item><img class="mylunbo_img" src="../assets/imgs/lunbo/meishi02.jpg"></mt-swipe-item>
         <mt-swipe-item><img class="mylunbo_img" src="../assets/imgs/lunbo/meishi03.jpg"></mt-swipe-item>
         <mt-swipe-item><img class="mylunbo_img" src="../assets/imgs/lunbo/meishi04.jpg"></mt-swipe-item>
         <mt-swipe-item><img class="mylunbo_img" src="../assets/imgs/lunbo/meishi05.jpg"></mt-swipe-item>
      </mt-swipe>
      <h5 style="color:#555;">美食推荐</h5>
      <!-- 横幅 -->
      <div style="overflow-x:auto;">
         <ul class="henfu_ul">
            <li class="henfu_ul_li" v-for="(elem,i) of 6" :key="i">
               <img src="../assets/imgs/lunbo/meishi02.jpg">
               <span>美味烧鸭</span>
            </li>
         </ul>
      </div>
      <!-- 分割线 -->
      <h2 style="color:#555;">为您推荐</h2>
      <!-- 主要内容样式 -->
      <div v-for="(elem,i) of 12" :key="i">
        
            <img class="my_img" src="../assets/imgs/lunbo/meishi01.jpg">
            <p class="my_title">数量肯定积分拉开京东方</p>
            <div class="my_content">
               <span class="shangjia">乡村小厨</span>
               <div>
                  <span class="my_price">￥100</span>
                  <span class="my_cart">加入购物车</span>
               </div>

            </div>
       
      </div>
   </div>
</template>
<script>
export default {
   data(){
      return{
         
      }
   }
}
</script>
<style scoped>
/* 主要内容样式 */
.shangjia{
   font-size:1.5rem;   
   font-weight:bold;
}
.my_cart{
   display:inline-block;
   margin-left:1rem;
   width:6rem;
   height:2rem;
   color:red;
   border:1px solid red;
   text-align:center;
   line-height:2rem;
   border-radius:5px;
}
.my_price{
   font-weight:bold;
   font-size:1.6rem;
   color:red;
}
.my_img{
   width:100%;
   height:10rem;
}
.my_content{
   display:flex;
   padding:0 0.8rem;
   align-items:center;
   justify-content:space-between;
   height:3rem;
   
}
/* 轮播图样式 */
.mylunbo_img{
   width:100%;
   height:100%;
}
.myswipe{
   height: 15rem; 
   font-size: 30px;
   text-align: center;
}
/* 横幅样式 */
.henfu_ul{
   display:flex;
   width:60rem;
   list-style:none;
}
.henfu_ul_li{
   width:10rem;
   height:10rem;
  
}
.henfu_ul_li img{
   width:10rem;
   height:8rem;
}
.henfu_ul_li span{
   display:inline-block;
   width:100%;
   padding-bottom:0.1rem;
   background:#aaa;
   text-align:center;
   font-size:1.2rem;
}
</style>
