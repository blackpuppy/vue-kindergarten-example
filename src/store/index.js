import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      info: {
        name: 'Bob',
        role: 'admin',
      },
    },
  },

  mutations: {
    changeRole(state, newRole) {
      state.user.info.role = newRole;
    },
  },
});
