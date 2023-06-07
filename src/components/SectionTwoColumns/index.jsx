/* eslint-disable react/no-array-index-key */
import P from 'prop-types';
import { ButtonDefault } from '../ButtonDefault';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { ImageDefault } from '../ImageDefault';
import { TextContent } from '../TextContent/Index';
import * as S from './styles';

export const SectionTwoColumns = ({ menuItens = [] }) => (
  <S.SectionContainer>
    <Container>
      {menuItens.map((item, index) => (
        <S.Content key={index}>
          <S.ContentDiv>
            <Heading size="huge">{item.title}</Heading>
            <TextContent>{item.children}</TextContent>
            <ButtonDefault href="#" target="_self">
              Saiba mais
            </ButtonDefault>
          </S.ContentDiv>
          <S.ContentImage>
            <ImageDefault
              srcImg={item.defaultImage}
              altText={item.altText}
              heightImg={item.heightImg}
            />
          </S.ContentImage>
        </S.Content>
      ))}
    </Container>
  </S.SectionContainer>
);

SectionTwoColumns.propTypes = {
  menuItens: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      title: P.string.isRequired,
      defaultImage: P.node.isRequired,
      altText: P.string.isRequired,
      heightImg: P.string.isRequired,
    }),
  ),
};
