import { useState } from 'react';

const AddItem = ({ onAdd }) => {
  const [text, setText] = useState('');
  const completed = false;

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ text, completed });
    setText('');
  };

  return (
    <form className='row' onSubmit={onSubmit}>
      <div className='input-field inline col s12'>
        <input type='text' placeholder='Add Item' required className='col s10 validate' value={text} onChange={(e) => setText(e.target.value)} />
        <button type='submit' className='waves-effect waves-light btn col s2'>
          Add Item
        </button>
      </div>
    </form>
  );
};

export default AddItem;
