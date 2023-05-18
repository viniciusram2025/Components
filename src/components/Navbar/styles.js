import styled, {css} from 'styled-components';
import { Container } from '../Container/styles';
import { Title } from '../Heading/styles';
import { LinkMenu } from '../MenuLink/styles';

export const Header = styled.header`
  ${({ theme, bkColor }) => css`
    width: 100%;
    height: ${theme.spacings.xHuge};
    display: flex;
    align-items: center;
    background: ${ bkColor ? theme.colors.black : theme.colors.white };

    ${Container} {
      display: flex;
      justify-content: space-between;
      align-items: center;

      ${LinkMenu} {
        color: ${ bkColor ? theme.colors.white : theme.colors.black};
      }
    }
  `}
`;

export const Logo = styled.div`
  ${({ theme }) => css`
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
