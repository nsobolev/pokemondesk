import React, { PropsWithChildren } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import * as Button from './index';

export default {
  title: 'Common/Common/Button',
  component: Button.ViewButton,
  args: { children: 'Button' },
  argTypes: {
    color: { control: 'text' },
    size: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<PropsWithChildren<Button.ButtonProps>> = (args) => <Button.ViewButton {...args} />;

export const Primary = Template.bind({});

export const Danger = Template.bind({});
Danger.args = {
  color: Button.ColorsButton.Danger,
};

export const Success = Template.bind({});
Success.args = {
  color: Button.ColorsButton.Success,
};

export const Fluid = Template.bind({});
Fluid.args = {
  size: Button.SizesButton.Fluid,
};

export const Small = Template.bind({});
Small.args = {
  ...Success.args,
  size: Button.SizesButton.Small,
};
