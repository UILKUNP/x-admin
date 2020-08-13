<template>
  <div class="admin-content">
    <div class="router-content flex-al">
      <x-com-editbar @refresh="init"></x-com-editbar>
      <router-table :table-data="tableData"></router-table>
      <el-pagination
        v-margin-top="'15px'"
        background
        layout="prev, pager, next"
        :total="total"
        :hide-on-single-page="Boolean(total)"
      ></el-pagination>
    </div>
  </div>
</template>
<script >
import xComEditbar from '@/components/x-com-editbar'
import routerTable from './components/router-table'
export default {
  components: {
    xComEditbar,
    routerTable,
  },
  data() {
    return {
      tableData: [],
      total: 0,
    }
  },
  async created() {
    this.init()
  },
  methods: {
    async init() {
      this.tableData = []
      let tableData = await this.router.getRouteInfo()
      this.tableData = tableData.data
      this.total = tableData.count
      console.log('tableData', tableData)
    },
  },
}
</script>>
