import { defineStore } from 'pinia';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { leftDrawerToggle } from '@mfq/left-drawer'; // expected error since module is coming from a different app as browser module
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { mainToggle } from '@mfq/main'; // expected error since module is coming from a different app as browser module

export const useHeaderStore = defineStore('header', {
  state: () => ({
    toggle: false,
  }),
  getters: {},
  actions: {
    onToggle() {
      this.toggle = !this.toggle;
      leftDrawerToggle();
      mainToggle();
    },
    leftDrawerClass() {
      return this.toggle === true
        ? {
            class: 'leftMarginRemove',
          }
        : {
            class: 'leftMargin',
          };
    },
  },
  persist: true,
});
