import { defineComponent, SetupContext, computed, Ref } from 'vue';
import { useSidebar } from '@/compositions/useSidebar';
import { useStore } from 'vuex';
import { getDefaultLogo } from '@/utils/user';

import { State } from '@/store';
import { User } from '@/typings';

export default defineComponent({
  setup(_, context: SetupContext) {
    const { routes, isSidebarExpanded, navigateTo, renderSidebar, getIconPath } = useSidebar(context);
    const store = useStore<State>();
    const user: Ref<User | null> = computed(() => store.getters.getUser);
    const defaultLogo: Ref<string> = computed(() => getDefaultLogo(store.getters.getUser.data.name));

    return {
      routes,
      isSidebarExpanded,
      navigateTo,
      renderSidebar,
      getIconPath,
      user: user.value,
      defaultLogo: defaultLogo.value
    };
  }
});
