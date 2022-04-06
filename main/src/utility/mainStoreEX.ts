import { mapActions } from 'pinia';
import { useMainStore } from 'src/stores/mainStore';
import { computed } from 'vue';
export const computedActions = computed(() => ({
  ...mapActions(useMainStore, { toggle: 'toggleMain' }),
}));
