<!-- // Bai 1 & 2 -->
<!-- <script setup>
// const messs = 'Hello world'
// const rawHTML = `<div>
//   <h1>Van ban noi suy</h1>
//   <span style="color: red">This should be red.</span>
//   <div>`
// const idTest = 'test'
// const classTest = 'test-class'
// const isDisable = false
// const objectOfAttrs = {
//   id: 'container',
//   class: 'wrapper',
//   style: {
//     color: 'red',
//     backgroundColor: 'blue',
//   },
// }
// const listString =
//   'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,1,2,3,4,5,6,7,'
// const functionSplitString = data => {
//   return data.split(',').join('-')
// }
// let number = 0

// let clickButton = () => {
//   console.log(number)
//   number++
// }
</script> -->

<script setup>
import { reactive, ref, computed } from 'vue'

// import { reactive, ref } from 'vue'

// const count = ref(2)
// count.value++
// const inscrease = () => {
// count.value++
// }
// // C1: ref => muon lay gia tri => phai dung .value
// const sinhVien = ref({
// name: 'Nguyen Van A',
// age: 20,
// address: 'Ha Noi',
// gender: 'Male',
// isMarried: false,
// hobbies: ['Reading', 'Writing', 'Drawing'],
// scores: {
//   math: 8,
//   english: 9,
//   physics: 7,
// },
// })

// // C2: reactive => muon lay gia tri => khong can dung .value
// const sinhVien2 = reactive({
// age: 10,
// address: 'Ha noi',
// })
// const updateSinhVien = () => {
// sinhVien.value.name = 'Nguyen Van B'
// sinhVien.value.scores.math++
// sinhVien2.age++
// }
// Bai 5: Nexttip => cap nhap lai dom thuong dung trong cac bai toan hieu suat
// const count = ref(0)
// const inscrease = async () => {
//   count.value++
//   console.log(document.getElementById('test').innerText)
//   await nextTick()
//   console.log(document.getElementById('test').innerText)
// }
// Bai 6: Computed
// const book = reactive({
//   name: 'Book 1',
//   chapter: [],
// })
// const isChapter = () => (book.chapter.length > 0 ? 'Da xuat ban' : 'chua')
// const isChapter = computed(() =>
//   book.chapter.length > 0 ? 'Da xuat ban' : 'chua',
// )
// const updateChapter = () => book.chapter.push('Chapter')
// Bai 7: Cach ghi de computed. Chu y la computer chi de doc thoi nen chinh vi the muon ghi de => dung getter & setter
// const firstName = ref('Nguyen Thuy ')
// const lastName = ref('Hang')
// const fullName = computed({
//   get() {
//     return firstName.value + ' ' + lastName.value
//   },
//   set(newValue) {
//     ;[firstName.value, lastName.value] = newValue.split('.')
//   },
// })
// const change = () => {
//   fullName.value = 'Nguyen Van. A'
// }
// Bai 8 - Binding class
// C1: Binding thong qua doi tuong
const isActive = ref(true)
const isError = ref(true)
// C2: Su dung doi tuong
const objectClass = reactive({
  active: true,
  'has-error': false,
})
// C3: Co the su dung computed de binding class
const objectClassComputed = computed(() => ({
  active: isActive.value,
  'has-error': isError.value,
}))

const togleActive = () => {
  isActive.value = !isActive.value
}
// Bai 9: Binding style
const colors = ref('red')
const fontSize = ref(30)
const styleObject = reactive({
  border: 'none',
  borderRadius: '10px',
})
</script>
<template>
  <main>
    <!-- Bai 1 & 2 -->
    <!-- <h1>Ahihi</h1>
    <p>Fix cung: Hello</p>
    <p>Van ban noi suy: {{ messs }}</p>
    <div v-html="rawHTML"></div>
    <div>{{ rawHTML }}</div>
    <button id="test">Click</button>
    <br />
    <button v-id="idTest">Click</button>
    <br />
    <button :id="idTest" :class="classTest" :disabled="isDisable">
      {{ isDisable ? 'Disabled' : 'Click here' }}
    </button>
    <br />
    <button :id="functionSplitString(listString)" v-bind="objectOfAttrs">
      Click here
    </button>
    <br />
    <button @click="clickButton()">click:</button> -->
    <!-- Bai 3 -->
    <!-- <p>Count:{{ count }}</p>
    <button @click="count++">Increase</button>
    <button @click="count--">Descrease</button>
    <br />
    <button @click="inscrease">Inscrease1</button> -->
    <!-- <p>{{ sinhVien.name }}</p>
    <p>{{ sinhVien.scores.math }}</p>
    <p>{{ sinhVien2.address }}</p>
    <p>{{ sinhVien2.age }}</p>
    <button @click="updateSinhVien">Click update</button> -->
    <!-- <p id="test">{{ count }}</p>
    <button @click="inscrease">Click</button> -->
    <!-- Bai 6 -->
    <!-- <p>Ten sach:{{ book.name }}</p>
    <p>Da xuat ban:{{ isChapter() }}</p>
    <button @click="updateChapter">Click</button> -->
    <!-- Bai 7: Ghi de computed -->
    <!-- <p>First name: {{ firstName }}</p>
    <p>Last name: {{ lastName }}</p>
    <p>Full name:{{ fullName }}</p>
    <button @click="change">Change</button> -->
    <!-- Bai 8: Binding class -->
    <!-- Co dau nhay o class khi ma ten k viet lien -->
    <button class="button" :class="{ active: isActive, 'has-error': isError }">
      Active
    </button>
    <button class="button" :class="objectClass">Active 1</button>
    <button @click="togleActive" class="button" :class="objectClassComputed">
      Active 2 {{ isActive ? 'Active' : 'Desactive' }}
    </button>
    <!-- c2: Binding class -->
    <button class="button" :class="['active', 'has-error']">Active 1</button>
    <!-- Co the su dung phep tinh trong nay -->
    <button class="button" :class="[isActive ? 'active' : '']">
      Active 111
    </button>
    <!-- Bai 9: Bindind style -->
    <button style="color: red; background-color: blue">Bindind style</button>
    <!-- <button
      :style="{
        color: 'red',
        backgroundColor: 'blue',
        width: '100px',
        height: '100px',
        border: '1px solid red',
        'border-radius': '10px',
      }"
    >
      Bindind style Object -->
    <!-- </button> -->
    <button
      :style="{
        colors,
        fontSize: fontSize + 'px',
      }"
    >
      C3
    </button>
    <button :style="styleObject">C4</button>
    <button
      :style="[
        {
          styleObject,
        },
        {
          color: 'red',
          fontSize: '30px',
        },
      ]"
    >
      C5 - merge object
    </button>
  </main>
</template>
<style>
.button {
  background-color: blue;
}
.active {
  background-color: red;
}
.has-error {
  border: 1px solid red;
  background-color: antiquewhite;
}
</style>
