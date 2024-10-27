<script setup>
import FooterLayout from './layout/FooterLayout.vue'
import HeaderLayout from './layout/HeaderLayout.vue'
</script>

<template>
  <HeaderLayout />
  <main>
    <RouterView />
  </main>
  <FooterLayout />
</template>
