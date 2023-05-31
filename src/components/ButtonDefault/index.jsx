/* eslint-disable react/require-default-props */
import P from 'prop-types';
import * as S from './styles';

export function ButtonDefault({ children, href, target }) {
  return (
    <S.Button href={href} target={target}>
      {children}
    </S.Button>
  );
}

ButtonDefault.propTypes = {
  children: P.string.isRequired,
  href: P.string.isRequired,
  target: P.string.isRequired,
};
