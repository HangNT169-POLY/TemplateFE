<template>
  <h1>Page truyen tham so</h1>
  <div>
    <div v-for="user in username" :key="user.id">
      <h2>{{ user.name }}</h2>
      <RouterLink :to="`/page-view/${user.id}`">Detail</RouterLink>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue'

let username = ref([])
onMounted(() => {
  getData()
})
const getData = () => {
  fetch('http://localhost:8000/users')
    .then(res => res.json())
    .then(data => {
      username.value = data
    })
}
</script>
