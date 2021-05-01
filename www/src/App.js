import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import './App.css';
import Navbar from './components/Navbar';
import AddItem from './components/AddItem';
import About from './components/About';
import Items from './components/Items';

function App() {
  const appVersion = '1.0';
  const [items, setItems] = useState([
    {
      id: '1',
      text: 'it1',
      completed: false,
    },
    {
      id: '2',
      text: 'it2',
      completed: false,
    },
    {
      id: '3',
      text: 'it3',
      completed: true,
    },
  ]);
  useEffect(() => {
    // Initialize Materialize JS
    M.AutoInit();
  });

  // Delete Item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  //Toggle completed
  const onToggleCompleted = (id) => {
    setItems(items.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)));
  };
  return (
    <Router>
      <Navbar appVersion={appVersion} />
      <div className='app-container'>
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              <AddItem onAdd={{}} />
              {items.length > 0 ? <Items items={items} onDelete={deleteItem} onToggleCompleted={onToggleCompleted} /> : 'add somthing to do'}
            </>
          )}
        ></Route>
        <Route
          path='/about'
          exact
          render={(props) => (
            <>
              <About appVersion={appVersion} />
            </>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
