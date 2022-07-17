import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './button';

export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: { control: 'color' },
    disabled: { control: false }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Submit'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Button'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  label: 'Button'
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  label: 'Submit',
  disabled: true
};

export const Loading = Template.bind({});
Loading.args = {
  variant: 'primary',
  label: 'Button',
  loading: true
};
