import { config, getUrlWithParamsConfig } from './index';

describe('Config functions', () => {
  describe('getUrlWithParamsConfig', () => {
    test('Принимает один обязательный аргумент {endPoint: "getPokemons"} и на выходе получить готовый url для запроса', () => {
      const url = getUrlWithParamsConfig({ endPoint: 'getPokemons' });
      const { server } = config.client;
      expect(url).toBe(
        `${server.protocol}://${server.host}/${config.client.server.pathname}${config.client.endpoint.getPokemons.uri.pathname}`,
      );
    });

    test('Принимает один обязательный аргумент {endPoint: "getPokemons"} и необзательный query - параметр name и на выходе получаем готовый url для запроса', () => {
      const url = getUrlWithParamsConfig({ endPoint: 'getPokemons', query: { name: 'pikachu' } });
      const { server } = config.client;
      expect(url).toBe(
        `${server.protocol}://${server.host}/${config.client.server.pathname}${config.client.endpoint.getPokemons.uri.pathname}?name=pikachu`,
      );
    });
  });
});
