<script setup lang="ts">
import moment from 'moment'
const date = moment().format('MMMM Do YYYY, h:mm:ss a')
const props = defineProps<{
  title: string
  count: number
}>()
const doAlert = (title: string) => {
  alert(title)
}
</script>
<template>
  <div>
    <h1>{{ props.title }} - {{ props.count }}</h1>
    <div>{{ date }}</div>
    <button @click="doAlert(props.title)">アラート発出</button>
  </div>
</template>
