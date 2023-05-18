import styled, {css} from 'styled-components';


export const LinkMenu = styled.a`
  ${({theme}) => css`
      color: ${theme.colors.white};
      font-size: ${theme.fontSizes.medium};
      text-decoration: none;
      font-family: ${theme.fontFamily.title};
      display: inline-block;
      padding: ${theme.spacings.medium} 0;
      cursor: pointer;
      position: relative;



      ::after {
        content: '';
        position: absolute;
        top: 75%;
        left: 0;
        width: 100%;
        height: 2px;
        background: ${theme.colors.white};
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .5s;
      }
      :hover::after {
        transform-origin: left;
        transform: scaleX(1);
      }
  `}
`;
