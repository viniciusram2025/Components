import { SectionLists } from '.';

export default {
  title: 'SectionLists',
  component: SectionLists,
  args: {
    children: 'SectionLists',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => (
  <div>
    <SectionLists {...args} />
  </div>
);
