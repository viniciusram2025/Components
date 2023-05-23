/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Navbar } from '../components/Navbar';
import { ToggleButton } from '../components/ToggleButton';
import { GlobalStyles } from '../styles/global-styles';
import { darkTheme, lightTheme } from '../styles/theme';

function Home() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <ToggleButton onClick={toggleTheme} />
      <Navbar />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default Home;
