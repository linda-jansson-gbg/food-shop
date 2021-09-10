import { shallowMount } from '@vue/test-utils';
import Product from '@/components/Product.vue';

describe('Product.vue', () => {
  const wrapper = shallowMount(Product, {
    propsData: {
      product: {
        id: 1,
        name: 'Chili',
        price: 98,
        img: '/img/chili.jpg',
      },
    },
  });
  it('should receive an object as props from Products.vue', () => {
    const title = wrapper.find('p');
    expect(title.text()).toBe('Chili');
  });
  it('should emit an event with id on product to Products.vue', async () => {
    const button = wrapper.find('.addToCartButton');
    await button.trigger('click');
    expect(wrapper.emitted().updateCart).toBeTruthy();
  });
  it('should emit an event to change view to Products.vue', async () => {
    const button = wrapper.find('.detailButton');
    await button.trigger('click');
    expect(wrapper.emitted().goToDetailView).toBeTruthy();
  });
});
