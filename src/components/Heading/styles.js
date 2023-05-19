import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`font-size: ${theme.fontSizes.small};`,
  medium: (theme) => css`font-size: ${theme.fontSizes.normal};`,
  big: (theme) => css`font-size: ${theme.fontSizes.heading06};`,
  huge: (theme) => css`font-size: ${theme.fontSizes.heading04};`,
};

const titleCase = (uppercase) => css`
    text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
    ${({ theme, size, uppercase}) => css`
        color: ${theme.colors.text};
        font-family: ${theme.fontFamily.title};
        ${titleSize[size](theme)};
        ${titleCase(uppercase)};

    `}
`;






