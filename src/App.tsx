import React from 'react';
import Board from './components/Board';
import './App.css';
import { ContextWrapper } from './context/GlobalContext';

const App: React.FC = () => {
  return (
    <ContextWrapper>
      <Board />
    </ContextWrapper>
  );
};

export default App;
