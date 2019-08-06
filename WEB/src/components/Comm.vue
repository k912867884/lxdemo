<template>
   <div>
      <!-- 轮播图 -->
      <mt-swipe :auto="4000" style="width:100%;height:14rem;">
         <mt-swipe-item><img class="my_imgs" src="../assets/imgs/lunbo/meishi05.jpg"></mt-swipe-item>
         <mt-swipe-item><img class="my_imgs" src="../assets/imgs/lunbo/meishi05.jpg"></mt-swipe-item>
         <mt-swipe-item><img class="my_imgs" src="../assets/imgs/lunbo/meishi05.jpg"></mt-swipe-item>
         <mt-swipe-item><img class="my_imgs" src="../assets/imgs/lunbo/meishi05.jpg"></mt-swipe-item>
      </mt-swipe>
      <!-- 详情主要内容 -->
      <div>
         <p>黄金蛋炒饭</p>
         <p>啥的积分OA少年的佛ID撒分配</p>
         <span>￥18</span>
      </div>
      <hr style="margin:10px">
      <h4>用户评价</h4>
      <div>
         <h5>用户评价</h5>
      </div>
      <!-- 商品推荐 -->
      <div>
         <h3>商品推荐</h3>
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
/* 轮播图样式 */
.my_imgs{
   width:100%;
}
</style>
