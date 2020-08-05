<template>
  <div class="home flex-al al-c">
    <img alt="Vue logo" src="@/assets/imgs/logo.png">
    <p class="w50"> {{text}}</p>
    <el-tag type="success">标签二</el-tag>
  </div>
</template>

<script>
export default {
 data(){
   return{
     text:'国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能。阿里巴巴体验团队倾力打造,设计和前端开发的便捷工具'
   }
 },
 created(){
   console.log(this.http)
 }

}
</script>
