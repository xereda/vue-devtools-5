import types from './types';

export default {
  [types.MUTATION_B](state, payload) {
    Object.assign(state, payload);
  },
};
