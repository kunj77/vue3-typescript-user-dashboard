import { defineComponent, computed, toRefs, Ref } from 'vue';
import { useStore } from 'vuex';
import { State } from '@/store';
import { Document } from '@/typings';

export default defineComponent({
  name: 'DocumentsList',
  props: {
    showPagination: {
      type: Boolean,
      default: true
    },
    rowsPerPage: {
      type: Number,
      default: 10
    }
  },
  setup(props) {
    const { rowsPerPage } = toRefs(props);

    const store = useStore<State>();

    const filteredDocuments: Ref<Document[] | null> = computed(() => {
      const documentsToShow = store.getters.getDocuments?.data.slice(0, rowsPerPage.value);
      return documentsToShow;
    });

    const formatDate = (date: Date): string => {
      const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });

      return formattedDate;
    };
  
    return {
      filteredDocuments,
      formatDate
    };
  }
});
