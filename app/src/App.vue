<template>
  <UserSelection />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserSelection from './components/UserSelection/UserSelection.vue';

export default defineComponent({
  name: 'App',
  components: {
    UserSelection
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
  width: 100vw;
  height: 100vh;
}

body {
  padding: 0;
  margin: 0;
}
</style>
