import styled from 'styled-components';

export const Text = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.normal};
    font-family: ${({ theme }) => theme.fontFamily.default};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    padding: ${({ theme }) => theme.spacings.space03};
    color: ${({ theme }) => theme.colors.text};
`;
