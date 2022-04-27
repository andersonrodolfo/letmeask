import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { AuthContextProvider } from './contexts/AuthContext';
import { AdminRoom } from './pages/AdminRoom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
import { GlobalStyle } from './styles/global';
import { darkMode } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={darkMode}>
      <GlobalStyle />
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
