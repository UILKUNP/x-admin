<template>
    <div>
    <div class="mean">
    <el-menu
        background-color="#0F111C"
      text-color="#fff"
      active-text-color="#374EDB"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-eleme"></i>
          <span>导航一</span>
        </template>
          <el-menu-item index="1-1"> <template slot="title">
          <i class="el-icon-eleme"></i>
          <span>导航一</span>
        </template></el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>
         <el-menu-item index="1-3">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
            </template>
               
         </el-menu-item>
         <el-menu-item index="1-4">选项2</el-menu-item>
         <el-menu-item index="1-5">选项2</el-menu-item>
       </el-menu>
   
  </div>
        <router-view></router-view>
       
    </div>
</template>
<style lang="less" scoped>
.el-menu-item.is-active{
    background: #374EDB!important;
    color: #fff!important;
}
.el-menu{
    border-right: none;
}
.mean{
max-height:100vh;min-height:100vh;background:#1D1F2B; overflow-y: auto; width: 220px;
}
</style>