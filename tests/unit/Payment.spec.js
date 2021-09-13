import { shallowMount } from '@vue/test-utils';
import Payment from '@/components/Payment.vue';

describe('Payment.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Payment, {
      propsData: {
        cart: [
          {
            id: 4,
            name: 'Coffee',
            price: 89,
            img: '/img/coffee.jpg',
            amount: 2,
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
  it('should render a form to fill in payment details', () => {
    const inputs = wrapper.findAll('input').length;
    expect(inputs).toEqual(4);
  });
  it('should show the total price of all items together', () => {
    const total = wrapper.find('span.total').text();
    expect(total).toContain('247'); // 89 * 2 + 23 * 3
  });
  it('should show errors if input fields are empty', async () => {
    const button = wrapper.find('button.pay');
    await button.trigger('click');
    expect(wrapper.findAll('span.error').length).toEqual(4);
  });
});
