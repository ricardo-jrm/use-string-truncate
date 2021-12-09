import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Component, ComponentProps } from './component';

export default {
  title: 'String Truncate',
  component: Component,
  parameters: {
    componentSubtitle: 'Component Test',
  },
} as Meta;

export const StoryComponent: Story<ComponentProps> = (args) => (
  <Component {...args} text="Hello World" />
);
