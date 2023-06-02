import { ThemeProvider } from 'styled-components';
import { Container } from '../../components/Container';
import { Navbar } from '../../components/Navbar';
import { SectionLists } from '../../components/SectionLists';
import { SectionTwoColumns } from '../../components/SectionTwoColumns';
import { ToggleButton } from '../../components/ToggleButton';
import {
  ListItens1,
  ListItens2,
  ListItens3,
} from '../../data/ListFuncItens/ListFuncItens';
import { SectionItens } from '../../data/SectionTwoColumnsItens/Itens';
import { useDarkMode } from '../../hooks/useDarkMode/useDarkMode';
import { GlobalStyles } from '../../styles/global-styles';
import { darkTheme, lightTheme } from '../../styles/theme';
import * as S from './styles';

const Home = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <ToggleButton theme={theme} toggleTheme={themeToggler} />
      <Navbar />

      <SectionTwoColumns menuItens={SectionItens} />

      <S.Container>
        <Container>
          <SectionLists list={ListItens1} />
          <SectionLists list={ListItens2} />
          <SectionLists list={ListItens3} />
        </Container>
      </S.Container>
      <GlobalStyles />
    </ThemeProvider>
  );
};
export default Home;
