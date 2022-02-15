<template>
    <div>
        <div style="height:80px;overflow:hidden;">
            <img src="../../assets/logo.png" alt="" class="logo-box">
        </div>
        <el-menu v-for="(item,key) in baseRouter" :key="key">
            <el-sub-menu :index="key.toString()">
                <template #title>
                    <i class="el-icon-location"></i>
                    <!-- item.meta报可能为undefined,暂时用了可选链处理的，但是不是最终解决方案 -->
                    <span>{{item.meta?.title}}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item :index="subKey.toString()"  v-for="(subItem,subKey) in item.children" :key="subKey" @click="handleGo(item.path+'/'+subItem.path)">{{subItem.meta?.title}}</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu>
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { ElForm } from 'element-plus'
import { router1 } from '../../router/index'
import { useRouter } from 'vue-router'
const baseRouter = router1
console.log(baseRouter)
const router = useRouter()
type FormInstance = InstanceType<typeof ElForm>
const formdata = reactive({
    username: '',
    password: ''
})
const loginform = ref<FormInstance>()
// 登录方法
const submitForm = (loginform: FormInstance | undefined) => {
    if (!loginform) return
    loginform.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
// 跳转方法
const handleGo = (path:string) => {
    router.push(path)
}
</script>
<style lang="scss" scoped>
.logo-box{
    box-sizing: border-box;
    width: 60px;
    height: 60px;
    margin: 10px 20px;
}
</style>