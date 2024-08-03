import React, { createContext, useState }  from 'react';
import Header from './pages/Header';
import Hero from './pages/Hero';
import Footer from './pages/Footer';
import './App.css';

export const ThemeContext = createContext();

function App() {
  const [theme , setTheme] = useState('light');

  return (
    <div className='app container'>
      <ThemeContext.Provider value={{theme, setTheme}}>
      <Header />
      <Hero />
      <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
