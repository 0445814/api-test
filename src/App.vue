<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import { onMounted } from 'vue';
import { showPost } from './api/index';
export default {
  name: 'App',
  components: {
    HelloWorld,
  },

  setup() {
    onMounted(async () => {
      const data = await showPost();

      console.log(data, "DATA");
    });
  },
};
</script>
