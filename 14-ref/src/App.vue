<script setup>
import { onMounted, ref } from 'vue'

const inputRef = ref(null)

const lists = ref(['Laptop', 'Desktop', 'Smartphone'])
const itemRef = ref([])
onMounted(() => {
  inputRef.value.focus()
  itemRef.value.forEach(i => {
    i.style.transition = 'opacity 1s'
    i.style.opacity = 1
  })
})
</script>

<template>
  <div>
    <h1>Template ref</h1>
    <input type="text" ref="inputRef" />
  </div>
  <div>
    <h1>Ref trong v-for</h1>
    <ul>
      <li
        v-for="(item, index) in lists"
        :key="item"
        ref="itemRef"
        style="opacity: 0"
      >
        {{ item }} - {{ index }}
      </li>
    </ul>
  </div>
  <div>
    <h1>Ref trong ham</h1>
    <input
      type="text"
      :ref="
        el => {
          console.log(el)
          // tuong thich thu vien ben ngoai
        }
      "
    />
  </div>
  <!-- Component: Giup chia nho giao dien nguoi dung thanh phan tu co the ap dung dc.
   1. Component chua html,js,...
   2. Component co the su dung nhieu lan

    -->
  <!-- Props: truyen du lieu tu component cha toi component con -->
</template>
