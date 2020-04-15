import React from 'react';
import logo from './logo.svg';
//import './App.css';

import { Counter } from './components/Counter';

export const App = props => {
  return (
    <div>
      <Counter texte="J'aime" />
      <Counter texte="j'aime pas" />
    </div>
  );
};


