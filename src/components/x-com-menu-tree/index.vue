<template>
 <div>
  <div v-for="(menu,index) in menuData" :key="menu.meta.id">
      <el-submenu :index="index+'-'+menu.meta.id" v-if="menu.children&&menu.children.length">
          <template slot="title">
            <i :class="menu.icon" v-if="menu.icon"></i>
            <span>{{menu.meta.name}}</span>
          </template>
          <MenuTree :menu-data="menu.children" />
        </el-submenu>
      <el-menu-item :index="index+'-'+menu.meta.id" v-else>
          <template slot="title">
             <i :class="menu.icon" v-if="menu.icon"></i>
            <span>{{menu.meta.name}}</span>
          </template>
        </el-menu-item>
  </div>
 </div>
</template>
<script>
export default {
    name: 'MenuTree',
    props:{
        'menuData':{
            type:Array
        }
    }
        
    
}
</script>
<style lang="less" scoped>
.el-menu-item.is-active {
  background: #374edb !important;
  color: #fff !important;
}
.el-menu {
  border-right: none;
}
.mean {
  max-height: calc(100vh - 60px);
  min-height: calc(100vh - 60px);
  background: #1d1f2b;
  overflow-y: auto;
  width: 220px;
}
</style>