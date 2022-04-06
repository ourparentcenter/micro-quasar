<template>
  <q-layout view="lHh Lpr lFf" class="changeHeight">
    <q-page-container v-bind="leftDrawerClass">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
export default {
  name: 'MainLayout',
};
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { useMainStore } from 'src/stores/mainStore';
import { computedActions } from 'src/utility/mainStoreEX';
const store = useMainStore();
const store2 = computedActions.value;
const leftDrawerClass = computed(() => {
  return store.mainOpen === true
    ? {
        class: 'bodyLeftMarginRemove',
      }
    : {
        class: 'bodyLeftMargin',
      };
});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window['onToggleBody'] = () => store2.toggle();
</script>

<style lang="scss" scoped>
.changeHeight {
  min-height: 50px !important;
}
.bodyLeftMargin {
  margin-left: 14.7%;
}
.bodyLeftMarginRemove {
  margin-left: 0;
}
</style>
