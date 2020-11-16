import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import PokemonList, { TPokemonList } from './index';
import { pokemons } from '../utils/data';

export default {
  title: 'Pokemons/Cards/CardList',
  component: PokemonList,
} as Meta;

const Template: Story<TPokemonList> = (args) => <PokemonList {...args} />;

export const Default = Template.bind({});
Default.args = {
  pokemons,
};
