import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TruncateString } from '.';
import { TruncateStringProps } from './component';

export default {
  title: 'String Truncate',
  component: TruncateString,
  parameters: {
    componentSubtitle:
      'Truncates string to fit within given length with appended ellipsis. Option to keep last word.',
  },
} as Meta;

export const Truncate: Story<TruncateStringProps> = (args) => (
  <TruncateString {...args} str="Lorem ipsum dolor sit amet" length={20} />
);

export const KeepLastWord: Story<TruncateStringProps> = (args) => (
  <TruncateString
    {...args}
    str="Lorem ipsum dolor sit amet"
    length={20}
    keepLastWord
  />
);
