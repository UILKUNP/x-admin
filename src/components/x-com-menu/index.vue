<template>
  <div class="mean">
    <el-menu
      background-color="#0F111C"
      text-color="#fff"
      active-text-color="#374EDB"
      class="el-menu-vertical-demo"
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
  data() {
    return {
      adminRoutes,
    };
  },
  created() {
    console.log(this.adminRoutes);
  },
};
</script>
<style lang="less" scoped>
.mean {
  max-height: calc(100vh - 60px);
  min-height: calc(100vh - 60px);
  background: #1d1f2b;
  overflow-y: auto;
  width: 220px;
}
</style>
