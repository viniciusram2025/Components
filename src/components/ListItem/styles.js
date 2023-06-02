import styled from 'styled-components';

export const Li = styled.li`
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacings.space01};
  font-size: ${({ theme }) => theme.fontSizes.small};

  svg {
    height: 15px;
    width: 15px;
    margin-right: 1rem;
  }
`;
