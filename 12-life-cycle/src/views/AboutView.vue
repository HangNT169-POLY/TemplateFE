<script setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue'
const time = ref(0)
let interaleId = null
onBeforeMount(() => {
  console.log('on before mount')
})
onBeforeUnmount(() => {
  console.log('on before unmounted')
})
onMounted(() => {
  console.log('on mounted')
  // Sau khi gan dom ss dom ao xong => nhay vao ham onMounted
  // La 1 hook duoc goi sau khi component duoc them vao dom
  // Thuong duoc dung de khoi tao init gia tri ban dau cho component hoac cac thu vien ben ngoai
  interaleId = setInterval(() => {
    time.value++
  }, 1000)
})
onUnmounted(() => {
  console.log('on unmounted')
  // Khi thoat ra thi vao day
  // La 1 hook duoc goi sau khi component bi xoa go ra khoi dom
  // Thuong duoc dung khi don dep tai nguyen khi component bi xoa/Huy bo sk torng dom/Dong ket noi vs server ....
  clearInterval(interaleId)
})
const count = ref(0)
const inscreaseCount = () => {
  count.value++
}
onUpdated(() => {
  console.log('On Updated')
})
onBeforeUpdate(() => {
  console.log('On Before Update')
})
/**
 * OnBeforeMount & OnBeforeUnmount
 *  - OnBeforeMount: Goi truoc khi component duoc them vao dom. (TRONG QUA TRINH GAN VAO DOM THI CO 2 TRANG THAI VA TRUOC KHI GAN VAO DOM & SAU KHI GAN VAO DOM)
 *      + ON BEFORE MOUNT: TRUOC KHI GAN VAO DOM THI SE LAM GI (CAC SATE - DA DUOC KHOI TAO - DOM CHUA DUOC REDEN): CHUAN BI TRUOC KHI DOM DC RENDER
 *  - ON BEFORE UNMOUNTED: GOI TRUOC KHI COMPONENT TRUOC KHI GO RA KHOI DOM ( HUY BO SK/DUNG BO DEM THOI GIAN)=> DAM BAO CAC TAI NGUYEN DA DUOC HUY BO
 *
 */
// Luong hoat dong: onBeforeMount -> On Mounted -> onBeforeUnmount -> onUnmounted
/**
 * On Updated & OnBeforeUpdate
 *  - Khai niem:
 *          OnBeforeUpdate: Goi truoc khi component duoc cap nhat. (Truoc khi dom dc render)
 *               - Cho phep truy cap vao trang thai truoc khi dom dc render. Day la noi an toan de capnhap ma k gay ra vong lap vo han
 *          OnUpdated: Goi sau khi component duoc cap nhat. (Sau khi dom dc render)
 *               - Thuong su dung sau khi dom da duoc cap nhat => De lam viec voi DOM
 * Component: Render khi state hoac hook thay doi
 * Computed: Thuong duoc su dung tinh toan cac gia tri dua tren cac gia tri thuoc tinh khac. Tu dong cap nhat khi thuoc tinh do thay doi.
 * Computed: Duoc cache va chi tinh toan lai khi cac thuoc tinh phu thuoc thay doi
 * Watcher: Cung co diem tuong duong. Thuc hien khi du lieu thay doi.
 * Watcher: Su dung de thuc hien cac task vu k duoc cache. Thuc hien cac task vu bat dong ho.
 * Khi nao su dung watcher:
 *         + Theo doi cac thay doi phuc tap: Khi can thuc hien cac task vu bat dong ho, cac thay doi phuc tap (thay doi theo thoi gian)
 *         + Thuc hien cac task vu call API/Ghi log (Thuc hien cac trang thai k the hien duoc vs computed)
 *        + Theo doi cac thay doi sau
 */
</script>

<template>
  <main>
    <h1>Day la trang about</h1>
    <!-- <h2>Thoi gian da chay: {{ time }}</h2> -->
    <h2>Count: {{ count }}</h2>
    <button @click="inscreaseCount">Increase count</button>
  </main>
</template>
