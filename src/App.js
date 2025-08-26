import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Accommodation from './Pages/Accommodation';
import Pricing from './Pages/Pricing';
import Contacts from './Pages/Contacts';
import { styled } from 'styled-components';
import Preloader from './components/Preloader';
import NotFound from './Pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Globální stav pro loader
  const [loading, setLoading] = useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Preloader se schová, jakmile je vše načteno
    const handleLoad = () => setLoading(false);
    window.addEventListener('load', handleLoad);

    // Když už je dokument načtený (rychlé přechody apod.)
    if (document.readyState === 'complete') {
      setLoading(false);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {loading && <Preloader />}

      {/* schovej web dokud se nenačte */}
      <div style={{ display: loading ? 'none' : 'block' }}>
        <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} windowWidth={windowWidth} />
        <ScrollToTop />
        <AppContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppContainer>
      </div>
    </>
  );
}

const AppContainer = styled.div`
  text-align: center;
`;

export default App;
