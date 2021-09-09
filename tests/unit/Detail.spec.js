import { shallowMount } from '@vue/test-utils';
import Detail from '@/components/Detail.vue';

describe('Detail.vue', () => {
  const wrapper = shallowMount(Detail, {
    propsData: {
      product: {
        id: 1,
        name: 'Chili',
        price: 98,
        img: '/img/chili.jpg',
      },
    },
  });
  it('should receive an object as props from App.vue', () => {
    const title = wrapper.find('p');
    expect(title.text()).toBe('Chili');
  });
});
