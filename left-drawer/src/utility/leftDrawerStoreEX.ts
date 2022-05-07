import { mapActions } from 'pinia';
import { useLeftDrawerStore } from 'src/stores/leftDrawerStore';
import { computed } from 'vue';
export const computedActions = computed(() => ({
  ...mapActions(useLeftDrawerStore, { toggle: 'toggleLeftDrawer' }),
}));
