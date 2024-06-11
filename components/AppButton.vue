<script setup lang="ts">
const props = defineProps<{
  buttonText: string
  alertMessage: string
}>()
const showAlert = (message: string) => {
  alert(message)
}
</script>
<template>
  <button @click="showAlert(props.alertMessage)">{{ props.buttonText }}</button>
</template>
