import { ImageDefault } from ".";

export default {
  title: 'ImageDefault',
  component: ImageDefault,
  args: {
    srcImg: 'assets/img/logo.jpg',
    altText: 'Logo Teste',
    heightImg: '200px',
    widthImg: '200px',
  },
}

export const Template = (args) => (
    <ImageDefault {...args} />
);
