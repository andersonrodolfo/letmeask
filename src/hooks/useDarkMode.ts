import { useEffect, useState } from 'react';
export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  function setMode(mode: string) {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  }

  function toggleTheme() {
    if (theme === 'light') setMode('dark');
    else setMode('light');
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) setTheme(localTheme);
    else setMode('light');
    setComponentMounted(true);
  }, []);

  return { theme, toggleTheme, componentMounted };
};
