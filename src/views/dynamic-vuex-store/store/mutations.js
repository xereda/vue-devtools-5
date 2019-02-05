import types from './types';

export default {
  [types.MUTATION_DYNAMIC_STORE](state, payload) {
    Object.assign(state, payload);
  },
};
