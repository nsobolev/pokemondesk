import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Pagination, { TPaginationProps } from './index';

export default {
  title: 'Common/Common/Pagination',
  component: Pagination,
} as Meta;

const Template: Story<TPaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});

Default.args = {
  totalItems: 40,
  itemsPerPage: 5,
};
