import P from 'prop-types';
import { GiGemini } from 'react-icons/gi';
import * as S from './styles';

import { Container } from '../Container';
import { Heading } from '../Heading';
import { Menu } from '../Menu';
import { menuData } from './menu';

export const Navbar = ({ bkColor = true }) => (
    <S.Header bkColor={bkColor}>
      <Container>
        <S.Logo>
          {bkColor ? (
              <Heading colorDark={false} size='big'>
                <GiGemini />Gemini
              </Heading>
            ) : (
              <Heading colorDark size='big'>
                <GiGemini />Gemini
              </Heading>
            )
          }
        </S.Logo>
        <Menu links={menuData} bkColor={bkColor} />
      </Container>
    </S.Header>
  );

Navbar.propTypes = {
  bkColor: P.bool,
};
