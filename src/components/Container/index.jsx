import P from 'prop-types';
import * as S from './styles';

export function Container({ children }) {
  return <S.Container>{children}</S.Container>;
}

Container.propTypes = {
  children: P.node.isRequired,
};

