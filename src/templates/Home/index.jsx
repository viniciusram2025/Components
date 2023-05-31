import { ThemeProvider } from 'styled-components';
import { Navbar } from '../../components/Navbar';
import { SectionTwoColumns } from '../../components/SectionTwoColumns';
import { ToggleButton } from '../../components/ToggleButton';
import { SectionItens } from '../../data/SectionTwoColumnsItens/Itens';
import { useDarkMode } from '../../hooks/useDarkMode/useDarkMode';
import { GlobalStyles } from '../../styles/global-styles';
import { darkTheme, lightTheme } from '../../styles/theme';

const Home = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <ToggleButton theme={theme} toggleTheme={themeToggler} />
      <Navbar />

      <SectionTwoColumns menuItens={SectionItens} />

      <GlobalStyles />
    </ThemeProvider>
  );
};
export default Home;
