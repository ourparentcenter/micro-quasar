<template>
  <q-layout view="lHh Lpr lFf" class="changeHeight">
    <q-header elevated ref="firstMorphRef" v-bind="leftDrawerClass">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
  </q-layout>
</template>

<script lang="ts">
export default {
  name: 'MainLayout',
}
</script>

<script setup lang="ts">
// import { morph } from 'quasar'
import { ref, computed } from 'vue';
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
const toggle = ref(false);
const firstMorphRef = ref();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// let cancel: any;
const leftDrawerClass = computed(() => {
  return toggle.value === true
    ? {
        class: 'leftMarginRemove',
      }
    : {
        class: 'leftMargin',
      }
});

const onToggle = () => {
  toggle.value = !toggle.value
}

const toggleLeftDrawer = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window['leftDrawerToggle']();
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window['onToggle'] = () => onToggle();
</script>
<style lang="scss" scoped>
  .changeHeight {
    min-height: 0px !important;
  }
  .leftMargin {
    margin-left: 300px;
  }
  .leftMarginRemove {
    margin-left: 0;
  }
</style>
