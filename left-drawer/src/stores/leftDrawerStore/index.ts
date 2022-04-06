import { defineStore } from 'pinia';

export const useLeftDrawerStore = defineStore('leftDrawer', {
  state: () => ({
    toggle: true,
  }),
  getters: {
    leftDrawerOpen: (state) => state.toggle,
  },
  actions: {
    toggleLeftDrawer() {
      this.toggle = !this.toggle;
    },
  },
  persist: true,
});
