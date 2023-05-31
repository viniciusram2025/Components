import { SectionTwoColumns } from '.';
import { SectionItens } from '../../data/SectionTwoColumnsItens/Itens';

export default {
  title: 'SectionTwoColumns',
  component: SectionTwoColumns,
  args: {
    children: SectionItens.children,
    title: SectionItens.title,
    defaultImage: SectionItens.defaultImage,
    altText: SectionItens.altText,
    heightImg: SectionItens.heightImg,
  },
  argTypes: {
    children: { type: 'string' },
    title: { type: 'string' },
    defaultImage: { type: 'string' },
    altText: { type: 'string' },
    heightImg: { type: 'string' },
  },
};

export const Template = (args) => (
  <div>
    <SectionTwoColumns {...args} />
  </div>
);
