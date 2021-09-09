import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter.vue';

describe('Counter.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Counter, { propsData: { count: 1 } });
  });
  it('should display the initial count received from props', () => {
    const div = wrapper.find('div.count');
    expect(div.text()).toBe('1');
  });
  it('should send an emit when the decrement icon is clicked', async () => {
    const button = wrapper.find('i.decrement');
    await button.trigger('click');
    expect(wrapper.emitted().decrement).toBeTruthy();
  });
  it('should send an emit when the increment icon is clicked', async () => {
    const button = wrapper.find('i.increment');
    await button.trigger('click');
    expect(wrapper.emitted().increment).toBeTruthy();
  });
});
