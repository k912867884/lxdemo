<template>
   <div>
      <!-- 横幅 -->
      <ul class="henfu_ul">
         <li class="henfu_ul_li" v-for="(elem,i) of 5" :key="i"></li>
      </ul>
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

</style>
