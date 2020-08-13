<template>
  <div class="admin">
   <div class="flex-row al-start">
      <x-com-menu></x-com-menu>
      <router-view></router-view>
   </div>
   
  </div>
</template>
<script>
  import  XComMenu from "@/components/x-com-menu"
  export default{
    components:{
      XComMenu
    }
  }
</script>
<style lang="less" scoped>
.admin{

}
</style>
