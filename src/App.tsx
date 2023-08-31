import React from 'react';

import {ToDoList} from './features';
import './App.css';
import logo from './logo.svg';

export const App: React.FC = () => (
  <div className="container">
    <header>
      <img src={logo} className="logo" alt="logo" />
      <h1>To Do list</h1>
    </header>
    <main>
      <ToDoList />
    </main>
  </div>
);

export default App;
