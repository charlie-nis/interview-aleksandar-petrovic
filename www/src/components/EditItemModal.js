import { useState, useEffect, useRef } from 'react';
import Backdrop from './Backdrop';

const EditItemModal = ({ editState, closeModal, onChangeItem }) => {
  const [text, setText] = useState('');
  const myInput = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    onChangeItem({ text });
    myInput.current.blur();
  };

  useEffect(() => {
    myInput.current.focus();
    setText(editState.item.text);
  }, [editState.showModal, editState.item.text]);

  return (
    <div className=''>
      <Backdrop show={editState.showModal} closeModal={closeModal} />
      <div
        className='EditItemModal row '
        style={
          editState.showModal
            ? {
                opacity: 1,
                padding: 0,
                top: editState.itemRef.current.offsetTop - 2,
                height: editState.itemRef.current.offsetHeight + 4,
                left: editState.itemRef.current.offsetLeft,
                width: editState.itemRef.current.offsetWidth,
                paddingLeft: editState.inputOffsetRef.current.offsetLeft - editState.itemRef.current.offsetLeft,

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
              ref={myInput}
              className='col s10'
              style={{ marginLeft: 0, padding: 0, margin: 0 }}
              value={text || ''}
              onChange={(e) => setText(e.target.value)}
            />
            <i className='col material-icons list-icon right ic-green  ' style={{ margin: '5px', marginLeft: '3px', marginTop: '9px' }} onClick={onSubmit}>
              check_circle
            </i>
            <i className='col material-icons list-icon right ic-red ' style={{ marginTop: '3px' }} onClick={closeModal}>
              cancel
            </i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditItemModal;
