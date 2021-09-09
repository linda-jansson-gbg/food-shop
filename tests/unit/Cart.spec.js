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
  it('should display the price of the product', () => {
    const price = wrapper.find('span.price');
    expect(price.text()).toBe('89 kr');
  });
  it('should display the total cost of the products', () => {
    const total = wrapper.find('span.total');
    expect(total.text()).toBe('1068 kr'); // 89*12
  });
});
