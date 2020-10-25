<template>
<el-form ref="form" :model="form" label-width="100px">
  <el-form-item label="路由名称">
    <el-input v-model="form.name" placeholder="请输入路由名称" clearable prefix-icon="el-icon-s-order" v-w="90"></el-input>
  </el-form-item>
   <el-form-item label="路径">
    <el-input placeholder="请输入路径" v-model="form.menuUrl" v-w="90" prefix-icon="el-icon-s-order">
     <template slot="append">/index.vue</template>
    </el-input>
  </el-form-item>
  <el-form-item label="唯一标示">
    <el-input v-model="form.menuCode" placeholder="请输入唯一标示" clearable prefix-icon="el-icon-s-order" v-w="90"></el-input>
  </el-form-item>
  <el-form-item label="排序">
     <el-input-number v-model="form.menuOrder" :min="1" :max="999" label="菜单排序"></el-input-number>
  </el-form-item>
  <el-form-item label="父路由">
    <el-select v-model="form.parentId" placeholder="请选择父路由" clearable v-w="90">
      <el-option :label="'ID '+route.id+' '+route.name" :value="route.id" v-for="route in pidRoutes" :key="route.id" >
        <div class="flex-row j-sb">
          <div class="flex-row">
            <i :class="route.menuIcon" style="margin-right:10px"></i>
        <span style="margin-right:10px">ID {{route.id}} {{route.name}} @/view/{{route.menuUrl}}/index.vue</span>
          </div>
           <el-tag type="warning" v-if="route.menuType == 2"
        size="mini"
          >自定义路由</el-tag
        >
                 <el-tag v-if="route.menuType == 1" size="mini" >基本路由</el-tag>
        </div>
      </el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="图标">
    <el-select v-model="form.icon" placeholder="选择图标" clearable v-w="90">
      <el-option label="根目录" value="shanghai" ></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="是否启用">
    <el-switch v-model="form.isOnly"></el-switch>
  </el-form-item>
  <el-form-item label="路由类型">
    <el-radio-group v-model="form.type">
      <el-radio label="基本路由"></el-radio>
      <el-radio label="自定义路由"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item >
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button @click="cancel">取消</el-button>
  </el-form-item>
</el-form>
</template>
<script>
export default {
  data() {
    return {
      pidRoutes:[], //父路由列表
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      }
    }
  },
  async created() {
    let pidRoutes=await this.router.getPermissionInfo();
    console.log("pidRoutes", pidRoutes)
    this.pidRoutes=pidRoutes
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>