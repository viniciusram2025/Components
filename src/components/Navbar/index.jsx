// Icons
import { GiGemini } from 'react-icons/gi';

// styles
import * as S from './styles';

// data
import { menuData } from '../../data/MenuItens/menu';

// components
import { Container } from '../Container';
import { Heading } from '../Heading';
import { Menu } from '../Menu';

export const Navbar = () => (
  <S.Header>
    <Container>
      <S.Logo>
        <Heading size="huge">
          <GiGemini />
          Gemini
        </Heading>
      </S.Logo>
      <Menu links={menuData} />
    </Container>
  </S.Header>
);
