<template>
  <div class="content">
    <div class="login-form flex-al al-c">
      <div class="logo-header flex-row w100 j-c">
        <img src="@/assets/imgs/logo.png" alt="logo" />
        <span class="logo-title">XADMIN</span>
      </div>
      <el-input
        placeholder="请输入账号"
        clearable
        v-model="username"
        prefix-icon="el-icon-user"
      >
      </el-input>
      <el-input
        clearable
        size="medium"
        v-margin-top="'20px'"
        show-password
        placeholder="请输入密码"
        v-model="password"
        prefix-icon="el-icon-key"
      >
      </el-input>
        <el-button type="primary" icon='el-icon-monitor' v-margin-top="'20px'" class="w100" @click="login(username,password)" >登陆</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: "",
      username: "",
    };
  },
  methods: {
    // 登录
    async login(username,password){
      await this.api.login(username,password)
      // 获取动态路由
      let res = await this.api.getRouteInfo()
      console.log(res)
      res.data.forEach(item=>{
        let Router = {path:item.menuUrl,
        name :item.name,
        children:item.children,}
        console.log(Router)
      })
    }
  },
};
</script>
<style lang="less" scoped>
.content {
  width: 100vw;
  height: 100vh;
  .flex-al;
  .al-c;
  .j-c;
  .login-form {
    width: 300px;
   
    border-radius: 4px;
    border: 1px solid #eee;
    background: #fff;
    padding: 20px;
    padding-bottom: 30px;
    .logo-header {
      margin-bottom: 30px;
      img {
        width: 30px;
        margin-right: 10px;
      }
      .logo-title {
        font-size: 25px;
        // color:rgb(64, 62, 194);
        margin-top: 5px;
        font-family: "Brusly-NameDemo-2";
        background: linear-gradient(
          180deg,
          rgba(68, 134, 255, 1) 0%,
          rgba(73, 28, 255, 1) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
</style>
