import React, { Fragment, useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import './App.css';
import Navbar from './components/Navbar';
import AddTask from './components/AddTask';

function App() {
  
  useEffect(() => {
    // Initialize Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <Navbar />
      <div className='app-container'>
        <AddTask onAdd={{}} />
      </div>
    </Fragment>
  );
}

export default App;
