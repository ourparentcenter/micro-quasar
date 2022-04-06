<template>
  <q-layout view="lHh Lpr lFf" class="changeHeight">
    <q-header elevated v-bind="store.leftDrawerClass()">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="store.onToggle"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
  </q-layout>
</template>

<script lang="ts">
export default {
  name: 'MainLayout',
};
</script>

<script setup lang="ts">
import { useHeaderStore } from 'stores/headerStore';
const store = useHeaderStore();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window['headerToggle'] = () => store.onToggle();
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
