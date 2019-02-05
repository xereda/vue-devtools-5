<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import dynamicVuexModule from './dynamic-vuex-store/store';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  created() {
    this.$store.registerModule('dynamicVuexModule', dynamicVuexModule);
  },
};
</script>
