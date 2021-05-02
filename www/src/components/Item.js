import { MdCancel } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';
import { MdCheckCircle } from 'react-icons/md';
import { MdRadioButtonUnchecked } from 'react-icons/md';

const Item = ({ item, onDelete, onToggleCompleted }) => {
  return (
    <div className=''>
      <h4>
        <span>
          {item.completed ? (
            <>
              <MdCheckCircle style={{ color: 'green', cursor: 'pointer' }} onClick={() => onToggleCompleted(item)} />
              <span style={{ textDecoration: 'line-through' }}> {item.text}</span>
            </>
          ) : (
            <span className='right-align'>
              <MdRadioButtonUnchecked style={{ color: 'gray', cursor: 'pointer' }} onClick={() => onToggleCompleted(item)} />
              {item.text}
              <MdModeEdit className='' style={{ color: 'blue', cursor: 'pointer' }} onClick={() => onToggleCompleted(item)} />
            </span>
          )}
        </span>

        <MdCancel className='right' style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(item.id)} />
      </h4>
    </div>
  );
};

export default Item;
