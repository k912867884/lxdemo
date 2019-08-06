<template>
   <div>
      <p class="yetou">为您推荐</p>
      <!-- 推荐内容 -->
      <div class="content">
         <div class="contents" v-for="(elem,i) of 12" :key="i">
            <img src="../assets/imgs/lunbo/meishi03.jpg">
              <p>辣的肯定是</p>
            <div class="price">
               <p>乡村小厨</p>
               <span>￥99</span>  
            </div>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   
}
</script>
<style scoped>
/* 页头样式 */
.yetou{
   text-align:center;
   font-size:1.5rem;
   font-weight:bold;
   color:rgba(255,0,0,0.5);
   border-radius:0 40px;
   background:#fff;
   border:1px solid #888;
}
/* 内容 */
.price{
   display:flex;
   padding:0 0.3rem;
   justify-content:space-between;
}
.price p{
   font-weight:550;
   color:#333;
}
.price span{
   font-weight:bold;
   color:red;
}
.content{
   display:flex;
   flex-wrap:wrap;
   background:#aaa;
   justify-content:space-between;
}
.contents{
   background:#fff;
   margin-bottom:0.3rem;
}
.contents img{
   width:11.6rem;
}

</style>
