import { shallowMount } from '@vue/test-utils';
import Cart from '@/components/Cart.vue';

describe('Cart.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Cart, {
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
  });
  it('should show all products in a list', async () => {
    const list = wrapper.findAll('li').length;
    expect(list).toEqual(2);
  });
});
