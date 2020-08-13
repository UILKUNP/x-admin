<template>
  <div class="admin">
    <x-com-navbar></x-com-navbar>
   <div class="flex-row al-start">
      <x-com-menu></x-com-menu>
      <router-view></router-view>
   </div>
   
  </div>
</template>
<script>
  import  XComMenu from "@/components/x-com-menu"
  import  XComNavbar from "@/components/x-com-navbar"
  export default{
    components:{
      XComMenu,
      XComNavbar
    }
  }
</script>
<style lang="less" scoped>
.admin{

}
</style>
