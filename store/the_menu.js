import Vue from 'vue';

export default {
  namespaced: true,
  state() {
    return {
      menu: [],
      isMenuVisible: false,
    };
  },
  mutations: {
    SET_MENU(state, menu) {
      Vue.set(state, 'menu', menu);
    },
    SET_MENU_VISIBLE(state, val) {
      Vue.set(state, 'isMenuVisible', val);
    },
  },
};
