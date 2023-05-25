import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import CareerGoal from "./src/components/CareerGoal/CareerGoal.vue";
import { describe, it, expect } from "vitest";

describe('MyComponent', () => {
  it('renders the Career Goal view correctly', () => {
    const mockCareerGoal = {
      data: [
        {
          name: 'Software Engineer',
          progress: 50
        }
      ]
    };
    
    const store = createStore({
      getters: {
        getCareerGoal: () => mockCareerGoal
      }
    });
    
    const wrapper = mount(CareerGoal, {
      global: {
        plugins: [store]
      }
    });
    
    const goalTitle = wrapper.find('.career-goal-title');
    expect(goalTitle.text()).toBe('Career Goal');
    
    const infoText = wrapper.find('.career-goal-container p');
    expect(infoText.text()).toBe('Your Progress');
    
    const goalDescription = wrapper.find('.goal-description');
    expect(goalDescription.text()).toBe('I want to become a');
  });

  it('renders the correct goal name', () => {
    const mockCareerGoal = {
      data: [
        {
          name: 'Software Engineer',
          progress: 50
        }
      ]
    };

    const store = createStore({
      getters: {
        getCareerGoal: () => mockCareerGoal
      }
    });

    const wrapper = mount(CareerGoal, {
      global: {
        plugins: [store]
      }
    });

    const goalPosition = wrapper.find('.goal-position');
    expect(goalPosition.text()).toBe(mockCareerGoal.data[0].name);
  });

  it('displays the correct progress value', () => {
    const mockCareerGoal = {
      data: [
        {
          name: 'Software Engineer',
          progress: 50
        }
      ]
    };

    const store = createStore({
      getters: {
        getCareerGoal: () => mockCareerGoal
      }
    });

    const wrapper = mount(CareerGoal, {
      global: {
        plugins: [store]
      }
    });

    const circleProgress = wrapper.findComponent({ name: 'CircleProgress' });
    expect(circleProgress.props('percent')).toBe(mockCareerGoal.data[0].progress);
  });
});
