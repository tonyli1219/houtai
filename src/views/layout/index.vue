<template>
    <div>
        <Menu class="menu-box" />
        <Head class="head-box"/>
        <Container class="container-wrap"/>
    </div>
</template>
<script lang="ts" setup>
import Menu from '@/components/Menu/index.vue'
import Head from '@/components/Head/index.vue'
import Container from '@/components/Container/index.vue'

</script>
<style lang="scss" scoped>
.menu-box{
    display: inline-block;
    width: 200px;
    height: 100vh;
    background: #ffab8e;
}
.head-box{
    vertical-align: top;
    display: inline-block;
    width: calc(100vw - 200px);
    height: 80px;
}
.container-wrap{
    display: block;
    width: calc(100vw - 200px);
    height: calc(100vh - 80px);
    position: absolute;
    left: 200px;
    top: 80px;
    overflow: auto;
}
</style>