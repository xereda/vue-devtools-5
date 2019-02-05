import types from './types';

export default {
  actionA({ commit }, payload) {
    commit(types.MUTATION_DYNAMIC_STORE, payload);
  },
};
