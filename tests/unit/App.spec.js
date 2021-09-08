import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

import data from '../../api/products.json';

describe('App.vue', () => {
  beforeEach(() => {
    fetch.mockResponseOnce(JSON.stringify({ success: true, data }));
  });
  it('should call a function when mounted', () => {
    const method = jest.spyOn(App.methods, 'getData');
    const wrapper = shallowMount(App);
    expect(method).toBeCalled();
  });
  it('should fetch data from the API', () => {
    const calls = fetch.mock.calls.length;
    expect(calls).toEqual(1);
  });
});
