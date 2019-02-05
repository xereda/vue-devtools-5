import Vue from 'vue';
import Vuex from 'vuex';
import module from './views/module/store';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    module,
  },
});
