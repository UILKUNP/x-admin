<template>
  <el-table
    v-margin-top="'25px'"
    :data="tableData"
    stripe
    border
    style="width: 100%"
    v-loading="tableData!=0&&!tableData.length"
     @selection-change="list=>this.$emit('changeSelect',list)">
  >
    <el-table-column type="selection" width="55" align="center">
    </el-table-column>
    <el-table-column prop="id" label="ID" width="120" align="center" />
    <el-table-column prop="parentId" label="父ID" width="120" align="center" />
    <el-table-column prop="name" label="路由名字" align="center" width="300">
    </el-table-column>
    <el-table-column prop="menuUrl" label="路径">
      <template slot-scope="scope">
        <span style="color:#4647FF;font-weight:bolder">
          /{{ scope.row.menuUrl }}</span
        >
        <br />
        <p style="font-style:italic">
          在前端 <span style="color:#4647FF">@/view/</span> 路径下创建
          <span style="color:#4647FF">/{{ scope.row.menuUrl }}/index.vue</span>
        </p>
      </template>
    </el-table-column>
    <el-table-column prop="menuCode" label="唯一标示" align="left" width="200">
      <template slot-scope="scope">
        <el-tag type="danger">{{ scope.row.menuCode }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="路由类型" align="center">
      <template slot-scope="scope">
        <el-tag v-if="scope.row.menuType == 1">基本路由</el-tag>
        <el-tag type="warning" v-if="scope.row.menuType == 2"
          >自定义路由</el-tag
        >
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  props: {
    tableData: {
      require:false,
      type: Array || Number,
      // default: () => [],
    },
  },
};
</script>
<style lang="less">
.icon {
  background: #fbede9 !important;
  color: #4647ff;
  border: 1px solid #f8dbd4;
  width: 50px;
  height: 50px;
  border-radius: 16px;
  margin-left: 25px;
}
</style>
