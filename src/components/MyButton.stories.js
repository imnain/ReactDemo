import React from 'react';
import MyButton from './MyButton';

export default {
  title: 'MyButton',
  component: MyButton,
};

const Template = (args) => <MyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Secondary Button',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  label: 'Success Button',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  label: 'Danger Button',
};
