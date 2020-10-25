<template>
  <div class="mean">
    <el-menu
      background-color="#0F111C"
      text-color="#fff"
      active-text-color="#374EDB"
      class="el-menu-vertical-demo"
      router
      :default-active="index"
    >
      <x-com-menu-tree :menuData="adminRoutes"></x-com-menu-tree>
    </el-menu>
  </div>
</template>
<script>
import getAsyncRoutes from "@/router/getAsyncRoutes";
import xComMenuTree from "@/components/x-com-menu-tree"
let adminRoutes = getAsyncRoutes();
export default {
  components:{
    xComMenuTree
  },
  watch:{
    $route(to, from) {
      this.index=to.path
    }
  },
  data() {
    return {
      adminRoutes,
      index:''
    };
  },
  created() {
    console.log(this.adminRoutes);
    this.index=this.$route.path
    // console.log()
  },
};
</script>
<style lang="less" scoped>
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
