<template>
   <div class="contents">
      <!-- 页头 -->
      <div>
         <router-link to="#">
            <img style="width:11rem;" src="../../src/assets/imgs/logo.png">
         </router-link>
         <span class="sp">美食</span>
         <div class="san" @click="open">
         </div>
      </div>
      <!-- 选择栏遮罩层 -->
      <ul v-if="mask==true" class="mask">
         <li><router-link to="/Home" class="ziti">首页</router-link></li>
         <li><router-link to="/Home" class="ziti">首页</router-link></li>
         <li><router-link to="/Home" class="ziti">首页</router-link></li>
         <li><router-link to="/Home" class="ziti">首页</router-link></li>
         <li><router-link to="/Home" class="ziti">首页</router-link></li>
         <li><router-link to="/Home" class="ziti">首页</router-link></li>
         <li><router-link to="/Home" class="ziti">首页</router-link></li>
         <div class="fork" @click="shut"></div>
      </ul>
     
   </div>
</template>
<script>
export default {
   data(){
      return{
         mask:false,
      }
   },methods:{
      open(){
         this.mask=true;
      },
      shut(){
         this.mask=false;
      }
   }
}
</script>
<style scoped>


.contents{
   width:100%;
   padding:0.5rem;
   margin:0;  
}
/* 右侧选项栏图标样式 */
.san{
   width:2rem;
   height:1.8rem;
   float:right;
   border-top:3px solid #000;  
   border-bottom:3px solid #000;
   position:relative;
   margin-top:10px;

}
.san::before{
   content:"";
   display:block;
   width:2rem;
   height:3px;
   background:#000;
   position:absolute;
   top:0.6rem;
}
/* 图标旁字体 */
.sp{
   display:inline-block;
   margin-left:0.7rem;
   position:absolute;
   top:1.6rem;
   font-weight:400;
   font-size:1.7rem;
}
/* 遮罩层样式 */
.mask{
   margin:0;
   padding:5rem 0 0 0;
   top:0;
   left:0;
   position:absolute;
   width:100%;
   height:40rem;
   list-style:none;
   background:rgba(0,0,0,0.5);
   overflow:hidden;
}
/* 遮罩层字体 */
.ziti{
   display:block;
   width:100%;
   height:3rem;
   color:white;
   font-size:2rem;
   text-align:center;
   text-decoration:none;
}
.fork{
   width:2rem;
   height:2rem;
   background:#fff;
   border-radius:50%;
   margin:1rem auto;
   position:relative;
}
.fork:after{
   display:block;
   content:"";
   width:20px;
   height:4px;
   background:#000;
   position:absolute;
   top:0.9rem;
   left:0.4rem;
   transform:rotate(135deg);
}
.fork:before{
   display:block;
   content:"";
   width:20px;
   height:4px;
   background:#000;
   position:absolute;
   top:0.9rem;
   left:0.4rem;
   transform:rotate(40deg);
}
</style>



