<template>
  <q-layout view="lHh Lpr lFf" class="changeHeight">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
export default {
  name: 'MainLayout'
}
</script>

<script setup lang="ts">

</script>
<style lang="scss" scoped>
  .changeHeight {
    min-height: 50px !important;
  }
</style>
