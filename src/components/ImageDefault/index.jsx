import P from 'prop-types';

export const ImageDefault = ({ srcImg, altText, heightImg, widthImg }) => (
    <img
      src={srcImg}
      alt={altText}
      style={{
        height: heightImg,
        width: widthImg
      }}
    />
  )

ImageDefault.propTypes = {
  srcImg: P.node.isRequired,
  altText: P.string.isRequired,
  heightImg: P.node.isRequired,
  widthImg: P.node,
};
