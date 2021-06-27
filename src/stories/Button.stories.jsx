// Button.stories.js | Button.stories.jsx

import React from 'react';

import { Button } from '../components/Button';

export default {
  component: Button,
  title: 'Components/Button',
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Secondary',
};

export const Small = Template.bind({});
Small.args = {
  primary: false,
  label: 'Small',
  size: 'small'
};

export const Large = Template.bind({});
Large.args = {
  primary: false,
  label: 'Large',
  size: 'large'
};
