import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import PokemonTypes, { TPokemonTypesProps } from './index';
import { pokemons } from '../utils/data';

export default {
  title: 'Pokemons/Cards/Types',
} as Meta;

const pokemon = pokemons[0];

const Template: Story<TPokemonTypesProps> = (args) => <PokemonTypes {...args} />;

export const Default = Template.bind({});
Default.args = {
  types: pokemon.types,
};
