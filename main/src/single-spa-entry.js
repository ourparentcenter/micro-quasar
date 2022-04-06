/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import './set-public-path';
import { h, createApp } from 'vue';
import qcreateApp from '../.quasar/app.js';
import singleSpaVue from 'single-spa-vue';
import { Quasar } from 'quasar';
import quasarUserOptions from '../.quasar/quasar-user-options';
import App from './App.vue';
import { computedActions } from 'src/utility/mainStoreEX';
import { createPinia } from 'pinia';

let routerInstance;
void qcreateApp(createApp, quasarUserOptions).then(({ router }) => {
  routerInstance = router;
});

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecycle-props
        // name: this.name,
        // mountParcel: this.mountParcel,
        // singleSpa: this.singleSpa,
      });
    },
  },
  handleInstance(app) {
    app.use(Quasar, quasarUserOptions);
    app.use(routerInstance);
    app.use(createPinia());
  },
  replaceMode: true,
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
export function mainToggle() {
  return computedActions.value.toggle();
}
