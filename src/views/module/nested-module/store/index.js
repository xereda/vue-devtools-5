import initialState from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state: initialState(),
  actions,
  mutations,
  getters,
};
