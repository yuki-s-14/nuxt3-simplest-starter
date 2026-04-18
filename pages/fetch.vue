<template>
  <div>
    <h1>Fetch Example</h1>
    <img :src="fetchData.message" alt="Random Dog Image" >
  </div>
</template>
<script setup lang="ts">

// $fetchの場合
const fetchData = await $fetch('https://dog.ceo/api/breeds/image/random')
console.log('$fetch:', fetchData.message)

// useFetchの場合
// const { data: fetchData } = await useFetch('https://dog.ceo/api/breeds/image/random', {
//   key: 'useFetchRandomDog',
// })
// console.log('useFetch:', fetchData.value?.message)

// useAsyncDataの場合
// const { data: fetchData } = await useAsyncData('useAsyncDataRandomDog', () => $fetch('https://dog.ceo/api/breeds/image/random'))
// console.log('useAsyncData:', fetchData.value?.message)
</script>
