import { SectionThreeColumns } from '.';

export default {
  title: 'SectionThreeColumns',
  component: SectionThreeColumns,
  args: {
    children: 'SectionThreeColumns',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => (
  <div>
    <SectionThreeColumns {...args} />
  </div>
);
