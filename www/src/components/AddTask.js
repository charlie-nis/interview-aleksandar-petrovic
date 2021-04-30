import { useState } from 'react';

const AddTask = ({ onAdd }) => {
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
    <form className='add-form' onSubmit={onSubmit}>
      <div className='input-field'>
        <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
        <input type='submit' value='Add Task' className='btn btn-block' />
      </div>
    </form>
  );
};

export default AddTask;
