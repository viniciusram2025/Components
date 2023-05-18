import P from 'prop-types';
import * as S from './styles';

export const ImageDefault = ({ srcImg, altText, heightImg, widthImg }) => (
    <S.ImageDefault
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

  /* opcional/optional */
  widthImg: P.node,
};
