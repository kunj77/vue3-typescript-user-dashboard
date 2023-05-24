import { defineComponent, ref, toRef, Ref } from 'vue';
import { useStore } from 'vuex';
import MainDashboard from '../MainDashboard/MainDashboard.vue';
import UserDataService from '@/services/user';
import CircleProgress from 'vue3-circle-progress';
import { State } from '@/store';
import { User, DocumentsList, CareerGoalList } from '@/typings';

export default defineComponent({  components: {
    MainDashboard,
    CircleProgress
  },
  setup() {
    const userType: Ref<string> = ref('');
    const dataLoaded: Ref<boolean> = ref(false);
    const store = useStore<State>();
    const spinnerProgress: Ref<number> = ref(0);
    const reactiveSpinnerProgress: Ref<number> = toRef(spinnerProgress, 'value'); // Create a reactive reference

    const selectUserType = async (type: string) => {
      userType.value = type;
      await fetchData();
    };

    const fetchData = async () => {
      try {
        updateProgress();
        await getUserData();
        await getDocuments();
        await getCareerGoal();
        dataLoaded.value = true;
        spinnerProgress.value = 0;
      } catch (error) {
        console.error(error);
      }
    };

    const getUserData = async () => {
      try {
        if (userType.value === 'personal') {
          const response = await UserDataService.getDataForPersonalUser();
          const userData: User = response.data; 
          store.dispatch('setUser', userData);
        } else if (userType.value === 'managed') {
          const response = await UserDataService.getDataForManagedUser();
          const userData: User = response.data; 
          store.dispatch('setUser', userData);
        }
      } catch (error) {
        console.error(error);
        // Handle the error here (e.g., show an error message)
      }
    };

    const getDocuments = async () => {
      try {
        const response = await UserDataService.getDocuments();
        const documents: DocumentsList = response.data; 
        store.dispatch('setDocuments', documents);
      } catch (error) {
        console.error(error);
        // Handle the error here (e.g., show an error message)
      }
    };

    const getCareerGoal = async () => {
      try {
        const response = await UserDataService.getCareerGoal();
        const careerGoal: CareerGoalList = response.data; 
        store.dispatch('setCareerGoal', careerGoal);
      } catch (error) {
        console.error(error);
        // Handle the error here (e.g., show an error message)
      }
    };

    const updateProgress = () => {
      setInterval(() => {
        !dataLoaded.value && (spinnerProgress.value = (spinnerProgress.value + 1) % 100);
      }, 50);
    };

    return {
      dataLoaded,
      selectUserType,
      spinnerProgress: reactiveSpinnerProgress
    };
  }
});
