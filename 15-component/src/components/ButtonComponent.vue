<script setup>
// Event trong component con => thay doi state thang cha
const emit = defineEmits([`increase`, `inscreaseByTurTime`, `inscreaseBy1`])
const callFunctionInscrease = () => {
  emit(`increase`)
}
const callFunctionInscreaseByTurTime = () => {
  emit(`inscreaseByTurTime`)
}
const callTuyY = () => {
  emit(`inscreaseBy1`, 5)
}
</script>
<template>
  <div>
    <button @click="$emit('increase')">Click button</button>
    <button @click="callFunctionInscrease">Tang 1 - C1</button>
    <button @click="callFunctionInscreaseByTurTime">Tang 2</button>
    <button @click="callTuyY">Tang tuy y</button>
  </div>
</template>
