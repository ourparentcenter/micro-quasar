<template>
  <q-layout view="lHh Lpr lFf" class="changeHeight">
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <hr>
      <a href="/" onclick="singleSpaNavigate(event)">Home</a>
      <hr>
      <a href="test" onclick="singleSpaNavigate(event)">Main App sub route</a>
      <hr>
      <a href="app" onclick="singleSpaNavigate(event)">App 1</a>
      <hr>
      <!-- <router-link to="/app">App 1</router-link> -->
    </q-drawer>
  </q-layout>
</template>

<script lang="ts">
export default {
  name: 'MainLayout'
}
</script>
<script setup lang="ts">
import EssentialLink from 'components/EssentialLink.vue'
import { ref } from 'vue'
const essentialLinks = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];
const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  window['onToggle']();
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window['leftDrawerToggle'] = () => toggleLeftDrawer();

</script>
<style lang="scss" scoped>
  .changeHeight {
    min-height: 50px !important;
  }
</style>
