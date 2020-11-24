import Url from 'url';

export type TRequestParams = {
  endPoint: keyof typeof config.client.endpoint;
  query?: { [n: string]: string | number };
  pathname?: string;
};

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
      getPokemon: {
        method: 'GET',
        uri: {
          pathname: process.env.POKEMON_API_PATHNAME,
        },
      },
    },
  },
};

export const getUrlWithParamsConfig = ({ endPoint, pathname, query }: TRequestParams) => {
  const url = Url.format({
    ...config.client.server,
    ...config.client.endpoint[endPoint].uri,
    pathname: `${config.client.server.pathname}${config.client.endpoint[endPoint].uri.pathname}${pathname || ''}`,
    query,
  });

  return url;
};

export const request = async ({ endPoint, pathname, query }: TRequestParams) => {
  const url = getUrlWithParamsConfig({ endPoint, pathname, query });

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return error;
  }
};

export default request;
