<template>
    <div class="login-page">
        <el-form ref="loginform" class="login-form">
            <div>coding实现梦想</div>
            <el-form-item label="用户名">
                <el-input v-model="formdata.username" type="text" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="formdata.password" type="text" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-button type="primary" @click="submitForm(loginform)">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import type { ElForm } from 'element-plus'

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
</script>
<style lang="scss" scoped>
.login-page{
    width: 100%;
    height: 100vh;
    background-image: url('../../assets/loginbg.jpeg');
    background-size: 100% 100%;
    .login-form{
        width: 300px;
        height: 200px;
        padding: 20px 10px;
        background: #f6f6f660;
        border-radius: 5px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
}
</style>