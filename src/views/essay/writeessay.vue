<template>
    <div>
      <!-- <vue-editor v-model="data.content" :editorToolbar="data.customToolbar"></vue-editor> -->
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { ElForm } from 'element-plus'
import { VueEditor } from "vue2-editor"
import { useRoute } from 'vue-router'


// type FormInstance = InstanceType<typeof ElForm>
const route = useRoute()
const data = reactive({
  content: '',
  customToolbar: [
    [{header: [false, 1, 2, 3, 4, 5, 6]}],
    ["bold", "italic", "underline", "strike"], // toggled buttons
    [{align: ""}, { align: "center"}, {align: "right"}, {align: "justify"}],
    ["blockquote", "code-block"],
    [{list: "ordered"}, {list: "bullet"}, {list: "check"}], 
    [{indent: "-1"}, {indent: "+1"}], // outdent/indent
    [{color: []}, {background: []}], // dropdown with defaults from theme
    ["link", "image", "video"], ["clean"] // remove formatting button
  ]
})
console.log(route.query)
</script>