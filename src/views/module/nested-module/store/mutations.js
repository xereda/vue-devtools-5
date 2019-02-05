import types from './types';

export default {
  [types.MUTATION_NESTED_MODULE](state, payload) {
    Object.assign(state, payload);
  },
};
