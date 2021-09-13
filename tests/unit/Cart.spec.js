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
  it('should emit to remove an item when button is clicked', async () => {
    const button = wrapper.find('button.remove');
    await button.trigger('click');
    expect(wrapper.emitted().removeItem).toBeTruthy();
  });
  it('should emit to return to products when button is clicked', async () => {
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(wrapper.emitted().changeView).toBeTruthy();
  });
  it('should clearly show that the cart is empty', async () => {
    await wrapper.setProps({ cart: [] });
    const text = wrapper.find('li').text();
    expect(text).toContain('Cart is empty');
  });
  it('should show a button to proceed to payment', () => {
    const button = wrapper.find('button.payment');
    expect(button.exists()).toBeTruthy();
  });
  it('should only show the payment button if cart is not empty', async () => {
    await wrapper.setProps({ cart: [] });
    const button = wrapper.find('button.payment');
    expect(button.exists()).toBeFalsy();
  });
});
