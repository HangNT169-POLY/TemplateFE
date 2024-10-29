<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ButtonCount from './components/ButtonCount.vue'
import { ref, watchEffect } from 'vue'
import ButtonComponent from './components/ButtonComponent.vue'
import ComponentVModel from './components/ComponentVModel.vue'
// import ChildrenComponent from './components/ChildrenComponent.vue'
// const sayHi = () => {
//   console.log('Say hi')
// }
const count = ref(0)
const inscreaseBy = number => {
  count.value += number
}
const email = ref('')
watchEffect(() => {
  console.log(email.value)
})
const changeEmailDefaultParent = () => {
  email.value = 'hangnt169@gmail.com'
}
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <p>{{ count }}</p>
    <ButtonComponent
      @increase="count++"
      @inscreaseByTurTime="count += 2"
      @inscreaseBy1="inscreaseBy"
    ></ButtonComponent>
    <ComponentA />
    <ComponentVModel v-model:email="email" />
    <button @click="changeEmailDefaultParent">
      Change email default parent
    </button>
    <!-- <ChildrenComponent
      :prop-a="12"
      prop-b="2"
      prop-c="hello"
      :prop-d="20"
      :prop-e="{
        message: 'Hello',
      }"
      prop-f="success"
      :prop-g="sayHi"
    /> -->
    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!123" />
      <ButtonCount mess="hangnt169gd" mess1="abid" />
      <button-count />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
