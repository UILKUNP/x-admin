<template>
  <div class="admin-content">
    <div class="router-content flex-al">
      <x-com-editbar @refresh="init(pageNow)" :showDel="Boolean(selectList.length)" :showEdit="Boolean(selectList.length===1)" @del="onDel(selectList)"></x-com-editbar>
      <router-table :table-data="tableData" @changeSelect="changeSelect" ></router-table>
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
      pageNow:1,
      selectList:[]
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
    },
    changeSelect(list){
      this.selectList=list;
    },
    async onDel(list){
      await this.router.delPermission(String(this._.getAttrList(list,'id')))
      await this.api.setRouterLocal()
      let tableData=this.tableData;
      list.forEach(val=>{
        tableData.splice(tableData.findIndex(row=>row.id==val.id),1)
      })
      this.tableData=tableData;
      if(!tableData.length){
        this.tableData=0
      };
      
    }
  },
}
</script>>
