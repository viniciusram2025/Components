import P from 'prop-types';
import { MenuLink } from '../MenuLink';
import * as S from './styles';

export const Menu = ({ links = [] }) => {
  <S.NavMenu aria-label="Main menu">
    {links.map((item) => (
      <S.MenuList key={item.link}>
        <S.MenuItem>
          <MenuLink to={item.link}>{item.children}</MenuLink>
        </S.MenuItem>
      </S.MenuList>
    ))}
  </S.NavMenu>
};

Menu.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};
