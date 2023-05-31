import { Menu } from '.';
import { menuData } from '../../data/MenuItens/menu';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: menuData,
  },
};

export const Template = (args) => <Menu {...args} />;
