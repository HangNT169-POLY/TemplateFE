<script setup></script>

<template>
  <RouterLink to="/a">Home</RouterLink>
  <RouterLink :to="{ name: 'About' }">Page</RouterLink>
  <RouterView />
  <h1>aaa</h1>
</template>
