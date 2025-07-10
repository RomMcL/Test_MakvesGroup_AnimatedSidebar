import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/tokens';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft, faAngleRight, faHome, faChartLine, faChartColumn, faWallet, 
  faChartPie, faEnvelope, faSliders, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

import Sidebar from './components/Sidebar/Sidebar';

import cssMain from './styles/main.css';

const { Main } = cssMain;


library.add(faAngleLeft, faAngleRight, faHome, faChartLine, faChartColumn, faWallet, 
  faChartPie, faEnvelope, faSliders, faPhoneVolume);

function App() {

  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
    return (
      <ThemeProvider theme={theme[currentTheme]}>
        <Main>
          <Sidebar color={currentTheme} toggleTheme={toggleTheme} />
        </Main>        
      </ThemeProvider>
    );
};

export default App;
