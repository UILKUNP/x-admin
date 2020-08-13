<template>
  <div class="nav-bar flex-row">
    <x-el-logo></x-el-logo>
    <div class="nav flex-row ">
      <el-popover
        placement="left"
        title=""
        width="200"
        trigger="click"
        v-model="visible"
      >
        <template>
          <p>退出登陆后，你需要重新输入账号和密码，你确定要退出登陆吗？</p>
            <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                <el-button type="primary" size="mini" @click="LoginOut">确定</el-button>
            </div>
        </template>
        <el-button slot="reference">退出登陆</el-button>
      </el-popover>
    </div>
  </div>
</template>
<script>
import XElLogo from "@/components/x-el-logo";
import LoginOut from "./loginOut"
export default {
  components: {
    XElLogo,
  },
  data() {
    return {
        visible:false,
        LoginOut
    };
  },
};
</script>
<style lang="less" scoped>
.nav-bar {
  background: #fff;
  height: 60px;
  box-shadow: 0 0 30px #eee;
}
.nav {
  width: calc(100vw - 220px);
  height: 60px;
  padding: 0 30px;
  justify-content: flex-end;
}
</style>
