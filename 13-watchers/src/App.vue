<script setup>
import { reactive, ref, watch, watchEffect } from 'vue'

const count = ref(0)
watch(count, (newCount, oldCount) => {
  console.log(`Count thay doi tu: ${oldCount} -> ${newCount}`)
})
const inscrease = () => {
  count.value++
}
const question = ref('')
const isLoading = ref(false)
const answer = ref('')
// Computed: Dua tren source => tra ra gia tri
// Watcher : Theo doi source => tra ra ham
// Phan trang: Thay doi page => thay doi data => Watch
// TS1 : source: Co the nhan vao la 1 ref hay la 1 reactive object hay la 1 ham tra ve gia tri hay la 1 mang cua nhieu nguon
watch(question, async (newQuestion, oldQuestion) => {
  console.log(`New question: ${newQuestion}, old question: ${oldQuestion}`)
  // Kiem tra nguoi dung nhap co dau ? thi call API
  if (newQuestion.includes('?')) {
    isLoading.value = true
    answer.value = 'Loading...'
    try {
      const response = await fetch('https://yesno.wtf/api')
      answer.value = (await response.json()).answer
    } catch (error) {
      console.log(error.message)
      answer.value = 'Error!'
    } finally {
      isLoading.value = false
    }
  }
})
const x = ref(0)
const y = ref(0)
// Nhan vao ham
watch(
  () => x.value + y.value,
  sum => {
    console.log(`Sum: ${sum}`)
  },
)
const inscrease1 = () => {
  x.value += 1
  y.value += 1
}
// Mang nhieu nguon
watch([x, () => y.value + 1], sum => {
  console.log(`Gia tri cap nhat: ${sum}`)
})
// Object muon thay doi phai co getter
const user = reactive({
  age: 18,
  class: {
    students: 0,
    name: 'a',
  },
})
watch(
  user,
  users => {
    console.log(`User thay doi: ${JSON.stringify(users)}`)
  },
  { deep: true, immediate: true },
)
//  deep: false => k the cap nhat gia tri thay doi. Default cua watch la deep: true
// immediilaty:
const inscrease12 = () => {
  user.class.students += 1
}
// Tuong tu imdeif trong watch chay luon lan dau
watchEffect(() => {
  console.log(`Gia tri x: ${x.value}`)
  console.log(`Gia tri y: ${y.value}`)
})
</script>

<!-- Khi source trong watcher thay doi thi roi vao watcher -->
<template>
  <div>
    <h1>Watched</h1>
    <button @click="inscrease">Inscrease</button>
  </div>
  <div>
    <p>Hoi 1 cau hoi co the tra loi bang Yes/No:</p>
    <input type="text" v-model="question" :disabled="isLoading" />
    <p>answer: {{ answer }}</p>
  </div>
  <div>
    <h1>Source trong watche</h1>
    <p>X: {{ x }}</p>
    <p>Y: {{ y }}</p>
    <button @click="inscrease1">Inscrease</button>
  </div>
  <div>
    <p>Age: {{ user.age }}</p>
    <button @click="inscrease12">Inscrease Age</button>
  </div>
  <!-- Vue3: watcheffect:
    cho phep theo doi su thay doi reactive. Tu dong theo doi cac thuoc tinh phan ung su dung trong ham callback. 
    Tu biet duoc nen theo doi cac thuoc tinh nao. 
    So vs watch: Su dung watcheffect: Chi co new value 
    -->
  <!-- Ref: la thuoc tinh dac biet trong vuejs => Giup cac ban tham chieu cu the toi 1 bien...
     VUE: an het hoat dong trong dom => Khong the thao tac vs dom that.
     Khi can lam viec vs dom thi su dung ref
     Khi nao nen su dung: 
       1. Can truy cap dom truc tiep
       2. Tuong tac vs cac instance trong component 
      -->
</template>
