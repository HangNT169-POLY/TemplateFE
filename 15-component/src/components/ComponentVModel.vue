<script setup>
import { ref } from 'vue'

// DefineModel: giup truyen du lieu lai cho thang cha
// co the xet rang buoc ntn
// chi dung duoc vs ban vue tu 3.4 tro len
// const email = defineModel({
//   required: true,
//   default: 'abc@gmail.com',
//   type: String,
//   ""
// })
const email = defineEmits(['email'])
const setEmailDefault = () => {
  email.value = 'default value'
}
</script>
<template>
  <br />
  <br />
  <label>Email</label>
  <input type="text" v-model="email" />
  <p>{{ email }}</p>
  <button @click="setEmailDefault">Set Default</button>
</template>
