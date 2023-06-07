import styled, { css } from 'styled-components';
import { Container as NavContainer } from '../Container/styles';
import { Title } from '../Heading/styles';

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.spacings.space11};
    align-items: center;
    display: flex;
    background: ${theme.colors.background};
    position: fixed;
    z-index: 1;
    box-shadow: 0 0 8px rgba(0,0,0,.4);

    ${NavContainer} {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `}
`;

export const Logo = styled.div`
  ${({ theme }) => css`
      display: flex;

      ${Title} {
        display: flex;
        align-items: center;

        svg {
          margin-right: ${theme.spacings.space03};
        }
      }
  `}
`;
