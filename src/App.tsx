import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { AuthContextProvider } from './contexts/AuthContext';
import { useDarkMode } from './hooks/useDarkMode';
import { AdminRoom } from './pages/AdminRoom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
import { GlobalStyle, ToggleThemeMode } from './styles/global';
import { lightTheme, darkTheme } from './styles/theme';

function App() {
  const { theme, toggleTheme, componentMounted } = useDarkMode();
  let themeMode = lightTheme;
  let isToggleChecked = false;

  if (theme === 'dark') {
    themeMode = darkTheme;
    isToggleChecked = true;
  }

  if (!componentMounted) return null;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <ToggleThemeMode isChecked={isToggleChecked} callback={toggleTheme} />
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms/new" element={<NewRoom />} />
            <Route path="/rooms/:id" element={<Room />} />
            <Route path="admin/rooms/:id" element={<AdminRoom />} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
