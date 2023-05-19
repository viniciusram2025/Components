/* eslint-disable react/require-default-props */
import P from 'prop-types';
import * as S from './styles';

export function Heading({
  children,
  size = 'big',
  uppercase = false,
}) {
  return (
    <S.Title
      size={size}
      uppercase={uppercase}
    >
      {children}
    </S.Title>
  );
}

Heading.propTypes = {
  children: P.node.isRequired,
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: P.bool,
};
