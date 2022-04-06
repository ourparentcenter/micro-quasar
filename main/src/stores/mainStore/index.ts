import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    toggle: false,
  }),
  getters: {
    mainOpen: (state) => state.toggle,
  },
  actions: {
    toggleMain() {
      this.toggle = !this.toggle;
    },
  },
  persist: true,
});
