import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import DocumentsList from './src/components/DocumentsList/DocumentsList.vue';
import { describe, it, expect } from "vitest";

describe('DocumentsList', () => {
  it('correctly evaluates the props correctly', () => {
    const mockDocumentsList = {
        data: [
            {
                id: 1,
                document_name: 'Document 1',
                received_on: '2022-07-12T17:58:25.000000Z'
            }
        ]
      };
      
      const store = createStore({
        getters: {
          getDocuments: () => mockDocumentsList
        }
      });

    const wrapper = mount(DocumentsList, {
      props: {
        showPagination: true,
        rowsPerPage: 5
      },
      global: {
        plugins: [store]
      }
    });
    
    expect(wrapper.props('showPagination')).toBe(true);
    expect(wrapper.props('rowsPerPage')).toBe(5);
  });

  it('renders the document list header correctly', () => {
    const mockDocumentsList = {
        data: [
            {
                id: 1,
                document_name: 'Document 1',
                received_on: '2022-07-12T17:58:25.000000Z'
            }
        ]
      };
      
      const store = createStore({
        getters: {
          getDocuments: () => mockDocumentsList
        }
      });

    const wrapper = mount(DocumentsList, {
      props: {
        showPagination: true,
        rowsPerPage: 5
      },
      global: {
        plugins: [store]
      }
    });

    const header = wrapper.find('.documents-list-header');
    expect(header.exists()).toBe(true);

    const title = header.find('h4');
    expect(title.text()).toBe('Recent Documents');

    const viewAllButton = header.find('button.clear');
    expect(viewAllButton.text()).toBe('View All Documents');
  });

  it('renders the document list table correctly with store data', () => {
    const mockDocumentsList = {
        data: [
      {
        id: 1,
        document_name: 'Document 1',
        received_on: '2022-02-12T17:28:25.000000Z'
      },
      {
        id: 2,
        document_name: 'Document 2',
        received_on: '2022-08-12T17:58:25.000000Z'
      }
    ]};
      
    const store = createStore({
      getters: {
        getDocuments: () => mockDocumentsList
      }
    });

    const wrapper = mount(DocumentsList, {
      props: {
        showPagination: true,
        rowsPerPage: 5
      },
      global: {
        plugins: [store]
      }
    });

    const table = wrapper.find('table');
    expect(table.exists()).toBe(true);

    const rows = table.findAll('tbody tr');

    // No of rows would be double due to equivalent number of rows rendering <hr/>
    expect(rows.length).toBe(mockDocumentsList.data.length*2); 

    const firstRow = rows[0];
    const firstDocument = mockDocumentsList.data[0];
    expect(firstRow.find('.icon-text span').text()).toBe(firstDocument.document_name);
    expect(firstRow.find('td:nth-child(2)').text()).toBe('Aug 13, 2022');

    const secondRow = rows[2];
    const secondDocument = mockDocumentsList.data[1];
    expect(secondRow.find('.icon-text span').text()).toBe(secondDocument.document_name);
    expect(secondRow.find('td:nth-child(2)').text()).toBe('Feb 13, 2022');
  });

  it('renders the document list based on rowsPerPage', () => {
    const mockDocumentsList = {
        data: [
      {
        id: 1,
        document_name: 'Document 1',
        received_on: '2022-10-12T17:58:25.000000Z'
      },
      {
        id: 2,
        document_name: 'Document 2',
        received_on: '2022-09-12T17:58:25.000000Z'
      },
      {
        id: 3,
        document_name: 'Document 3',
        received_on: '2022-08-12T17:58:25.000000Z'
      },
      {
        id: 4,
        document_name: 'Document 4',
        received_on: '2022-07-12T17:58:25.000000Z'
      },
      {
        id: 5,
        document_name: 'Document 5',
        received_on: '2022-06-12T17:58:25.000000Z'
      },
      {
        id: 6,
        document_name: 'Document 6',
        received_on: '2022-05-12T17:58:25.000000Z'
      }
    ]};

    const store = createStore({
        getters: {
          getDocuments: () => mockDocumentsList
        }
      });

    const rowsPerPage = 5;
    const wrapper = mount(DocumentsList, {
      props: {
        showPagination: true,
        rowsPerPage: rowsPerPage
      },
      global: {
        plugins: [store]
      }
    });

    const table = wrapper.find('table');
    expect(table.exists()).toBe(true);

    const rows = table.findAll('tbody tr');

    // No of rows would be double of rowsPerPage due to equivalent number of rows rendering <hr/>
    expect(rows.length).toBe(rowsPerPage*2); 

    const firstRow = rows[0];
    const firstDocument = mockDocumentsList.data[0];
    console.log("first row", firstRow);
    expect(firstRow.find('.icon-text span').text()).toBe(firstDocument.document_name);
    expect(firstRow.find('td:nth-child(2)').text()).toBe('Oct 13, 2022');

    const secondRow = rows[2];
    const secondDocument = mockDocumentsList.data[1];
    expect(secondRow.find('.icon-text span').text()).toBe(secondDocument.document_name);
    expect(secondRow.find('td:nth-child(2)').text()).toBe('Sep 13, 2022');

    const thirdRow = rows[4];
    const thirdDocument = mockDocumentsList.data[2];
    expect(thirdRow.find('.icon-text span').text()).toBe(thirdDocument.document_name);
    expect(thirdRow.find('td:nth-child(2)').text()).toBe('Aug 13, 2022');

    const fourthRow = rows[6];
    const fourthDocument = mockDocumentsList.data[3];
    expect(fourthRow.find('.icon-text span').text()).toBe(fourthDocument.document_name);
    expect(fourthRow.find('td:nth-child(2)').text()).toBe('Jul 13, 2022');

    const fifthRow = rows[8];
    const fifthDocument = mockDocumentsList.data[4];
    expect(fifthRow.find('.icon-text span').text()).toBe(fifthDocument.document_name);
    expect(fifthRow.find('td:nth-child(2)').text()).toBe('Jun 13, 2022');
  });
});
