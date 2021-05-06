import { useState, useRef, useEffect } from 'react';

const AddItem = ({ onAdd }) => {
  const [text, setText] = useState('');
  const completed = false;
  const addItemInput = useRef(null);

  useEffect(() => {
    addItemInput.current.focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ text, completed });
    setText('');
  };

  return (
    <form className='row' onSubmit={onSubmit}>
      <div className='input-field inline col s12'>
        <input type='text' placeholder='Add Item' required ref={addItemInput} className='col s10 validate ' value={text} onChange={(e) => setText(e.target.value)} />
        <button className='btn-floating btn-large waves-effect waves-light blue right add-icon ' type='submit' name='action'>
          <i className='material-icons  '>add_task</i>
        </button>
      </div>
    </form>
  );
};

export default AddItem;
