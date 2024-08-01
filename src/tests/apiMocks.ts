import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, { delayResponse: 1000 });

export const setupApiMocks = () => {
  mock.onGet('/products/appetizers').reply(200,
    [
      { id: 1, name: 'CLÁSSICO', imageUrl: 'https://via.placeholder.com/150', price: 30 },
      { id: 2, name: 'BACON COMPLETO', imageUrl: 'https://via.placeholder.com/150', price: 28 },
      { id: 3, name: 'CLÁSSICO', imageUrl: 'https://via.placeholder.com/150', price: 30 },
    ]
  );

  mock.onPost('/another-endpoint').reply(201, {
    data: { /* mock data */ }
  });
};
