import { MenuLink } from ".";

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: "Gemini",
  },
}

export const Template = (args) => (
    <MenuLink {...args} />
);
