import P from 'prop-types';
import * as S from './styles';

export const TextContent = ({ children }) => <S.Text>{children}</S.Text>;

TextContent.propTypes = {
  children: P.node.isRequired,
};
