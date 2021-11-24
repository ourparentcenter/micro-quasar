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
import { ref, computed } from 'vue';
const toggle = ref(false);
const leftDrawerClass = computed(() => {
  return toggle.value === true
    ? {
        class: 'leftMarginRemove',
      }
    : {
        class: 'leftMargin',
      };
});
const onToggleBody = () => {
  toggle.value = !toggle.value;
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window['onToggleBody'] = () => onToggleBody();
</script>
<style lang="scss" scoped>
.changeHeight {
  min-height: 50px !important;
}
</style>
