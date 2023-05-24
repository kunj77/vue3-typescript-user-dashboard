import { defineComponent, computed, watch, ref, Ref } from 'vue';
import { useStore } from 'vuex';
import CareerGoal from '../CareerGoal/CareerGoal.vue';
import DocumentsList from '../DocumentsList/DocumentsList.vue';
import { User, CurrentOrganisation } from '@/typings';
import { State } from '@/store';

export default defineComponent({
  components: {
    CareerGoal,
    DocumentsList
  },
  setup() {
    const store = useStore<State>();
    const user: Ref<User | null> = computed(() => store.getters.getUser);
    const userType: Ref<string> = ref('');
    const subtitle: Ref<string> = ref('');

    watch(user, (newValue: User | null) => {
      const current_organisation: CurrentOrganisation | undefined = newValue?.data?.current_organisation;
      const isPersonal: boolean | undefined = current_organisation?.is_personal;
      userType.value = isPersonal === true ? 'personal' : (isPersonal === false ? 'managed' : '');

      if (isPersonal) {
        subtitle.value = 'Manage your documents.';
      } else {
        subtitle.value = `Manage your documents issued by ${current_organisation?.name} or track your career goal.`;
      }    
    }, { immediate: true });  

    return {
      userType: userType.value,
      user: user.value,
      subtitle: subtitle.value
    };
  }
});
