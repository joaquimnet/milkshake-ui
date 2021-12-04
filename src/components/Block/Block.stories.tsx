import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Block from './Block';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'MilkshakeUI/Block',
  component: Block,
} as ComponentMeta<typeof Block>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Block> = (args) => <Block {...args} />;

export const BlockWithText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BlockWithText.args = {
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repudiandae aut voluptate
      optio ab a, odio commodi, ipsum voluptatibus incidunt odit amet labore possimus ut vel sunt
      enim ullam nemo.
    </p>
  ),
  style: { fontFamily: 'Roboto, sans-serif' },
};

// export const ClickMe = Template.bind({});
// ClickMe.args = {
//   label: 'Click me!',
// };
