import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import PokemonStatList, { TPokemonStatListProps } from './index';
import { pokemons } from '../utils/data';

export default {
  title: 'Pokemons/Cards/StatRoundList',
  component: PokemonStatList,
} as Meta;

const pokemon = pokemons[0];

const Template: Story<TPokemonStatListProps> = (args) => <PokemonStatList {...args} />;

export const Default = Template.bind({});
Default.args = {
  stats: pokemon.stats,
};
