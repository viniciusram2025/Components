import { ThemeProvider } from 'styled-components';

// Components
import { Container } from '../../components/Container';
import { ToggleButton } from '../../components/ToggleButton';

// data
import {
  ListItens1,
  ListItens2,
  ListItens3,
} from '../../data/ListFuncItens/ListFuncItens';
import { SectionItens } from '../../data/SectionTwoColumnsItens/Itens';

// hooks
import { useDarkMode } from '../../hooks/useDarkMode/useDarkMode';

// styles
import { GlobalStyles } from '../../styles/global-styles';
import { darkTheme, lightTheme } from '../../styles/theme';
import * as S from './styles';

// templates
import  Navbar  from '../Navbar';
import  SectionLists  from '../SectionLists';
import  SectionTwoColumns  from '../SectionTwoColumns';

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
