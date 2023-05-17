import { Heading } from ".";

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
    /* O texto q será renderizado no storybook, como children do title */
  },
  argTypes: {
    children: { type: 'string' },
    /* tipo do Children */
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}


export const Light = (args) => <Heading {...args} />
export const Dark = (args) =>  <Heading {...args} />


Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'O texto está claro',
  colorDark: false,
};
