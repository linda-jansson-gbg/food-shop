import { shallowMount } from '@vue/test-utils';
import Menu from '@/components/Menu.vue';

describe('Menu.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Menu);
  });
  it('should render the logo', () => {
    const logo = wrapper.findAll('img');
    expect(logo.length).toEqual(1);
  });
  it('should render the button with a starting count of 0', () => {
    const button = wrapper.find('div.cart-count');
    expect(button.text()).toBe('0');
  });
});
