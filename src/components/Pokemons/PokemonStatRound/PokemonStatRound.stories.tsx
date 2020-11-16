import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import PokemonStatRound, { TPokemonStatRound } from './index';

export default {
  title: 'Pokemons/Cards/StatRound',
  component: PokemonStatRound,
} as Meta;

const Template: Story<TPokemonStatRound> = (args) => <PokemonStatRound {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Testing',
  count: 10,
};
