import { Menu } from ".";
import { menuData } from '../Navbar/menu';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: menuData,
  }
}

export const Template = (args) => (
    <Menu {...args} />
);
