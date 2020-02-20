import React from 'react';
import './App.scss';
import { Navbar } from './Components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <div className="App container">
      <header>
        <Navbar />
      </header>
      <body>
        <h1 className="h2">Body</h1>
      </body>
    </div>
  );
};

export default App;
