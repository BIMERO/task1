import React from 'react';
import './App.css';

import { Application } from './Component/Pages/Application';
import { Sidebar } from './Component/Sidebar/Sidebar';
import { Navbar } from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="App flex">
      <Sidebar/>
      <aside className='w-full'>
        <Navbar/>
        <Application/>
      </aside>
    </div>
  );
}

export default App;
