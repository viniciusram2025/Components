import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 ${theme.spacings.space07};

    @media (max-width: 85rem) {
        max-width: 85rem;
        width: 64rem;
        padding: 0 ${theme.spacings.space05};
    }
    @media (max-width: 64rem) {
        max-width: 64rem;
        width: 48rem;
    }
    @media (max-width: 48rem) {
        max-width: 48rem;
        width: 100%;
    }
  `}
`;
