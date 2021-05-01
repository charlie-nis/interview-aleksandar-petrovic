import { useState } from 'react';

const AddItem = ({ onAdd }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Please add a task');
      return;
    }

    onAdd({ text });
    setText('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='input-field'>
        <input type='text' placeholder='Add Item' value={text} onChange={(e) => setText(e.target.value)} />
        <input type='submit' value='Add Item' className='btn btn-block' />
      </div>
    </form>
  );
};

export default AddItem;
