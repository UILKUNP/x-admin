import router from '@/router'
import { MessageBox } from 'element-ui'
export default function loginOut() {
  localStorage.removeItem("APP_TOKEN")
  router.replace({
    name: 'login'
  });
  MessageBox({
    title: '提示',
    message:'您已经成功退出登陆～',
    type: 'success'
  })
}