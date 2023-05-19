import styled, {css} from 'styled-components';
import { Container } from '../Container/styles';
import { Title } from '../Heading/styles';

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.spacings.space11};
    display: flex;
    align-items: center;
    background: ${theme.colors.background};
    position: fixed;
    z-index: 1;

    ${Container} {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `}
`;

export const Logo = styled.div`
  ${({ theme }) => css`
      display: flex;
      align-items: center;

      ${ Title } {
        display: flex;
        align-items: center;

        svg {
          margin-right: ${theme.spacings.space03};
        }
      }
  `}
`;
