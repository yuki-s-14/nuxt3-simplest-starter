<script setup lang="ts">
const { setLocale } = useI18n()
</script>
<template>
  <div>
    <h1>{{ $t('hello', {name: 'vue-i18n'}) }}</h1>
    <p>{{ $t('language') }}</p>
    <button @click="setLocale('ja')">ja</button>
    <button @click="setLocale('en')">en</button>
    <button @click="setLocale('fr')">fr</button>
  </div>
</template>
