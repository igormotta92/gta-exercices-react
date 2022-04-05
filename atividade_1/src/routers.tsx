import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/Home';
import { MoviesPage } from './pages/Movies';
import { SeriesPage } from './pages/Series';
import { ContactsPage } from './pages/Contacts';
import { Menu } from './components/Menu';

function Routers() {
  return (
    <BrowserRouter>
      <Menu>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Menu>
    </BrowserRouter>
  );
}

export default Routers;
