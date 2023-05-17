import { Container } from ".";

export default {
  title: 'Container',
  component: Container,
  args: {},
  argTypes: {children: { type: ''}},

}

export const Template = (args) => (
    <Container {...args} />
);
