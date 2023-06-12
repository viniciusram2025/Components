/* eslint-disable react/no-array-index-key */
import P from 'prop-types';
import { ButtonDefault } from '../../components/ButtonDefault';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { ImageDefault } from '../../components/ImageDefault';
import { TextContent } from '../../components/TextContent';
import * as S from './styles';

const SectionTwoColumns = ({ menuItens = [] }) => (
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

export default SectionTwoColumns;

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
