import P from 'prop-types';
import { GiGemini } from 'react-icons/gi';
import * as S from './styles';

import { Container } from '../Container';
import { Heading } from '../Heading';
import { Menu } from '../Menu';
import { menuData } from './menu';

export function Navbar({ bkColor = true }) {
  return (
    <S.Header bkColor={bkColor}>
      <Container>
        <S.Logo>
          {bkColor ? (
              <Heading colorDark={false}>
                <GiGemini />Gemini
              </Heading>
            ) : (
              <Heading colorDark>
                <GiGemini />Gemini
              </Heading>
            )
          }
        </S.Logo>
        <Menu links={menuData}/>
      </Container>
    </S.Header>
  )
};

Navbar.propTypes = {
  bkColor: P.bool,
  ...Menu.propTypes,
};
