import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import { describe, it, expect } from "vitest";
import UserHome from "./src/components/UserHome/UserHome.vue";

describe('UserHome.vue', () => {
  it('renders the component correctly for managed user', () => {
    const mockUserData = {
        data: {
            name: 'John Doe',
            current_organisation: {
              is_personal: false,
              name: 'My Organization'
            }
          }
      };
      
      const store = createStore({
        getters: {
          getUser: () => mockUserData
        }
      });
      
      const wrapper = shallowMount(UserHome, {
        global: {
          plugins: [store]
        }
      });

    expect(wrapper.find('.title').text()).toBe('Hi, John Doe 👋');
    expect(wrapper.find('.subtitle').text()).toBe('Manage your documents issued by My Organization or track your career goal.');
    expect(wrapper.findComponent({ name: 'CareerGoal' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'DocumentsList' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'DocumentsList' }).props('showPagination')).toBe(false);
    expect(wrapper.findComponent({ name: 'DocumentsList' }).props('rowsPerPage')).toBe(5);
  });

  it('renders the component correctly for personal user', () => {
    const mockUserData = {
        data: {
            name: 'John Doe',
            current_organisation: {
              is_personal: true,
              name: 'My Organization'
            }
          }
      };
      
      const store = createStore({
        getters: {
          getUser: () => mockUserData
        }
      });
      
      const wrapper = shallowMount(UserHome, {
        global: {
          plugins: [store]
        }
      });

    expect(wrapper.find('.title').text()).toBe('Hi, John Doe 👋');
    expect(wrapper.find('.subtitle').text()).toBe('Manage your documents.');
    expect(wrapper.findComponent({ name: 'CareerGoal' }).exists()).toBe(false);
    expect(wrapper.findComponent({ name: 'DocumentsList' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'DocumentsList' }).props('showPagination')).toBe(false);
    expect(wrapper.findComponent({ name: 'DocumentsList' }).props('rowsPerPage')).toBe(5);
  });
});
