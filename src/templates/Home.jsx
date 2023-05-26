import { ThemeProvider } from 'styled-components';
import { Navbar } from '../components/Navbar';
import { ToggleButton } from '../components/ToggleButton';
import { useDarkMode } from '../hooks/useDarkMode/useDarkMode';
import { GlobalStyles } from '../styles/global-styles';
import { darkTheme, lightTheme } from '../styles/theme';

const Home = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <ToggleButton theme={theme} toggleTheme={themeToggler} />
      <Navbar />
      <GlobalStyles />
    </ThemeProvider>
  );
};
export default Home;
