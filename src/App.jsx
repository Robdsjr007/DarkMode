import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';

import Home from './pages/Home/Home';
import About from './pages/About/About';

import { useEffect } from 'react';

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("Modo Escuro", preference);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [setIsDark]);

  return (
    <Router>
      <main className="App" data-theme={isDark ? "dark" : "light"}>
        <Routes>
          <Route path="/" element={<Home isDark={isDark} setIsDark={setIsDark} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
