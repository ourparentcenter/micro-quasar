<template>
  <q-page class="row items-center justify-evenly">
    <testComponent />
  </q-page>
</template>
<script lang="ts">
export default {
  name: 'TestPage'
}
</script>
<script setup lang="ts">
import testComponent from 'components/testComponent.vue'
</script>
