<template>
  <div class="content">
    <div class="login-form flex-al al-c">
      <div class="logo-header flex-row w100 j-c">
        <div class="logo-title flex-al m-b-20">
            <h3 class="m-b-5">运营后台 </h3>
            <h5>基层呼吸系统疾病早期筛查干预能力提升项目 </h5>
        </div>
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
        class="m-t-20"
        show-password
        placeholder="请输入密码"
        v-model="password"
        prefix-icon="el-icon-key"
        @keyup.enter.native="login(username,password)"
      >
      </el-input>
        <el-button  type="primary" class="w-p-100 m-t-20" round @click="login(username,password)" >登陆</el-button>
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
    async login(username, password) {
      await this.$api.login.login(username, password)
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
  background: @color-primary;
  .login-form {
    width: 400px;
    border-radius: 4px;
    border: 1px solid #eee;
    background: #fff;
    box-sizing: border-box;
    padding: 20px;
    padding-bottom: 30px;
    .logo-header {
      .logo-title {
        text-align: center;
        h3{
          color: @color-primary;
        }
        h5{
          color: #999;
        }
      }
    }
  }
}
</style>
