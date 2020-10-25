<template>
  <div class="w100">
    <el-tooltip class="item" effect="dark" content="新建" placement="top">
      <el-button type="primary" icon="el-icon-plus" circle @click="$emit('on-add')"></el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="刷新" placement="top">
      <el-button
        @click="refresh"
        type="success"
        icon="el-icon-refresh-left"
        circle
      ></el-button>
    </el-tooltip>
    <transition name="el-fade-in">
      <el-tooltip
        class="item"
        effect="dark"
        content="删除"
        placement="top"
        v-if="showDel"
      >
        <el-button
          type="danger"
          @click="onDel"
          icon="el-icon-delete"
          circle
        ></el-button>
      </el-tooltip>
    </transition>
    <transition name="el-fade-in">
      <el-tooltip
        class="item"
        effect="dark"
        content="编辑"
        placement="top"
        v-if="showEdit"
      >
        <el-button
          type="warning"
          @click="this.$emit('onEdit')"
          icon="el-icon-edit"
          circle
        ></el-button>
      </el-tooltip>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    showDel: {
      type: Boolean,
      default: false,
    },
    showEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    async refresh() {
      this.$emit("refresh");
    },
    onDel() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$emit("del");
      })
    },
  },
};
</script>
>
