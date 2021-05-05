import { useState, useEffect } from 'react';
import Backdrop from './Backdrop';

const EditItemModal = ({ editState, modalHandler, onChangeItem }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onChangeItem({ text });
  };
  useEffect(() => {
    setText(editState.item.text);
  }, [editState.item.text]);

  return (
    <div className=''>
      <Backdrop show={editState.showModal} modalHandler={modalHandler} />
      <div
        className='EditItemModal row '
        style={
          editState.showModal
            ? {
                opacity: 1,
                padding: 0,
                top: editState.ref.current.offsetTop - 2,
                height: editState.ref.current.offsetHeight + 4,
                left: editState.ref.current.offsetLeft,
                width: editState.ref.current.offsetWidth,
                paddingLeft: editState.ref.current.children[0].children[0].children[1].offsetLeft - editState.ref.current.offsetLeft,

                paddingRight: '0px',
                verticalAlign: 'middle',
              }
            : {
                opacity: 0,
                top: 0,
                height: 0,
                left: 0,
                width: 0,
              }
        }
      >
        <form className='col s12' style={{ verticalAlign: 'middle', margin: 0, padding: 0 }} onSubmit={onSubmit}>
          <div className='input-field  col s12 valign-wrapper ' style={{ padding: 0, margin: 0 }}>
            <input
              type='text'
              placeholder='If you submit empty task, it will delete it'
              // required
              className='col s10'
              style={{ marginLeft: 0, padding: 0, margin: 0 }}
              value={text || ''}
              onChange={(e) => setText(e.target.value)}
            />
            <i className='col material-icons list-icon right ic-green  ' style={{ margin: '5px', marginLeft: '3px', marginTop: '9px' }} onClick={onSubmit}>
              check_circle
            </i>
            <i className='col material-icons list-icon right ic-red ' style={{ marginTop: '3px' }} onClick={modalHandler}>
              cancel
            </i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditItemModal;
