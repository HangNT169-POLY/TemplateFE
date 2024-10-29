<script setup>
import { ref } from 'vue'

const count = ref(0)
// const props = defineProps(['mess'])
const props1 = defineProps({
  mess1: String,
})
</script>
<template>
  <div>
    <button @click="count++">{{ count }}</button>
    <!-- <p>{{ props.mess }}</p> -->
    <p>{{ props1.mess1 }}</p>
  </div>
  <!-- Props: Truyen du lieu tu cha & con.
   Props: Cho phep truyen cac gia tri. Viec truyen nay giup tai su dung code.
   Day la cach chia se du lieu giua cac componment trong VueJS. 
   Duoc dung o ca template & script
   Dac diem cua props la: 
    1. La 1 cach chia se giua lieu truyen tu cha den con.
    2. Su dung ca template & script
    3. Duoc dinh nghia la cac gia tri truyen vao component => Giup tai su dung component
    => Du lieu 1 chieu chi co thang cha => thang con 
    -->
</template>
