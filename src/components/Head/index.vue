<template>
    <div class="head-box">

    </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
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
.head-box{
  box-sizing: border-box;
  box-shadow: 0px 1px 0 0;
}
</style>