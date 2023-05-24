import { createStore, Store } from 'vuex';
import { User, DocumentsList, CareerGoalList } from '@/typings';

export interface State {
  user: User | null;
  documents: DocumentsList | null;
  careerGoal: CareerGoalList | null;
}

const store = createStore<State>({
  state: {
    user: null,
    documents: null,
    careerGoal: null
  },
  mutations: {
    updateUser(state: State, user: User) {
      state.user = user;
    },
    updateDocuments(state: State, documents: DocumentsList) {
      state.documents = documents;
    },
    updateCareerGoal(state: State, careerGoal: CareerGoalList) {
      state.careerGoal = careerGoal;
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit('updateUser', user);
    },
    setDocuments({ commit }, documents) {
      commit('updateDocuments', documents);
    },
    setCareerGoal({ commit }, careerGoal) {
      commit('updateCareerGoal', careerGoal);
    }
  },
  getters: {
    getUser(state: State) {
      return state.user;
    },
    getDocuments(state: State) {
      return state.documents;
    },
    getCareerGoal(state: State) {
      return state.careerGoal;
    }
  }
});

export default store as Store<State>;
