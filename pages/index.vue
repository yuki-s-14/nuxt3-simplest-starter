<template>
  <div>
    <AppTest title="ページタイトル" :count="count" />
    <NuxtIsland name="AppTestIsland" :props="{ title: 'ページタイトル(NuxtIsland)', count }"/>
    <AppTestServer title="ページタイトル(サーバー)" :count="count" />
  </div>
</template>
<script setup lang="ts">
const count = ref(1)
</script>
