import React from 'react';
import './App.scss';
import { Header } from './Components/Header/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body>
        <h1 className="h2">Body</h1>
      </body>
    </div>
  );
};

export default App;
