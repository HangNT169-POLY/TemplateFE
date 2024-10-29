<script setup>
import { ref } from 'vue'
const count = ref(0)
const greet = event => {
  console.log(event)
  alert(`Hello ${event.target.value}`)
}
const sayHi = () => {
  alert('Hi')
}
const sayHi2 = () => {
  alert('Hi123')
}
const submitForm = () => {
  alert('submit')
}
const text = ref('')
const handlingInput = event => {
  text.value = event.target.value
  console.log(event)
}
const checkedName = ref([])
const gioiTinh = ref()
const texts = ref('')
const checkedName1 = ref('')
const firstOption = ref('hihi1')
const secondOption = ref('hih21')
</script>

<template>
  <div>Hello - Event handling</div>
  <!-- Directive event: v-on /@ => de xu ly sk trong dom 
    -->
  <button v-on:click="count++">Them 1</button>
  <button @click="greet">Them 1</button>
  <p>{{ count }}</p>
  <!-- Chan ngan chan toi phan tu cha. Tuc la khi click vao tahnag con thi se bi lan truyen vao thang ch -->
  <button @click.stop="sayHi">
    say 21
    <button @click="sayHi2">Say Hi2</button>
  </button>
  <!-- Mac dinh cua trinh duyet => load lai trang. 
   Neu k can goi form submit thif co them them prevent => Ngan chan hanh vi mac dinh cua sk 
    -->
  <form @submit.prevent.stop="submitForm">
    <button type="submit">Submit</button>
  </form>
  <!-- Key modifier : Event lien quan toi ban phim -->
  <input placeholder="Nhap ten cua ban" @keyup.enter="submitForm" />
  <input placeholder="Nhap ten cua ban1" @keyup.enter.alt="submitForm" />
  <div>
    <h1>Form input binding</h1>
    <!-- C1: De mapping 2 chieu thi dung cach nay qua event cua input -->
    <input type="text" :value="text" @input="handlingInput" />
    <!-- C2: v-model: no co the thay the cho cac event cua o input: change, selected... -->
    <!-- .lazy , .number.trim => modifilter -->
    Text:<input type="text" v-model.lazy="text" />
    Checkbox:
    <input type="checkbox" v-model="checkedName" :value="firstOption" />
    <label for="A">A</label>
    <input type="checkbox" v-model="checkedName" :value="secondOption" />
    <label for="B">B</label>
    <input type="checkbox" v-model="checkedName" value="C" />
    <label for="C">C</label>
    Radio: <input type="radio" v-model="gioiTinh" value="nam" />Nam
    <input type="radio" v-model="gioiTinh" value="nu" />Nu Select:
    <select v-model="texts">
      <option value="1">A</option>
      <option value="2">B</option>
      <option value="3">C</option>
    </select>
    <p>{{ text }}</p>
    <p>{{ gioiTinh }}</p>
    <p>{{ checkedName }}</p>
    <p>{{ texts }}</p>

    Checkbox:
    <input
      type="checkbox"
      v-model="checkedName1"
      true-value="yes"
      false-value="no"
    />
    <p>{{ checkedName1 }}</p>
    <!-- DOM ao: La cach bieu dien cua dom that trang web duoc thuc hien thong qua JS. Thay doi gian tiep thay vi truc tiep.
     Cach thuc hoat dong:
      1. Bien dien dom ao: Khi 1 component dc reder => view se tao 1 case doi tuong => bieu hien cau truc case cua dom that
      2. SS ( diffing) => Khi trang thai cua component thay doi (ref/reactive) => Vue se tao 1 dom moi va ss => Lay diem khac biet 
      => Thay the dom that (patching)
      Loi ich: Hieu suat cao & nhanh & khong can reload trang web & k ton tai nguyen nhieu
      -->
    <!-- Vong doi cua vue:
       1. Tu luc ban dau (created): Vue tao ra 1 doi tuong => tao ra 1 dom ao
       2. Sau do se toi mount: O day co 2 hook: beforeMount & mounted
       3. Khi trang thai cua component thay doi => goi lai created => tao ra 1 dom ao moi => ss => patching
       4. Khi component dc huy thi se goi hook beforeUnmount => mounted
        -->
  </div>
</template>
