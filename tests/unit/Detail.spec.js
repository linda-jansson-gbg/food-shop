import { mount } from '@vue/test-utils';
import Detail from '@/components/Detail.vue';

describe('Detail.vue', () => {
  it('should receive an object as props from App.vue', () => {
    const wrapper = mount(Detail, {
      propsData: {
        product: {
          id: 1,
          name: 'Chili',
          price: 98,
          img: '/img/chili.jpg',
        },
        cart: [],
      },
    });
    const title = wrapper.find('h1.title');
    expect(title.text()).toBe('Chili');
  });
  it('should show 0 if the product is not already in cart', () => {
    const wrapper = mount(Detail, {
      propsData: {
        product: {
          id: 1,
          name: 'Chili',
          price: 98,
          img: '/img/chili.jpg',
        },
        cart: [],
      },
    });
    const count = wrapper.find('div.count').text();
    expect(count).toBe('0');
  });
  it('should show the correct amount if the product is already in cart', async () => {
    const wrapper = mount(Detail, {
      propsData: {
        product: {
          id: 1,
          name: 'Chili',
          price: 98,
          img: '/img/chili.jpg',
        },
        cart: [
          {
            id: 1,
            name: 'Chili',
            price: 98,
            img: '/img/chili.jpg',
            amount: 4,
          },
        ],
      },
    });
    const count = wrapper.find('div.count').text();
    expect(count).toBe('4');
  });
  it('should emit when increasing amount', async () => {
    const wrapper = mount(Detail, {
      propsData: {
        product: {
          id: 1,
          name: 'Chili',
          price: 98,
          img: '/img/chili.jpg',
        },
        cart: [
          {
            id: 1,
            name: 'Chili',
            price: 98,
            img: '/img/chili.jpg',
            amount: 4,
          },
        ],
      },
    });
    const button = wrapper.find('i.increment');
    await button.trigger('click');
    const count = wrapper.find('div.count').text();
    expect(count).toBe('5');
  });
});
