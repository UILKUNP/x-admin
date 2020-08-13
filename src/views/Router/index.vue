<template>
  <div class="admin-content">
    <div class="router-content flex-al">
      <x-com-editbar @refresh="init(pageNow)"></x-com-editbar>
      <router-table :table-data="tableData"></router-table>
      <el-pagination
        v-margin-top="'30px'"
        background
        :page-size="pageSize"
        :current-page="pageNow"
        layout="prev, pager, next"
        @current-change="changePage"
        :total="total"
       
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
      pageSize:2,
      pageNow:1
    }
  },
  async created() {
    this.init(1)
  },
  methods: {
    async init(page) {

      this.tableData = []
      let tableData = await this.router.getRouteInfo(page,this.pageSize)
      this.tableData = tableData.data
      this.total = tableData.count
      console.log('tableData', tableData)
    },
    changePage(e){
        this.pageNow=e
        this.init(e)
    }
  },
}
</script>>
