import initialState from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import nestedModule from '../nested-module/store';

export default {
  namespaced: true,
  state: initialState(),
  actions,
  mutations,
  getters,
  modules: {
    nestedModule,
  },
};
