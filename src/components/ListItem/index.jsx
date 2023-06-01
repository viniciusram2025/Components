import P from 'prop-types';
import * as S from './styles';

export const ListItem = ({ itens = [] }) =>
  itens.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <S.ListItems key={index}>
      <S.Li>{item.item1}</S.Li>
      <S.Li>{item.item2}</S.Li>
      <S.Li>{item.item3}</S.Li>
      <S.Li>{item.item4}</S.Li>
      <S.Li>{item.item5}</S.Li>
      <S.Li>{item.item6}</S.Li>
    </S.ListItems>
  ));

ListItem.propTypes = {
  itens: P.arrayOf(
    P.shape({
      item1: P.string.isRequired,
      item2: P.string.isRequired,
      item3: P.string.isRequired,
      item4: P.string.isRequired,
      item5: P.string.isRequired,
      item6: P.string.isRequired,
    }),
  ),
};
