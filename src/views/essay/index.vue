<template>
    <div>
      <el-table :data="data.essayArray" style="width: 80%;margin: 20px 50px;">
        <el-table-column prop="essay_title" label="文章标题"> </el-table-column>
        <el-table-column prop="tagName" label="标签"> </el-table-column>
        <el-table-column prop="create_time" label="创建时间"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template #default="scope">
          <el-button @click="handleModify(scope.row)" type="text" size="small">修改</el-button>
          <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router';
import { essayList } from '../../api/index'

const router = useRouter()
const data = reactive({
  essayArray: [],
  params: {}
})
// 获取列表方法
const  handleGetList = async () => {
  let info:any = await essayList(data.params)
  if (info.code === 200) {
    data.essayArray = info.data
  }
}
// 跳转修改文章方法
const handleModify = (ele:any) => {
  router.push({
    name: 'writeessay',
    query: {
      essay_id: ele.essay_id,
    }
  })
}
handleGetList()
</script>