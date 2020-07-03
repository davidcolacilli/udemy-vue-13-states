<template>
  <div id="app">
    <Form/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Form
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  max-width: 500px;
}
section, form {
  padding: 2rem;
  margin: 1rem;
}
</style>
