import Url from 'url';

export type TEndPoint = keyof typeof config.client.endpoint;
export type TQueryPoint = { [n: string]: string | number };

export const config = {
  client: {
    server: {
      protocol: process.env.API_PROTOCOL,
      host: process.env.API_HOST,
      pathname: process.env.API_PATHNAME,
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: process.env.POKEMONS_API_PATHNAME,
        },
      },
    },
  },
};

export const getUrlWithParamsConfig = (endpointName: TEndPoint, query?: TQueryPoint) => {
  const url = Url.format({
    ...config.client.server,
    ...config.client.endpoint[endpointName].uri,
    pathname: `${config.client.server.pathname}${config.client.endpoint[endpointName].uri.pathname}`,
    query,
  });

  return url;
};

export const request = async (endPoint: TEndPoint, query?: TQueryPoint) => {
  const url = getUrlWithParamsConfig(endPoint, query);

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return error;
  }
};

export default request;
