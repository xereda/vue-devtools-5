import Vue from 'vue';
import Vuex from 'vuex';
import moduleA from './views/module-a/store';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    moduleA,
  },
});
