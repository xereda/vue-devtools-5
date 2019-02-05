import types from './types';

export default {
  actionA({ commit }, payload) {
    commit(types.MUTATION_A, payload);
  },
};
