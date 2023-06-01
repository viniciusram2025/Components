import {
  ListItens1,
  ListItens2,
  ListItens3,
} from '../../data/ListFuncItens/ListFuncItens';
import { ListItem } from '../ListItem';
import * as S from './styles';

export const SectionThreeColumns = () => (
  <S.Container>
    <S.BoxItems>
      <ListItem itens={ListItens1} />
      <ListItem itens={ListItens2} />
      <ListItem itens={ListItens3} />
    </S.BoxItems>
  </S.Container>
);
