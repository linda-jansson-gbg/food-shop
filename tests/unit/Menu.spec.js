import { shallowMount } from '@vue/test-utils';
import Menu from '@/components/Menu.vue';

describe('Menu.vue', () => {
  it('should render the logo', () => {
    const wrapper = shallowMount(Menu);
    const logo = wrapper.findAll('img');
    expect(logo.length).toEqual(1);
  });
  it('should render the button with a starting count of 0', async () => {
    const wrapper = shallowMount(Menu, { propsData: { cart: [] } });
    const button = wrapper.find('div.cart-count');
    expect(button.text()).toBe('0');
  });
  it('should render the correct amount of items in cart', async () => {
    const wrapper = shallowMount(Menu, {
      propsData: {
        cart: [
          {
            id: 4,
            name: 'Coffee',
            price: 89,
            img: '/img/coffee.jpg',
            amount: 12,
          },
          {
            id: 9,
            name: 'Lemon',
            price: 23,
            img: '/img/lemon.jpg',
            amount: 3,
          },
        ],
      },
    });
    const button = wrapper.find('div.cart-count');
    expect(button.text()).toBe('2');
  });
  it('should emit to show the cart view when clicked', async () => {
    const wrapper = shallowMount(Menu);
    const button = wrapper.find('div.cart');
    await button.trigger('click');
    expect(wrapper.emitted().changeView).toBeTruthy();
  });
  it('should emit to show all products view when clicked', async () => {
    const wrapper = shallowMount(Menu);
    const button = wrapper.find('img');
    await button.trigger('click');
    expect(wrapper.emitted().changeView).toBeTruthy();
  });
});
