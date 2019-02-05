import types from './types';

export default {
  [types.MUTATION_MODULE](state, payload) {
    Object.assign(state, payload);
  },
};
