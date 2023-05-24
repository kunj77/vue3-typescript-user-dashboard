import { defineComponent, computed, Ref } from 'vue';
import { useStore } from 'vuex';
import { State } from '@/store';
import { CareerGoalList } from '@/typings';

import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
  
  export default defineComponent({
    components: {
      CircleProgress
    },
    setup() {
      const store = useStore<State>();
      const careerGoal: Ref<CareerGoalList | null> = computed(() => store.getters.getCareerGoal);
  
      return {
        goal: careerGoal?.value?.data?.[0]
      };
    }
  });