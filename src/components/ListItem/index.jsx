import P from 'prop-types';
import * as S from './styles';

export const ListItem = ({ children }) => <S.Li>{children}</S.Li>;

ListItem.propTypes = {
  children: P.string.isRequired,
};
