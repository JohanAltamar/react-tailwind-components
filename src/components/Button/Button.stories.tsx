import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
    title: 'Example TS/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Primary',
    size: 'medium',
    backgroundColor: 'bg-blue-200'
}