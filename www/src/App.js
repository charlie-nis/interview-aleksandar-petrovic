import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Navbar from './components/Navbar';
import AddItem from './components/AddItem';
import About from './components/About';
import Items from './components/Items';
import EditItemModal from './components/EditItemModal';
import axios from 'axios';

function App() {
  const appVersion = '1.0';
  const url = 'http://localhost:5000/api/items';
  const [items, setItems] = useState([]);
  const [editState, setEditState] = useState({ showModal: false, item: [], ref: [] });

  useEffect(() => {
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

  //Edit Item
  const onEdit = (item, itemRef) => {
    console.log(itemRef);
    //e.preventDefault();

    setEditState({ showModal: true, item: item, ref: itemRef });
  };

  const modalHandler = () => {
    console.log(editState);
    let newEditState = { ...editState, showModal: false };
    setEditState(newEditState);
  };

  const onChangeItem = (text) => {
    let newItem = { ...editState.item, text: text.text };
    let newEditState = { ...editState, showModal: false, item: newItem };
    setEditState(newEditState);
    text.text === '' ? deleteItem(newItem.id) : updateItem(newItem);
    console.log(newEditState);
  };

  return (
    <Router>
      <Navbar appVersion={appVersion} />

      <div className='container card-panel rounded' style={{ paddingBottom: '30px' }}>
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              <EditItemModal editState={editState} modalHandler={modalHandler} onChangeItem={onChangeItem} />
              <AddItem onAdd={addItem} />

              {items.length > 0 ? <Items items={items} onDelete={deleteItem} onToggleCompleted={onToggleCompleted} onEdit={onEdit} /> : 'add something to do'}
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
