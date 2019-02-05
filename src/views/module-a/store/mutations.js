import types from './types';

export default {
  [types.MUTATION_A](state, payload) {
    Object.assign(state, payload);
  },
};
