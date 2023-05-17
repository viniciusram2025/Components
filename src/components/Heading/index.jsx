/* eslint-disable react/require-default-props */
import P from 'prop-types';
import * as S from './styles';

export function Heading({
  children,
  colorDark = true,
  size = 'big',
  uppercase = false,
}) {
  return (
    <S.Title
      colorDark={colorDark}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </S.Title>
  );
}

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: P.bool,
};
