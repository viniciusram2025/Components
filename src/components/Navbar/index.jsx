import { GiGemini } from 'react-icons/gi';
import * as S from './styles';

import { Container } from '../Container';
import { Heading } from '../Heading';
import { Menu } from '../Menu';
import { menuData } from './menu';

export const Navbar = () => (
    <S.Header >
      <Container>
        <S.Logo>
          <Heading size='huge'>
            <GiGemini />Gemini
          </Heading>
        </S.Logo>
        <Menu links={menuData} />
      </Container>
    </S.Header>
  );
