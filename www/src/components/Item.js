import { useRef } from 'react';

const Item = ({ item, onDelete, onToggleCompleted, onEdit }) => {
  const itemRef = useRef();
  const inputOffsetRef = useRef();

  return (
    <h5 ref={itemRef} style={{ borderColor: 'blue', padding: '5px', margin: '5px', backgroundColor: 'white' }}>
      <div className='col s12 '>
        {item.completed ? (
          <span>
            <i className='material-icons list-icon col  ' style={{ color: 'green' }} onClick={() => onToggleCompleted(item)}>
              check_circle
            </i>
            <span className='col s10 light-gray' style={{ verticalAlign: 'middle', textDecoration: 'line-through' }}>
              {item.text}
            </span>
            <i className='col material-icons list-icon right ic-red light-gray  ' onClick={() => onDelete(item.id)}>
              delete
            </i>
          </span>
        ) : (
          <span>
            <i className='col material-icons list-icon ic-green  ' onClick={() => onToggleCompleted(item)}>
              radio_button_unchecked
            </i>
            <span ref={inputOffsetRef} className='col ' style={{ verticalAlign: 'middle' }}>
              {item.text}
            </span>
            <i className='col material-icons list-icon right ic-red  ' onClick={() => onDelete(item.id)}>
              delete
            </i>
            <i className='col material-icons list-icon right ic-blue  ' onClick={() => onEdit(item, itemRef, inputOffsetRef)}>
              mode_edit
            </i>
          </span>
        )}
      </div>
    </h5>
  );
};

export default Item;
