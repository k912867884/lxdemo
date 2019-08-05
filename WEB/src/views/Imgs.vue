<template>
   <div>
     <!-- <span>{{tu4}}</span> -->
      <img :src="panduan?tu1:tu2">
   </div>
</template>
<script>
export default {
   data(){
      return {
        
      }
   },
   props:{
      tu1:"",
      tu2:"",
      panduan:false
   }
}
</script>
<style scoped>
img{
   width:2.5rem;
   height:2.5rem;
}
</style>
