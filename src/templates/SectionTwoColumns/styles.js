import styled from 'styled-components';
import { Title } from '../../components/Heading/styles';
import { Container } from '../../components/Container/styles';

export const SectionContainer = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
`;
export const Content = styled.div`
  display: flex;
  padding: 4rem 0;
  margin: 0 auto;

  ${Container} {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 50%;

  ${Title} {
    padding-left: ${({ theme }) => theme.spacings.space03};
  }
`;
export const ContentImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  img {
    width: 100%;
  }
`;
