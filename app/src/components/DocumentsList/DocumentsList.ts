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

    // If there is no recieved_on specified, we assume it is an old document or the document is approved 
    const defaultRecievedOn: Date = new Date('Jan 01 1970'); 

    const filteredDocuments: Ref<Document[] | null> = computed(() => {
      const documentList = store.getters.getDocuments?.data;

      const recentDocuments = documentList.sort((prevDoc: Document, nextDoc: Document) => {
        const dateA = new Date(prevDoc.received_on || defaultRecievedOn);
        const dateB = new Date(nextDoc.received_on || defaultRecievedOn);
        return dateB.getTime() - dateA.getTime();
      });
      const documentsToShow = recentDocuments?.slice(0, rowsPerPage.value);
      return documentsToShow;
    });

    const formatDate = (date: Date): string => {
      const formattedDate = date === defaultRecievedOn ? '' : 
        new Date(date).toLocaleDateString('en-US', {
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
