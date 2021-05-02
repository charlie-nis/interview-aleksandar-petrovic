import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import './App.css';
import Navbar from './components/Navbar';
import AddItem from './components/AddItem';
import About from './components/About';
import Items from './components/Items';
import axios from 'axios';

function App() {
  const appVersion = '1.0';
  const url = 'http://localhost:5000/api/items';
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Initialize Materialize JS
    M.AutoInit();
    getAllItems();
  }, []);

  //Get All Items
  const getAllItems = () => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        const allItems = res.data.map((item) => ({ id: item._id, text: item.text, completed: item.completed }));
        setItems(allItems);
        //console.log(allItems);
      })
      .catch((error) => console.log(error));
  };

  // Update Item
  const updateItem = (item) => {
    axios
      .put(`${url}/${item.id}`, item)
      .then((res) =>
        res.data.success
          ? setItems(items.map((mItem) => (mItem.id === item.id ? { id: item.id, text: item.text, completed: item.completed } : mItem)))
          : alert('Something went wrong')
      )
      .catch((err) => alert('Something went wrong'));
  };

  // Delete Item
  const deleteItem = (id) => {
    axios
      .delete(`${url}/${id}`)
      .then((res) => (res.data.success ? setItems(items.filter((item) => item.id !== id)) : alert('Something went wrong')))
      .catch((err) => alert('Something went wrong'));
  };

  //Toggle completed
  const onToggleCompleted = (item) => {
    item = { ...item, completed: !item.completed };
    updateItem(item);
  };

  // Add Item
  const addItem = (item) => {
    axios
      .post(url, item)
      .then((res) => {
        item = { ...item, id: res.data._id };
        setItems([...items, item]);
      })
      .catch((error) => {
        console.log(error);
      });
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
              <AddItem onAdd={addItem} />
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
