import styled, { css } from 'styled-components';

export const Button = styled.a`
  ${({ theme }) => css`
    padding: ${theme.spacings.space04} ${theme.spacings.space06};
    text-decoration: none;
    color: ${theme.colors.buttonColor};
    font-weight: 600;
    border-radius: 6px;
    font-size: ${theme.fontSizes.normal};
    cursor: pointer;
    margin-top: 2rem;
    display: inline-flex;
    align-items: center;
    transition: all 300ms ease-in-out;
    background: rgb(242,46,46);
    margin-left: 1rem;
  `}
`;
