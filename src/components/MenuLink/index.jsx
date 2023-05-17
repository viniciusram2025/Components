import P from 'prop-types';
import * as S from './styles';

export function MenuLink({ children, link, newTab = false }) {
  const target = newTab ? '_blank' : '_self';

  return (
    <S.linkMenu href={link} target={target}>
      {children}
    </S.linkMenu>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};
