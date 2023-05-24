import { getDefaultLogo } from '@/utils/user';
import { ref, SetupContext, computed, Ref } from 'vue';
import { useRouter, Router } from 'vue-router';
import { useStore } from 'vuex';
import { State } from '@/store';
import { User } from '@/typings';

interface RouteItem {
  path: string;
  name: string;
  icon?: string;
  customIcon?: string;
}

export function useSidebar(context: SetupContext) {
  const store = useStore<State>();
  const user: Ref<User | null> = computed(() => store.getters.getUser);

  const isSidebarExpanded: Ref<boolean> = ref(false);
  const router: Router = useRouter();

  const routes = ref<RouteItem[]>([
    { path: '/account', name: 'Account' },
    { path: '/', name: 'Home', icon: 'home.png' },
    { path: '/document-list', name: 'Document List', icon: 'list.png' },
    { path: '/insights', name: 'Insights', icon: 'insights.png' },
    { path: '/verify', name: 'Verify', icon: 'verification.png' },
    { path: '/settings', name: 'Settings', icon: 'settings.png' }
  ]);

    // Find the 'account' route and update it with custom icon dynamically
    const updatedRoutes: Ref<RouteItem[]> = ref(routes.value.map(route => {
      if (route.path === '/account') {
        const customIcon: string = user.value ? getDefaultLogo(user.value.data.name) : '<div></div>';
        return {
          ...route,
          customIcon
        };
      }
      return route;
    }));

  function navigateTo(path: string) {
    isSidebarExpanded.value = false;
    router.push(path);
  }

  function renderSidebar() {
    return context.slots.default ? context.slots.default() : null;
  }

  function getIconPath(icon: string) {
    return require(`@/assets/${icon}`);
  }

  return {
    routes: updatedRoutes,
    isSidebarExpanded,
    navigateTo,
    renderSidebar,
    getIconPath
  };
}
