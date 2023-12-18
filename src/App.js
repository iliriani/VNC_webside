// App.js
import React, { useState } from 'react';
import './style.css';
import EichholzSiloContent from './EichholzSiloContent';
import NYRContent from './NYRContent';

const App = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="app-container">
      {/* Header with Figure */}
      <header className="app-header">
      <img src="..\img\Logo-perga.png" alt="Logo" className="header-image" style={{ width: '50%' }} />

      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Menu */}
        <div className="menu-container">
          <button onClick={() => handleButtonClick('EichholzSilo')}>Eichholz Silo</button>
          <button onClick={() => handleButtonClick('NYR')}>NYR</button>
        </div>

        {/* Display Content on the Right */}
        <div className="content-display">
          {selectedButton === 'EichholzSilo' && <EichholzSiloContent />}
          {selectedButton === 'NYR' && <NYRContent />}
        </div>
      </div>
    </div>
  );
};

export default App;
