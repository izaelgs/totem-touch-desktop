import { setActivePinia, createPinia } from 'pinia';
import MockAdapter from 'axios-mock-adapter';
import { useAxiosStore } from '../services/axiosStore';

describe('useAxiosStore', () => {
  let mock: MockAdapter;
  let store: ReturnType<typeof useAxiosStore>;

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useAxiosStore();
    mock = new MockAdapter(store.axiosInstance);
  });

  afterEach(() => {
    mock.restore();
  });

  it('should fetch data successfully with GET', async () => {
    const mockData = { data: 'test' };
    mock.onGet('/test-url').reply(200, mockData);

    const response = await store.get('/test-url');
    expect(response).toEqual(mockData);
  });

  it('should handle GET error', async () => {
    mock.onGet('/test-url').reply(401);

    await expect(store.get('/test-url')).rejects.toThrow();
  });

  it('should post data successfully with POST', async () => {
    const mockData = { data: 'test' };
    mock.onPost('/test-url').reply(200, mockData);

    const response = await store.post('/test-url', { key: 'value' });
    expect(response).toEqual(mockData);
  });

  it('should handle POST error', async () => {
    mock.onPost('/test-url').reply(403);

    await expect(store.post('/test-url', { key: 'value' })).rejects.toThrow();
  });

  // Adicione outros testes para PUT, PATCH e DELETE conforme necessário
});
