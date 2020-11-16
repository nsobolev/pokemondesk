import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import PokemonCard, { TPokemonCard } from './index';
import { pokemons } from '../utils/data';

export default {
  title: 'Pokemons/Cards/Card',
  component: PokemonCard,
} as Meta;

const pokemon = pokemons[0];

const Template: Story<TPokemonCard> = (args) => <PokemonCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: pokemon.name,
  stats: pokemon.stats,
  types: pokemon.types,
  img: pokemon.img,
};
