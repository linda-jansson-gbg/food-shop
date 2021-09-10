import { mount } from '@vue/test-utils';
import Products from '@/components/Products.vue';

describe('Products.vue', () => {
  const wrapper = mount(Products, {
    propsData: {
      products: [
        {
          id: 1,
          name: 'Chili',
          price: 98,
          img: '/img/chili.jpg',
        },
        {
          id: 2,
          name: 'Chocolate cake',
          price: 15,
          img: '/img/chocolate_cake.jpg',
        },
        {
          id: 3,
          name: 'Cinnamon',
          price: 8,
          img: '/img/cinnamon.jpg',
        },
        {
          id: 4,
          name: 'Coffee',
          price: 89,
          img: '/img/coffee.jpg',
        },
        {
          id: 5,
          name: 'Coffee beans',
          price: 21,
          img: '/img/coffee_beans.jpg',
        },
        {
          id: 6,
          name: 'Egg',
          price: 2,
          img: '/img/egg.jpg',
        },
        {
          id: 7,
          name: 'Garlic',
          price: 43,
          img: '/img/garlic.jpg',
        },
        {
          id: 8,
          name: 'Kiwi',
          price: 50,
          img: '/img/kiwi.jpg',
        },
        {
          id: 9,
          name: 'Lemon',
          price: 23,
          img: '/img/lemon.jpg',
        },
        {
          id: 10,
          name: 'Mango',
          price: 93,
          img: '/img/mango.jpg',
        },
        {
          id: 11,
          name: 'Onion',
          price: 15,
          img: '/img/onion.jpg',
        },
        {
          id: 12,
          name: 'Pancake',
          price: 56,
          img: '/img/pancake.jpg',
        },
        {
          id: 13,
          name: 'Pine',
          price: 35,
          img: '/img/pine.jpg',
        },
        {
          id: 14,
          name: 'Pineapple',
          price: 60,
          img: '/img/pineapple.jpg',
        },
        {
          id: 15,
          name: 'Popcorn',
          price: 66,
          img: '/img/popcorn.jpg',
        },
        {
          id: 16,
          name: 'Quail egg',
          price: 75,
          img: '/img/quail_egg.jpg',
        },
        {
          id: 17,
          name: 'Radish',
          price: 78,
          img: '/img/radish.jpg',
        },
        {
          id: 18,
          name: 'Strawberry cake',
          price: 46,
          img: '/img/strawberry_cake.jpg',
        },
        {
          id: 19,
          name: 'Tea',
          price: 50,
          img: '/img/tea.jpg',
        },
        {
          id: 20,
          name: 'Tomato',
          price: 17,
          img: '/img/tomato.jpg',
        },
        {
          id: 21,
          name: 'Walnut',
          price: 76,
          img: '/img/walnut.jpg',
        },
        {
          id: 22,
          name: 'Watermelon',
          price: 72,
          img: '/img/watermelon.jpg',
        },
        {
          id: 23,
          name: 'Wheat',
          price: 99,
          img: '/img/wheat.jpg',
        },
      ],
    },
  });
  it('should receive an array with products as props from App.vue', () => {
    const article = wrapper.findAll('article');
    expect(article.length).toBe(23);
  });
  it('should emit an event to sort by price when clicking on the sorting button', async () => {
    const button = wrapper.find('span.sort');
    await button.trigger('click');
    expect(wrapper.emitted().sort).toBeTruthy();
  });
});
