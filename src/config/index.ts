export const config = {
  client: {
    server: {
      protocol: process.env.API_PROTOCOL,
      host: process.env.API_HOST,
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: `${process.env.API_URI}${process.env.POKEMONS_API_PATHNAME}`,
        },
      },
    },
  },
};

export default config;
