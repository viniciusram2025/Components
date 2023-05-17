import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`font-size: ${theme.fontSizes.bigSmall};`,
  medium: (theme) => css`font-size: ${theme.fontSizes.medium};`,
  big: (theme) => css`font-size: ${theme.fontSizes.big};`,
  huge: (theme) => css`font-size: ${theme.fontSizes.huge};`,
};

const titleCase = (uppercase) => css`
    text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
    ${({ theme, colorDark, size, uppercase}) => css`
        color: ${colorDark ? theme.colors.black : theme.colors.white};
        ${titleSize[size](theme)};
        ${titleCase(uppercase)};
    `}
`;






