import styled, {css} from 'styled-components';


export const LinkMenu = styled.a`
  ${({theme}) => css`
      font-size: ${theme.fontSizes.medium};
      text-decoration: none;
      font-family: ${theme.fontFamily.title};
      display: inline-block;
      padding: ${theme.spacings.space04} 0;
      cursor: pointer;
      position: relative;



      ::after {
        content: '';
        position: absolute;
        top: 75%;
        left: 0;
        width: 100%;
        height: 2px;
        background: ${theme.colors.text};
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
