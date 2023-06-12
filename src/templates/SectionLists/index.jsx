/* eslint-disable react/no-array-index-key */
import P from 'prop-types';
import { MdDone } from 'react-icons/md';
import { ListItem } from '../../components/ListItem';
import * as S from './styles';

const SectionLists = ({ list = [] }) => (
  <S.Container>
    <S.BoxItems>
      <S.MenuList>
        {list.map((item, index) => (
          <ListItem key={index}>
            <MdDone />
            {item.item}
          </ListItem>
        ))}
      </S.MenuList>
    </S.BoxItems>
  </S.Container>
);

export default SectionLists;

SectionLists.propTypes = {
  list: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
    }),
  ),
};
