<template>
  <q-layout view="lHh Lpr lFf" class="changeHeight">
    <q-drawer
      v-model="store.leftDrawerOpen"
      show-if-above
      side="left"
      behavior="desktop"
      bordered
    >
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <hr />
      <q-list>
        <q-item-label header> App Links </q-item-label>

        <EssentialLink
          v-for="link in appLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <hr />
      <q-btn @click="store.toggleLeftDrawer">toggle</q-btn>
      <q-btn @click="store2.toggle()"> mapped action toggle</q-btn>
    </q-drawer>
  </q-layout>
</template>

<script lang="ts">
export default {
  name: 'MainLayout',
};
</script>

<script setup lang="ts">
import EssentialLink from 'components/EssentialLink.vue';
import { useLeftDrawerStore } from 'stores/leftDrawerStore';
import { computedActions } from 'src/utility/leftDrawerStoreEX';
const store = useLeftDrawerStore();
const store2 = computedActions.value;
const essentialLinks = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];
const appLinks = [
  {
    title: 'Home',
    caption: 'SPA root app home "/"',
    icon: 'home',
    link: '/',
    internal: true,
  },
  {
    title: 'Main App sub route',
    caption: 'Main App sub route "/test"',
    icon: 'subdirectory_arrow_right',
    link: 'test',
    internal: true,
  },
  {
    title: 'App 1',
    caption: 'Different single-spa app route "/app"',
    icon: 'pages',
    link: 'app',
    internal: true,
  },
  {
    title: 'Non exsisting route',
    caption: 'Non exsisting route error page "/test2"',
    icon: 'record_voice_over',
    link: 'test2',
    internal: true,
  },
];
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window['leftDrawerToggle'] = () => store2.toggle();
</script>

<style lang="scss" scoped>
.changeHeight {
  min-height: 50px !important;
}
</style>
