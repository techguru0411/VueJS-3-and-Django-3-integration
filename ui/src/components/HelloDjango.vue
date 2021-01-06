<template>
  <div class="hello">
	<h1>{{ msg }}</h1>
	<h4>Componente de Vue3 insertado en Django 3</h4>
  </div>
</template>

<script>
export default {
  name: 'HelloDjango',
}
</script>

<style scoped>
h4 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #008f39;
  margin-top: 60px;
}
</style>