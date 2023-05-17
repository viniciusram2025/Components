import styled, {css} from 'styled-components';

import { Title } from '../Heading/styles';

export const Header = styled.header`
  ${({theme, bkColor}) => css`
    width: 100%;
    height: ${theme.spacings.xHuge};
    display: flex;
    align-items: center;
    background: ${bkColor ? theme.colors.black : theme.colors.white};
  `}
`;

export const Logo = styled.div`
  ${({theme}) => css`
      display: flex;
      align-items: center;
      gap: ${theme.spacings.small};

      ${ Title } {
        display: flex;
        align-items: center;

        svg {
          margin-right: ${theme.spacings.small};
        }
      }
  `}
`;
