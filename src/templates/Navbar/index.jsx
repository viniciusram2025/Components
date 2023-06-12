// Icons
import { GiGemini } from 'react-icons/gi';

// styles
import * as S from './styles';

// data
import { menuData } from '../../data/MenuItens/menu';

// components
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { Menu } from '../../components/Menu';

const Navbar = () => (
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

export default Navbar ;
