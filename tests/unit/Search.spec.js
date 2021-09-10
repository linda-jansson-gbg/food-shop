import { shallowMount } from '@vue/test-utils';
import Search from '@/components/Search.vue';

describe('Search.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Search);
  });
  it('should emit on each keypress', async () => {
    const input = wrapper.find('input');
    await input.setValue('e');
    expect(wrapper.emitted().search).toBeTruthy();
  });
});
